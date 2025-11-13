import Dashboard from "../components/Dashboard";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import ExpenseList from "../components/ExpenseList";
import Model from "../components/Model";
import { Plus } from "lucide-react";
import AddExpenseForm from "../components/AddExpenseForm";
import DeleteAlert from "../components/DeleteAlert";
import ExpenseOverview from "../components/ExpenseOverview";
import * as XLSX from 'xlsx';
import moment from 'moment';


const Expense = () => {

    const [expenseData, setExpenseData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openAddExpenseModel, setOpenAddExpenseModel] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState( {
        show: false,
        data: null,
    });   

    //fetch expense details
    const fetchExpenseDetails = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.getAllExpenses);
            if (response.status === 200) {
                const expenses = response.data.expenses || response.data;
                setExpenseData(expenses);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Failed to fetch expenses");
        } finally {
            setLoading(false);
        }
    }

    //fetch categories for expense
    const fetchExpenseCategories = async () => {
        try {
            // First try to get all categories
            const response = await axiosConfig.get(API_ENDPOINTS.getAllCategories);
            
            if (response.status === 200) {
                const allCategories = response.data.categories || response.data;
                
                // Filter for EXPENSE type categories (handle both 'EXPENSE' and 'Expense')
                const expenseCategories = allCategories.filter(cat => 
                    cat.type?.toUpperCase() === 'EXPENSE'
                );
                
                setCategories(expenseCategories);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
            toast.error(error.response?.data?.message || error.message || "Failed to fetch expense categories");
        }
    }

    //save expense details
    const handleAddExpense = async (expense) => {
        
        const {name, amount, date, icon, categoryId} = expense;
        if (!name) {
            toast.error('Please enter a name for the expense.');
            return;
        }
        if(!amount || isNaN(amount) || Number(amount) <= 0) {
            toast.error('Please enter an amount for the expense.');
            return;
        }
        if(!date) {
            toast.error('Please enter a date for the expense.');
            return;
        }

        const today = new Date().toISOString().split('T')[0];

        if(date > today) {
            toast.error('Date can not be in the future');
            return;
        }
        if(!categoryId) {
            toast.error('Please select a category for the expense.');
            return;
        }

        try {
            const response = await axiosConfig.post(API_ENDPOINTS.addExpense, {
                name,
                amount: Number(amount),
                date,
                icon,
                categoryId
            });

            if (response.status === 200 || response.status === 201) {
                toast.success('Expense added successfully');
                setOpenAddExpenseModel(false);
                await fetchExpenseDetails();
            }
        } catch (error) {
            console.error('Error adding expense:', error);
            toast.error(error.response?.data?.message || error.message || "Failed to add expense");
        }
    }

    //delete expense details
    const handleDeleteExpense = async (expenseId) => {
        if (!expenseId) {
            toast.error('Invalid expense ID');
            return;
        }

        try {
            const response = await axiosConfig.delete(API_ENDPOINTS.deleteExpense(expenseId));
            
            if (response.status === 200 || response.status === 204) {
                toast.success('Expense deleted successfully');
                setOpenDeleteAlert({show: false, data: null});
                await fetchExpenseDetails();
            }
        } catch (error) {
            console.error('Error deleting expense:', error);
            toast.error(error.response?.data?.message || error.message || "Failed to delete expense");
        }
    }

    const handleDownloadExpenseDetails = async() => {
    
        try{
            if (!expenseData || expenseData.length === 0) {
                toast.error('No expense data available to download');
                return;
            }

            toast.loading('Preparing Excel file...');
            
            // Prepare data for Excel export
            const excelData = expenseData.map((expense, index) => ({
                'No': index + 1,
                'Expense Source': expense.name || '',
                'Category': expense.category?.name || expense.title || '',
                'Amount': expense.amount || 0,
                'Date': moment(expense.date || expense.createdAt).format('YYYY-MM-DD'),
                'Created At': moment(expense.createdAt).format('YYYY-MM-DD HH:mm:ss'),
                'Icon': expense.icon || ''
            }));

            // Create worksheet
            const worksheet = XLSX.utils.json_to_sheet(excelData);
            
            // Set column widths
            const columnWidths = [
                { wch: 5 },  // No
                { wch: 25 }, // Expense Source
                { wch: 20 }, // Category
                { wch: 15 }, // Amount
                { wch: 15 }, // Date
                { wch: 25 }, // Created At
                { wch: 10 }  // Icon
            ];
            worksheet['!cols'] = columnWidths;

            // Create workbook
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Expense Details');

            // Generate filename with current date
            const fileName = `Expense_Details_${moment().format('YYYY-MM-DD')}.xlsx`;

            // Download file
            XLSX.writeFile(workbook, fileName);
            
            toast.dismiss();
            toast.success('Expense details downloaded successfully');
        } catch (error) {
            toast.dismiss();
            console.error('Error downloading expense details:', error);
            toast.error('Failed to generate Excel file');
        } 
    }

    const handleEmailExpenseDetails = async () => {
        try{
            if (!expenseData || expenseData.length === 0) {
                toast.error('No expense data available to email');
                return;
            }

            // Prompt user for email address
            const toEmail = prompt('Enter email address to send the expense report:');
            
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

            toast.loading('Sending email with expense report...');
            
            // Prepare data for backend
            const emailData = expenseData.map((expense) => ({
                name: expense.name || '',
                category: expense.category?.name || expense.title || '',
                amount: expense.amount || 0,
                date: moment(expense.date || expense.createdAt).format('YYYY-MM-DD'),
                createdAt: moment(expense.createdAt).format('YYYY-MM-DD HH:mm:ss'),
                icon: expense.icon || ''
            }));

            // Send email via backend
            const response = await axiosConfig.post(API_ENDPOINTS.sendExpenseEmail, {
                recipient: toEmail,
                expenses: emailData
            });
            
            toast.dismiss();
            
            if (response.status === 200) {
                toast.success(response.data || `Expense report sent successfully to ${toEmail}`, {
                    duration: 5000
                });
            }
            
        } catch (error) {
            toast.dismiss();
            console.error('Error sending email:', error);
            
            if (error.response?.status === 400) {
                toast.error(error.response?.data?.message || 'Invalid request');
            } else if (error.response?.status === 500) {
                const errorMessage = error.response?.data?.message || 'Failed to send email. Please check email configuration.';
                toast.error(errorMessage);
            } else {
                toast.error(error.response?.data?.message || 'Failed to send email');
            }
        }
    }

    useEffect(() => {
        fetchExpenseDetails();
        fetchExpenseCategories();
    }, []);

    return (
        <Dashboard activeLink="expense">
            <div className="my-5 mx-auto max-w-7xl">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-800">Expense Management</h2>
                        <button 
                            className="flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md font-medium"
                            onClick={() => setOpenAddExpenseModel(true)}
                            aria-label="Add new expense"
                        >
                            <Plus size={18} /> 
                            Add Expense
                        </button>
                    </div>

                    {/* Expense Overview */}
                    <ExpenseOverview transactions={expenseData} />

                    {/* Expense List */}
                    <ExpenseList 
                        transactions={expenseData} 
                        onDelete={(id)=> setOpenDeleteAlert({show: true, data: id})}  
                        onDownload={handleDownloadExpenseDetails} 
                        onEmail={handleEmailExpenseDetails}  
                    />

                    {/* add expense modal */}
                    <Model 
                        isOpen={openAddExpenseModel} 
                        onClose={() => setOpenAddExpenseModel(false)}
                        title="Add Expense"
                    >
                        <AddExpenseForm
                            onAddExpense={(expense) => handleAddExpense(expense)}
                            categories={categories}
                        />
                    </Model>

                    {/*Deleting the expense */}
                    <Model 
                        isOpen={openDeleteAlert.show}
                        onClose={() => setOpenDeleteAlert({show: false, data: null})}
                        title="Delete Expense"
                    >
                        <DeleteAlert 
                            data={openDeleteAlert.data}
                            onClose={() => setOpenDeleteAlert({show: false, data: null})}
                            onDelete={(id) => handleDeleteExpense(id)}
                        />
                    </Model>
                </div>
            </div>
        </Dashboard>
    )
}

export default Expense;