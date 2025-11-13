import { Wallet } from "lucide-react";

const FinanceOverview = ({totalBalance, totalIncome, totalExpense}) => {
    
    // Calculate percentages for pie chart
    const total = totalIncome + totalExpense;
    const incomePercentage = total > 0 ? (totalIncome / total) * 100 : 50;
    const expensePercentage = total > 0 ? (totalExpense / total) * 100 : 50;
    
    // Calculate the pie chart stroke values
    const circumference = 2 * Math.PI * 45; // radius = 45
    const incomeStroke = (incomePercentage / 100) * circumference;
    const expenseStroke = (expensePercentage / 100) * circumference;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Wallet className="text-blue-600" size={20} />
                    <h5 className="text-lg font-semibold text-gray-800">Finance Overview</h5>
                </div>
            </div>

            {/* Pie Chart */}
            <div className="flex flex-col items-center justify-center py-6">
                <div className="relative w-48 h-48">
                    {/* SVG Pie Chart */}
                    <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                        {/* Background Circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#f3f4f6"
                            strokeWidth="10"
                        />
                        
                        {/* Income Arc (Green) */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="10"
                            strokeDasharray={`${incomeStroke} ${circumference}`}
                            strokeDashoffset="0"
                            strokeLinecap="round"
                        />
                        
                        {/* Expense Arc (Red) */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="10"
                            strokeDasharray={`${expenseStroke} ${circumference}`}
                            strokeDashoffset={-incomeStroke}
                            strokeLinecap="round"
                        />
                    </svg>
                    
                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-500 mb-1">Balance</p>
                        <p className={`text-2xl font-bold ${totalBalance >= 0 ? 'text-blue-600' : 'text-orange-600'}`}>
                            ${totalBalance?.toLocaleString() || '0'}
                        </p>
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-6 space-y-3 w-full">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-700">Income</span>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-green-600">
                                ${totalIncome?.toLocaleString() || '0'}
                            </p>
                            <p className="text-xs text-gray-500">{incomePercentage.toFixed(1)}%</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-700">Expense</span>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-red-600">
                                ${totalExpense?.toLocaleString() || '0'}
                            </p>
                            <p className="text-xs text-gray-500">{expensePercentage.toFixed(1)}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceOverview