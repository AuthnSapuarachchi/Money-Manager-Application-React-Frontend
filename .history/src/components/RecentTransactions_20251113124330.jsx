import { ArrowRight } from "lucide-react"
import TransactionInformationCard from "./TransactionInformationCard"
import moment from "moment"

const RecentTransactions = ({transactions, onMore}) => {
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Recent Transactions</h2>
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
                        type={item.type}
                        hideDeleteBtn
                    />
                ))}
            </div>
        </div>
    )
}

export default RecentTransactions