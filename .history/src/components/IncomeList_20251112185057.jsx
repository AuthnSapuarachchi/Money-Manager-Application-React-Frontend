import { Download, Mail, TrendingUp, Calendar, DollarSign } from "lucide-react"

const IncomeList = ({transactions = []}) => {
    // Format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="card p-6">
            <div className="flex items-center justify-between mb-6">                
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="text-green-600" size={20} />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800">Income Sources</h5>
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Email report"
                        aria-label="Email income report"
                    >
                        <Mail size={18} className="text-gray-600"/>
                    </button>
                    <button 
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Download report"
                        aria-label="Download income report"
                    >
                        <Download size={18} className="text-gray-600"/>
                    </button>
                </div>
            </div>

            {/* Transaction List */}
            {!transactions || transactions.length === 0 ? (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="text-green-400" size={32} />
                    </div>
                    <p className="text-gray-500 text-lg">No income transactions yet</p>
                    <p className="text-gray-400 text-sm mt-2">Start adding your income sources to track them here</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {transactions.map((transaction, index) => (
                        <div 
                            key={transaction.id || index}
                            className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-transparent border border-green-100 rounded-lg hover:shadow-md transition-all duration-200 group"
                        >
                            <div className="flex items-center gap-4 flex-1">
                                {/* Category Icon */}
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    {transaction.categoryIcon || transaction.category?.icon || '💰'}
                                </div>

                                {/* Transaction Details */}
                                <div className="flex-1">
                                    <h6 className="font-semibold text-gray-800 mb-1">
                                        {transaction.description || transaction.title || 'Income Transaction'}
                                    </h6>
                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <span className="inline-flex items-center gap-1">
                                            <Calendar size={14} />
                                            {formatDate(transaction.date || transaction.createdAt)}
                                        </span>
                                        {transaction.category && (
                                            <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                                                {transaction.category.name || transaction.categoryName}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Amount */}
                                <div className="text-right">
                                    <p className="text-xl font-bold text-green-600">
                                        +{formatCurrency(transaction.amount)}
                                    </p>
                                    {transaction.notes && (
                                        <p className="text-xs text-gray-400 mt-1">
                                            {transaction.notes}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Summary Footer */}
            {transactions && transactions.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Total Income</span>
                        <span className="text-lg font-bold text-green-600">
                            {formatCurrency(transactions.reduce((sum, t) => sum + (t.amount || 0), 0))}
                        </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">
                            {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default IncomeList