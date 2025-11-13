import { data } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import IncomeList from "../components/IncomeList";
import Model from "../components/Model";
import { Plus } from "lucide-react";
import AddIncomeForm from "../components/AddIncomeForm";


const Income = () => {

    const [incomeData, setIncomeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openAddInomeModel, setOpenAddInomeModel] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState( {
        show: false,
        data: null,
    });   

    //fetch income details
    const fetchIncomeDetails = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.getAllIncomes);
            if (response.status === 200) {
                const incomes = response.data.incomes || response.data;
                setIncomeData(incomes);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Failed to fetch incomes");
        } finally {
            setLoading(false);
        }
    }

    //fetch categories for income
    const fetchIncomeCategories = async () => {
        try {
            // First try to get all categories
            const response = await axiosConfig.get(API_ENDPOINTS.getAllCategories);
            console.log('All categories response:', response.data);
            
            if (response.status === 200) {
                const allCategories = response.data.categories || response.data;
                console.log('All categories:', allCategories);
                
                // Filter for INCOME type categories (handle both 'INCOME' and 'Income')
                const incomeCategories = allCategories.filter(cat => 
                    cat.type?.toUpperCase() === 'INCOME'
                );
                console.log('Filtered INCOME categories:', incomeCategories);
                
                setCategories(incomeCategories);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
            toast.error(error.response?.data?.message || error.message || "Failed to fetch income categories");
        }
    }

    //save income details
    const handleAddIncome = async (income) => {
        
        const {name, amount, date, icon, categoryId} = income;
        if (!name) {
            toast.error('Please enter a name for the income.');
            return;
        }
        if(!amount || isNaN(amount) || Number(amount) <= 0) {
            toast.error('Please enter an amount for the income.');
            return;
        }
        if(!date) {
            toast.error('Please enter a date for the income.');
            return;
        }

        const today = new Date().toISOString().split('T')[0];

        if(date > today) {
            toast.error('Date can not be in the future');
            return;
        }
        if(!categoryId) {
            toast.error('Please select a category for the income.');
            return;
        }

        try {
            console.log('Submitting income data:', {
                name,
                amount: Number(amount),
                date,
                icon,
                categoryId
            });

            const response = await axiosConfig.post(API_ENDPOINTS.addIncome, {
                name,
                amount: Number(amount),
                date,
                icon,
                categoryId
            });

            console.log('Add income response:', response);

            if (response.status === 200 || response.status === 201) {
                toast.success('Income added successfully');
                setOpenAddInomeModel(false);
                await fetchIncomeDetails();
            }
        } catch (error) {
            console.error('Error adding income:', error);
            toast.error(error.response?.data?.message || error.message || "Failed to add income");
        }
    }

    useEffect(() => {
        fetchIncomeDetails(),
        fetchIncomeCategories();
    }, []);

    return (
        <Dashboard activeLink="income">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center justify-between">
                        {/* overview for income withline chart*/}
                        <h2 className="text-2xl font-bold text-gray-800">Income Management</h2>
                        <button 
                            className="flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md font-medium"
                            onClick={() => setOpenAddInomeModel(true)}
                            aria-label="Add new income"
                        >
                            <Plus size={18} /> 
                            Add Income
                        </button>
                    </div>
                    <IncomeList 
                        transactions={incomeData} 
                        onDelete={(id)=>console.log('delete income', id)}    
                    />

                    {/* add income modal */}
                    <Model 
                        isOpen={openAddInomeModel} 
                        onClose={() => setOpenAddInomeModel(false)}
                        title="Add Income"
                    >
                        <AddIncomeForm
                            onAddIncome={(income) => handleAddIncome(income)}
                            categories={categories}
                        />
                    </Model>

                    {/*Deleting the income */}
                    <Model 
                        
                    />

                </div>
            </div>
        </Dashboard>
    )
}

export default Income;