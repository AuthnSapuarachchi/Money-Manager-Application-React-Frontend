import { Download, Mail, TrendingUp, DollarSign } from "lucide-react"
import TransactionInformationCard from "./TransactionInformationCard"
import moment from "moment"
import { useState } from "react"

const IncomeList = ({transactions = [], onDelete, onDownload, onEmail}) => {

    const [loading, setLoading] = useState(false);
    const handleEmail = async () => {
        setLoading(true);
        try{

        } fia
    }

    const handleDownload = async () => {

    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="text-green-600" size={20} />
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold text-gray-800">Recent Transactions</h5>
                        <p className="text-xs text-gray-500">
                            {transactions.length} {transactions.length === 1 ? 'income' : 'incomes'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={onEmail}
                        className="p-2 hover:bg-green-100 rounded-lg transition-colors group"
                        title="Email report"
                        aria-label="Email income report"
                    >
                        <Mail size={18} className="text-gray-600 group-hover:text-green-600 transition-colors"/>
                    </button>
                    <button 
                        onClick={onDownload}
                        className="p-2 hover:bg-green-100 rounded-lg transition-colors group"
                        title="Download report"
                        aria-label="Download income report"
                    >
                        <Download size={18} className="text-gray-600 group-hover:text-green-600 transition-colors"/>
                    </button>
                </div>
            </div>

            {/* Transaction List */}
            <div className="p-6">
                {!transactions || transactions.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <DollarSign className="text-green-300" size={32} />
                        </div>
                        <p className="text-gray-500 text-base">No income transactions yet</p>
                        <p className="text-gray-400 text-sm mt-2">Add your first income to see it here</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {transactions.map((income) => (
                            <TransactionInformationCard 
                                key={income.id}
                                icon={income.icon}
                                name={income.name}
                                title={income.title}
                                date={moment(income.createdAt).format("MMM DD, YYYY")}
                                amount={income.amount}
                                type="INCOME"
                                onDelete={() => onDelete(income.id)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default IncomeList