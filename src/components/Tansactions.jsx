import moment from "moment"
import TransactionInformationCard from "./TransactionInformationCard"
import { ArrowRight } from "lucide-react"

const Transaction = ({transactions, onMore, type, title}) => {
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
                <button 
                    className="flex items-center gap-1 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                    onClick={onMore}
                >
                    View All
                    <ArrowRight size={16} />
                </button>
            </div>
            <div className="mt-6">
                {transactions?.slice(0, 5).map(item => (
                    <TransactionInformationCard 
                        key={item.id}
                        title={item.title}
                        name={item.name}
                        icon={item.icon}
                        date={moment(item.date).format('MMM DD, YYYY')}
                        amount={item.amount}
                        type={type || item.type}
                        hideDeleteBtn
                    />
                ))}
            </div>
        </div>
    )
}

export default Transaction