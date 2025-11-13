import { useEffect, useState } from "react";
import moment from "moment";
import { TrendingDown, Calendar, DollarSign } from "lucide-react";
import { addThousandsSeparator } from "../util/numberFormat";

const ExpenseOverview = ({transactions}) => {

    const [chartData, setChartData] = useState([]);
    
    // Prepare expense line chart data by grouping transactions by month
    const prepareExpenseLineChartData = (transactions) => {
        if (!transactions || transactions.length === 0) {
            return [];
        }

        // Group transactions by month
        const groupedByMonth = transactions.reduce((acc, transaction) => {
            const transactionDate = moment(transaction.date || transaction.createdAt);
            const monthKey = transactionDate.format('YYYY-MM'); // e.g., "2025-11"
            const month = transactionDate.format('MMM YYYY'); // e.g., "Nov 2025"
            const date = transactionDate.format('MMM DD'); // e.g., "Nov 12"
            
            if (!acc[monthKey]) {
                acc[monthKey] = {
                    month: month,
                    date: date,
                    totalAmount: 0,
                    items: 0,
                    sortKey: monthKey
                };
            }
            
            acc[monthKey].totalAmount += Number(transaction.amount) || 0;
            acc[monthKey].items += 1;
            
            return acc;
        }, {});

        // Convert to array and sort by month
        const chartData = Object.values(groupedByMonth).sort((a, b) => {
            return a.sortKey.localeCompare(b.sortKey);
        });

        return chartData;
    };

    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        console.log('Expense chart data:', result);
        setChartData(result);
    }, [transactions]);

    return (
            <div className="card">
                <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-800">
                        Expense Overview
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">
                        Track your expenses and manage your spending effectively
                    </p>
                </div>

                {/* Monthly Expense Chart Data */}
                {chartData.length > 0 ? (
                    <div className="space-y-4">
                        {chartData.map((item, index) => (
                            <div key={index} className="bg-gradient-to-r from-red-50 to-white rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                            <Calendar className="text-red-600" size={20} />
                                        </div>
                                        <div>
                                            <h6 className="font-semibold text-gray-800">{item.month}</h6>
                                            <p className="text-xs text-gray-500">{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 text-red-600 font-bold text-lg">
                                            <DollarSign size={18} />
                                            {addThousandsSeparator(item.totalAmount)}
                                        </div>
                                        <p className="text-xs text-gray-500 flex items-center gap-1 justify-end">
                                            <TrendingDown size={12} />
                                            {item.items} transaction{item.items > 1 ? 's' : ''}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <TrendingDown className="text-gray-400" size={28} />
                        </div>
                        <p className="text-gray-500 text-sm">No expense data available</p>
                        <p className="text-gray-400 text-xs mt-1">Add expense transactions to see the overview</p>
                    </div>
                )}
            </div>
        )
}

export default ExpenseOverview
