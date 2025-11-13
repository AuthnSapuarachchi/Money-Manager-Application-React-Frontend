import { Search, Filter as FilterIcon, X, TrendingUp, TrendingDown, Calendar } from "lucide-react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import moment from "moment";
import TransactionInformationCard from "../components/TransactionInformationCard";
import Input from "../components/input";
import DeleteAlert from "../components/DeleteAlert";
import Model from "../components/Model";

const Filter = () => {
    useUser();
    
    const [filters, setFilters] = useState({
        type: 'income',  // Backend requires 'income' or 'expense', not 'all'
        startDate: '',
        endDate: '',
        sortOrder: 'desc',
        keyword: '',  // Backend uses 'keyword' instead of 'category'
        sortField: 'date'  // Backend supports sortField
    });

    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null,
        type: null
    });

    // Fetch filtered transactions from backend
    const fetchFilteredTransactions = async () => {
        setLoading(true);
        try {
            // Build filter payload according to backend FilterDTO
            const filterPayload = {
                type: filters.type,  // 'income' or 'expense'
                startDate: filters.startDate || null,
                endDate: filters.endDate || null,
                keyword: filters.keyword || null,
                sortField: filters.sortField || 'date',
                sortOrder: filters.sortOrder || 'desc'
            };

            console.log('Sending filter request:', filterPayload);

            const response = await axiosConfig.post(API_ENDPOINTS.filterTransactions, filterPayload);

            if (response.status === 200) {
                const results = response.data || [];
                // Add type to each transaction for proper display
                const transactionsWithType = results.map(item => ({
                    ...item,
                    type: filters.type.toUpperCase()
                }));
                
                console.log('Filtered results:', transactionsWithType);
                setFilteredTransactions(transactionsWithType);
            }
        } catch (error) {
            console.error('Error fetching filtered transactions:', error);
            if (error.response?.status === 400) {
                toast.error(error.response?.data || 'Invalid filter parameters');
            } else {
                toast.error('Failed to fetch filtered transactions');
            }
            setFilteredTransactions([]);
        } finally {
            setLoading(false);
        }
    };

    // Handle filter change
    const handleFilterChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    // Apply filters - trigger backend fetch
    const applyFilters = () => {
        if (!filters.type || filters.type === 'all') {
            toast.error('Please select transaction type (Income or Expense)');
            return;
        }
        fetchFilteredTransactions();
    };

    // Reset filters
    const resetFilters = () => {
        setFilters({
            type: 'income',
            startDate: '',
            endDate: '',
            sortOrder: 'desc',
            keyword: '',
            sortField: 'date'
        });
        setFilteredTransactions([]);
    };

    // Handle delete
    const handleDelete = async (id) => {
        if (!id || !openDeleteAlert.type) {
            toast.error('Invalid transaction');
            return;
        }

        try {
            const endpoint = openDeleteAlert.type === 'INCOME' 
                ? API_ENDPOINTS.deleteIncome(id)
                : API_ENDPOINTS.deleteExpense(id);

            const response = await axiosConfig.delete(endpoint);
            
            if (response.status === 200 || response.status === 204) {
                toast.success(`${openDeleteAlert.type === 'INCOME' ? 'Income' : 'Expense'} deleted successfully`);
                setOpenDeleteAlert({show: false, data: null, type: null});
                // Re-fetch filtered results after deletion
                await fetchFilteredTransactions();
            }
        } catch (error) {
            console.error('Error deleting transaction:', error);
            toast.error('Failed to delete transaction');
        }
    };

    // Load initial data on component mount - don't auto-fetch, let user apply filters
    useEffect(() => {
        // Initial load - you could optionally fetch default results here
        // For now, we'll wait for user to apply filters
    }, []);

    // Calculate statistics
    const stats = {
        total: filteredTransactions.length,
        income: filteredTransactions.filter(t => t.type === 'INCOME').reduce((sum, t) => sum + Number(t.amount), 0),
        expense: filteredTransactions.filter(t => t.type === 'EXPENSE').reduce((sum, t) => sum + Number(t.amount), 0),
    };
    stats.balance = stats.income - stats.expense;

    return (
        <Dashboard activeLink="filter">
            <div className="my-5 mx-auto max-w-7xl">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Filter Transactions</h2>
                            <p className="text-sm text-gray-500 mt-1">Search and filter your income and expenses</p>
                        </div>
                    </div>

                    {/* Filter Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <FilterIcon className="text-blue-600" size={20} />
                            <h5 className="text-lg font-semibold text-gray-800">Filter Options</h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Type Filter */}
                            <Input
                                label="Transaction Type"
                                type="select"
                                value={filters.type}
                                onChange={(e) => handleFilterChange('type', e.target.value)}
                                options={[
                                    { value: 'income', label: '💰 Income' },
                                    { value: 'expense', label: '💸 Expense' }
                                ]}
                            />

                            {/* Start Date */}
                            <Input
                                label="Start Date"
                                type="date"
                                value={filters.startDate}
                                onChange={(e) => handleFilterChange('startDate', e.target.value)}
                            />

                            {/* End Date */}
                            <Input
                                label="End Date"
                                type="date"
                                value={filters.endDate}
                                onChange={(e) => handleFilterChange('endDate', e.target.value)}
                            />

                            {/* Sort Order */}
                            <Input
                                label="Sort Order"
                                type="select"
                                value={filters.sortOrder}
                                onChange={(e) => handleFilterChange('sortOrder', e.target.value)}
                                options={[
                                    { value: 'desc', label: 'Newest First' },
                                    { value: 'asc', label: 'Oldest First' }
                                ]}
                            />

                            {/* Sort Field */}
                            <Input
                                label="Sort By"
                                type="select"
                                value={filters.sortField}
                                onChange={(e) => handleFilterChange('sortField', e.target.value)}
                                options={[
                                    { value: 'date', label: 'Date' },
                                    { value: 'amount', label: 'Amount' },
                                    { value: 'name', label: 'Name' }
                                ]}
                            />

                            {/* Keyword Search */}
                            <div className="lg:col-span-3">
                                <Input
                                    label="Search Keyword"
                                    type="text"
                                    placeholder="Search by name, category, or description..."
                                    value={filters.keyword}
                                    onChange={(e) => handleFilterChange('keyword', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                            <button
                                onClick={applyFilters}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                            >
                                <Search size={18} />
                                Apply Filters
                            </button>
                            <button
                                onClick={resetFilters}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                            >
                                <X size={18} />
                                Reset
                            </button>
                            <div className="ml-auto text-sm text-gray-600">
                                Found <span className="font-semibold text-blue-600">{filteredTransactions.length}</span> transaction{filteredTransactions.length !== 1 ? 's' : ''}
                            </div>
                        </div>
                    </div>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">Total Transactions</p>
                                    <p className="text-2xl font-bold text-gray-800 mt-1">{stats.total}</p>
                                </div>
                                <Calendar className="text-blue-500" size={32} />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-4 border border-green-100 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-green-700">Total Income</p>
                                    <p className="text-2xl font-bold text-green-600 mt-1">${stats.income.toLocaleString()}</p>
                                </div>
                                <TrendingUp className="text-green-500" size={32} />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-4 border border-red-100 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-red-700">Total Expense</p>
                                    <p className="text-2xl font-bold text-red-600 mt-1">${stats.expense.toLocaleString()}</p>
                                </div>
                                <TrendingDown className="text-red-500" size={32} />
                            </div>
                        </div>

                        <div className={`bg-gradient-to-br ${stats.balance >= 0 ? 'from-blue-50' : 'from-orange-50'} to-white rounded-lg p-4 border ${stats.balance >= 0 ? 'border-blue-100' : 'border-orange-100'} shadow-sm`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm ${stats.balance >= 0 ? 'text-blue-700' : 'text-orange-700'}`}>Net Balance</p>
                                    <p className={`text-2xl font-bold ${stats.balance >= 0 ? 'text-blue-600' : 'text-orange-600'} mt-1`}>
                                        ${Math.abs(stats.balance).toLocaleString()}
                                    </p>
                                </div>
                                <div className={`text-3xl ${stats.balance >= 0 ? 'text-blue-500' : 'text-orange-500'}`}>
                                    {stats.balance >= 0 ? '💰' : '⚠️'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h5 className="text-lg font-semibold text-gray-800 mb-4">
                            Filtered Results ({filteredTransactions.length})
                        </h5>

                        {loading ? (
                            <div className="text-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                                <p className="text-gray-500 mt-4">Loading transactions...</p>
                            </div>
                        ) : filteredTransactions.length === 0 ? (
                            <div className="text-center py-12">
                                <FilterIcon className="text-gray-300 mx-auto mb-4" size={48} />
                                <p className="text-gray-500 text-base">No transactions found</p>
                                <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filteredTransactions.map((transaction) => (
                                    <TransactionInformationCard
                                        key={`${transaction.type}-${transaction.id}`}
                                        icon={transaction.icon}
                                        name={transaction.name}
                                        title={transaction.category?.name || transaction.title}
                                        date={moment(transaction.date || transaction.createdAt).format("MMM DD, YYYY")}
                                        amount={transaction.amount}
                                        type={transaction.type}
                                        onDelete={() => setOpenDeleteAlert({
                                            show: true,
                                            data: transaction.id,
                                            type: transaction.type
                                        })}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Delete Confirmation Modal */}
                    <Model
                        isOpen={openDeleteAlert.show}
                        onClose={() => setOpenDeleteAlert({show: false, data: null, type: null})}
                        title={`Delete ${openDeleteAlert.type === 'INCOME' ? 'Income' : 'Expense'}`}
                    >
                        <DeleteAlert
                            data={openDeleteAlert.data}
                            onClose={() => setOpenDeleteAlert({show: false, data: null, type: null})}
                            onDelete={(id) => handleDelete(id)}
                        />
                    </Model>
                </div>
            </div>
        </Dashboard>
    )
}

export default Filter;