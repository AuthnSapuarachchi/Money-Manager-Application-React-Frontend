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
                        key={transaction.id}
                        icon={transaction.icon}
                        title={transaction.title}
                        name={transaction.name}
                        date={transaction.date}
                        amount={transaction.amount}
                        type={transaction.type}
                        onDelete={transaction.onDelete}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecentTransactions