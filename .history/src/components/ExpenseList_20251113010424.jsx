import { Download, Mail, TrendingDown, DollarSign, LoaderCircle } from "lucide-react"
import TransactionInformationCard from "./TransactionInformationCard"
import moment from "moment"
import { useState } from "react"

const ExpenseList = ({transactions = [], onDelete, onDownload, onEmail}) => {

    const [loading, setLoading] = useState(false);
    const handleEmail = async () => {
        setLoading(true);
        try{
            await onEmail();
        } finally {
            setLoading(false);
        }
    }

    const handleDownload = async () => {
        setLoading(true);
        try{
            await onDownload();
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-red-50 to-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <TrendingDown className="text-red-600" size={20} />
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold text-gray-800">Recent Transactions</h5>
                        <p className="text-xs text-gray-500">
                            {transactions.length} {transactions.length === 1 ? 'expense' : 'expenses'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        disabled={loading}
                        onClick={handleEmail}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-red-100 rounded-lg transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Email report"
                        aria-label="Email expense report"
                    >
                       {loading ? (
                           <>
                             <LoaderCircle size={18} className="text-gray-600 group-hover:text-red-600 transition-colors animate-spin"/>
                             <span className="text-sm text-gray-600">Sending...</span>
                           </>
                       ) : (
                           <>
                             <Mail size={18} className="text-gray-600 group-hover:text-red-600 transition-colors"/>
                             <span className="text-sm text-gray-600 group-hover:text-red-600 transition-colors">Email</span>
                           </>
                       )}
                    </button>
                    <button 
                        disabled={loading}
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-red-100 rounded-lg transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Download report"
                        aria-label="Download expense report"
                    >
                        {loading ? (
                            <>
                              <LoaderCircle size={18} className="text-gray-600 group-hover:text-red-600 transition-colors animate-spin"/>
                              <span className="text-sm text-gray-600">Downloading...</span>
                            </>
                        ) : (
                            <>
                              <Download size={18} className="text-gray-600 group-hover:text-red-600 transition-colors"/>
                              <span className="text-sm text-gray-600 group-hover:text-red-600 transition-colors">Download</span>
                            </>
                        )}                    
                    </button>
                </div>
            </div>

            {/* Transaction List */}
            <div className="p-6">
                {!transactions || transactions.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <DollarSign className="text-red-300" size={32} />
                        </div>
                        <p className="text-gray-500 text-base">No expense transactions yet</p>
                        <p className="text-gray-400 text-sm mt-2">Add your first expense to see it here</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {transactions.map((expense) => (
                            <TransactionInformationCard 
                                key={expense.id}
                                icon={expense.icon}
                                name={expense.name}
                                title={expense.title}
                                date={moment(expense.createdAt).format("MMM DD, YYYY")}
                                amount={expense.amount}
                                type="EXPENSE"
                                onDelete={() => onDelete(expense.id)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExpenseList
