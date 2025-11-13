import { ArrowRight } from "lucide-react"
import TransactionInformationCard from "./TransactionInformationCard"

const RecentTransactions = ({transactions, onMore}) => {
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Recent Transactions</h2>
                <button className="text-blue-500 hover:underline" onClick={onMore}>
                    More <ArrowRight className="text-base" size={16} />
                </button>
            </div>
            <div className="mt-6">
                {transactions?.slice(0, 5).map(item => (
                    <TransactionInformationCard 
                        key={item.id}
                        title={item.title}
                        name={item.name}
                        date={item.date}
                        amount={item.amount}
                        type={item.type}
                        onDelete={item.onDelete}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecentTransactions