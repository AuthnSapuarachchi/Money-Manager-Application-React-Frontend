import { data } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import IncomeList from "../components/IncomeList";
import Model from "../components/Model";
import { Plus } from "lucide-react";


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
            const response = await axiosConfig.get(API_ENDPOINTS.categoryByType());
            if (response.status === 200) {
                const categories = response.data.categories || response.data;
                setCategories(categories);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Failed to fetch categories");
        }
        
    }

    useEffect(() => {
        fetchIncomeDetails();
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
                        Income Form Model
                    </Model>

                </div>
            </div>
        </Dashboard>
    )
}

export default Income;