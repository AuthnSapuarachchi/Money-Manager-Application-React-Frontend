import { ArrowRight } from "lucide-react"

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
                {transactions?.slice(0, 5).map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                {transaction.category.icon}
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium">{transaction.category.name}</p>
                                <p className="text-xs text-gray-500">{transaction.date}</p>
                            </div>
                ))}
            </div>
        </div>
    )
}

export default RecentTransactions