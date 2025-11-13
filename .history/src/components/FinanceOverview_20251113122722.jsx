import { DollarSign, TrendingUp, TrendingDown, Wallet } from "lucide-react";

const FinanceOverview = ({totalBalance, totalIncome, totalExpense}) => {
    
    const balancePercentage = totalIncome > 0 ? ((totalBalance / totalIncome) * 100).toFixed(1) : 0;
    const expensePercentage = totalIncome > 0 ? ((totalExpense / totalIncome) * 100).toFixed(1) : 0;
    const savingsRate = totalIncome > 0 ? (((totalIncome - totalExpense) / totalIncome) * 100).toFixed(1) : 0;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Wallet className="text-blue-600" size={20} />
                    <h5 className="text-lg font-semibold text-gray-800">Finance Overview</h5>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="space-y-4">
                {/* Total Balance */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <DollarSign size={16} className="text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-600">Total Balance</span>
                        </div>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {balancePercentage}%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 ml-10">
                        ${totalBalance?.toLocaleString() || '0'}
                    </p>
                </div>

                {/* Total Income */}
                <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-100">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <TrendingUp size={16} className="text-green-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-600">Total Income</span>
                        </div>
                        <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                            100%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-green-600 ml-10">
                        ${totalIncome?.toLocaleString() || '0'}
                    </p>
                </div>

                {/* Total Expense */}
                <div className="p-4 bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-100">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                <TrendingDown size={16} className="text-red-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-600">Total Expense</span>
                        </div>
                        <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                            {expensePercentage}%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-red-600 ml-10">
                        ${totalExpense?.toLocaleString() || '0'}
                    </p>
                </div>

                {/* Savings Rate */}
                <div className={`p-4 rounded-lg border ${savingsRate >= 0 ? 'bg-gradient-to-br from-emerald-50 to-white border-emerald-100' : 'bg-gradient-to-br from-orange-50 to-white border-orange-100'}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-medium text-gray-600">Savings Rate</span>
                            <p className={`text-xl font-bold mt-1 ${savingsRate >= 0 ? 'text-emerald-600' : 'text-orange-600'}`}>
                                {savingsRate}%
                            </p>
                        </div>
                        <div className={`text-3xl ${savingsRate >= 0 ? 'text-emerald-500' : 'text-orange-500'}`}>
                            {savingsRate >= 0 ? '💰' : '⚠️'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceOverview