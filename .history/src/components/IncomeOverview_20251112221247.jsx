import { TrendingUp, DollarSign, Calendar, PieChart } from "lucide-react";
import { addThousandsSeparator } from "../util/numberFormat";

const IncomeOverview = ({transactions = []}) => {
    
    // Calculate statistics
    const totalIncome = transactions.reduce((sum, income) => sum + (income.amount || 0), 0);
    const averageIncome = transactions.length > 0 ? totalIncome / transactions.length : 0;
    const highestIncome = transactions.length > 0 ? Math.max(...transactions.map(t => t.amount || 0)) : 0;
    
    // Get current month income
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthlyIncome = transactions.filter(income => {
        const incomeDate = new Date(income.date);
        return incomeDate.getMonth() === currentMonth && incomeDate.getFullYear() === currentYear;
    }).reduce((sum, income) => sum + (income.amount || 0), 0);

    const stats = [
        {
            icon: DollarSign,
            label: "Total Income",
            value: `$${addThousandsSeparator(totalIncome)}`,
            bgColor: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            icon: Calendar,
            label: "This Month",
            value: `$${addThousandsSeparator(monthlyIncome)}`,
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            icon: TrendingUp,
            label: "Average Income",
            value: `$${addThousandsSeparator(averageIncome)}`,
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            icon: PieChart,
            label: "Highest Income",
            value: `$${addThousandsSeparator(highestIncome)}`,
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600"
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="mb-6">
                <h5 className="text-xl font-bold text-gray-800">
                    Income Overview
                </h5>
                <p className="text-sm text-gray-500 mt-1">
                    Track your income sources and manage your finances effectively
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <div 
                        key={index}
                        className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                                <stat.icon className={stat.iconColor} size={20} />
                            </div>
                            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                ))}
            </div>

            {transactions.length === 0 && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-700 text-center">
                        No income data available. Start adding your income to see statistics!
                    </p>
                </div>
            )}
        </div>
    )
}

export default IncomeOverview