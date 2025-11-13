import { useEffect, useState } from "react";
import moment from "moment";

const IncomeOverview = ({transactions}) => {

    const [chartData, setChartData] = useState([]);
    
    // Prepare income line chart data by grouping transactions by month
    const prepareIncomeLineChartData = (transactions) => {
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
        const result = prepareIncomeLineChartData(transactions);
        console.log('Line chart data:', result);
        setChartData(result);
    }, [transactions]);

    return (
            <div className="card">
                <div className="flex items-center justify-between">
                    <div>
                        <h5 className="text-lg">
                            Income Overwiew
                        </h5>
                        <p className="text-xs text-gray-400 mt-0 5">
                            Track your income sources and manage your finances effectively
                        </p>
                    </div>

                    <div className="mt-10">
                        {/* create linechart */}
                    </div>
                </div>
            </div>
        )
}

export default IncomeOverview