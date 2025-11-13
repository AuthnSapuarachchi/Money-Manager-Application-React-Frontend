import moment from "moment"
import TransactionInformationCard from "./TransactionInformationCard"
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react"

const Transaction = ({transactions, onMore, type, title}) => {
    const isIncome = type === 'INCOME';
    
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    {isIncome ? (
                        <TrendingUp className="text-green-600" size={20} />
                    ) : (
                        <TrendingDown className="text-red-600" size={20} />
                    )}
                    <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
                </div>
                <button 
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    onClick={onMore}
                >
                    More 
                    <ArrowRight size={16} />
                </button>
            </div>
            
            <div className="space-y-3">
                {transactions && transactions.length > 0 ? (
                    transactions.slice(0, 5).map(item => (
                        <TransactionInformationCard 
                            key={item.id}
                            title={item.title || item.category?.name}
                            name={item.name}
                            icon={item.icon}
                            date={moment(item.date || item.createdAt).format('MMM DD, YYYY')}
                            amount={item.amount}
                            type={type || item.type}
                            hideDeleteBtn
                        />
                    ))
                ) : (
                    <div className="text-center py-8">
                        <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${isIncome ? 'bg-green-50' : 'bg-red-50'}`}>
                            {isIncome ? (
                                <TrendingUp className={`text-green-400`} size={32} />
                            ) : (
                                <TrendingDown className={`text-red-400`} size={32} />
                            )}
                        </div>
                        <p className="text-gray-500 text-sm">No {title.toLowerCase()} yet</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Transaction