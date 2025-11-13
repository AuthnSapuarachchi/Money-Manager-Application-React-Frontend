import { Download, Mail, TrendingUp } from "lucide-react"
import TransactionInformationCard from "./TransactionInformationCard"
import moment from "moment"

const IncomeList = ({transactions}) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="text-green-600" size={20} />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800">Income Sources</h5>
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                        title="Email report"
                    >
                        <Mail size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors"/>
                    </button>
                    <button 
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                        title="Download report"
                    >
                        <Download size={18} className="text-gray-600 group-hover:text-green-600 transition-colors"/>
                    </button>
                </div>
            </div>

            {/* Content will go here */}
            <div className="text-center py-8 text-gray-400 text-sm">
                {transactions?.map((income) => (
                    <TransactionInformationCard 
                        key={income.id}
                        icon={income.icon}
                        title={income.title}
                        date={moment(income.createdAt).format("MMM DD, YYYY")}
                        amount={income.amount}
                        type="INCOME"
                        onC
                ))}
            </div>
        </div>
    )
}

export default IncomeList