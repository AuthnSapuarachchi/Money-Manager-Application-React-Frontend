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
import DeleteAlert from "../components/DeleteAlert";
import IncomeOverview from "../components/IncomeOverview";
import * as XLSX from 'xlsx';
import moment from 'moment';


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

    //delete income details
    const handleDeleteIncome = async (incomeId) => {
        if (!incomeId) {
            toast.error('Invalid income ID');
            return;
        }

        try {
            const response = await axiosConfig.delete(API_ENDPOINTS.deleteIncome(incomeId));
            
            if (response.status === 200 || response.status === 204) {
                toast.success('Income deleted successfully');
                setOpenDeleteAlert({show: false, data: null});
                await fetchIncomeDetails();
            }
        } catch (error) {
            console.error('Error deleting income:', error);
            toast.error(error.response?.data?.message || error.message || "Failed to delete income");
        }
    }

    const handleDownloadincomeDetails = async() => {
    
        try{
            if (!incomeData || incomeData.length === 0) {
                toast.error('No income data available to download');
                return;
            }

            toast.loading('Preparing Excel file...');
            
            // Prepare data for Excel export
            const excelData = incomeData.map((income, index) => ({
                'No': index + 1,
                'Income Source': income.name || '',
                'Category': income.category?.name || income.title || '',
                'Amount': income.amount || 0,
                'Date': moment(income.date || income.createdAt).format('YYYY-MM-DD'),
                'Created At': moment(income.createdAt).format('YYYY-MM-DD HH:mm:ss'),
                'Icon': income.icon || ''
            }));

            // Create worksheet
            const worksheet = XLSX.utils.json_to_sheet(excelData);
            
            // Set column widths
            const columnWidths = [
                { wch: 5 },  // No
                { wch: 25 }, // Income Source
                { wch: 20 }, // Category
                { wch: 15 }, // Amount
                { wch: 15 }, // Date
                { wch: 25 }, // Created At
                { wch: 10 }  // Icon
            ];
            worksheet['!cols'] = columnWidths;

            // Create workbook
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Income Details');

            // Generate filename with current date
            const fileName = `Income_Details_${moment().format('YYYY-MM-DD')}.xlsx`;

            // Download file
            XLSX.writeFile(workbook, fileName);
            
            toast.dismiss();
            toast.success('Income details downloaded successfully');
        } catch (error) {
            toast.dismiss();
            console.error('Error downloading income details:', error);
            toast.error('Failed to generate Excel file');
        } 
    }

    const handleEmailIncomeDetails = async () => {
        try{
            if (!incomeData || incomeData.length === 0) {
                toast.error('No income data available to email');
                return;
            }

            // Prompt user for email address
            const toEmail = prompt('Enter email address to send the income report:');
            
            if (!toEmail) {
                toast.error('Email address is required');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(toEmail)) {
                toast.error('Please enter a valid email address');
                return;
            }

            toast.loading('Sending email with income report...');
            
            // Prepare data for backend
            const emailData = incomeData.map((income) => ({
                name: income.name || '',
                category: income.category?.name || income.title || '',
                amount: income.amount || 0,
                date: moment(income.date || income.createdAt).format('YYYY-MM-DD'),
                createdAt: moment(income.createdAt).format('YYYY-MM-DD HH:mm:ss'),
                icon: income.icon || ''
            }));

            // Send email via backend
            const response = await axiosConfig.post(API_ENDPOINTS.sendIncomeEmail, {
                toEmail: toEmail,
                incomes: emailData
            });
            
            toast.dismiss();
            
            if (response.status === 200) {
                toast.success(`Income report sent successfully to ${toEmail}`, {
                    duration: 5000
                });
            }
            
        } catch (error) {
            toast.dismiss();
            console.error('Error sending email:', error);
            
            if (error.response?.status === 400) {
                toast.error(error.response?.data?.message || 'Invalid request');
            } else if (error.response?.status === 500) {
                toast.error('Failed to send email. Please check email configuration.');
            } else {
                toast.error(error.response?.data?.message || 'Failed to send email');
            }
        }
    }

    useEffect(() => {
        fetchIncomeDetails(),
        fetchIncomeCategories();
    }, []);

    return (
        <Dashboard activeLink="income">
            <div className="my-5 mx-auto max-w-7xl">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
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

                    {/* Income Overview */}
                    <IncomeOverview transactions={incomeData} onAddIncome={() => setOpenAddInomeModel(true)} />

                    {/* Income List */}
                    <IncomeList 
                        transactions={incomeData} 
                        onDelete={(id)=> setOpenDeleteAlert({show: true, data: id})}  
                        onDownload={handleDownloadincomeDetails} 
                        onEmail={handleEmailIncomeDetails}  
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
                        isOpen={openDeleteAlert.show}
                        onClose={() => setOpenDeleteAlert({show: false, data: null})}
                        title="Delete Income"
                    >
                        <DeleteAlert 
                            data={openDeleteAlert.data}
                            onClose={() => setOpenDeleteAlert({show: false, data: null})}
                            onDelete={(id) => handleDeleteIncome(id)}
                        />
                    </Model>
                </div>
            </div>
        </Dashboard>
    )
}

export default Income;