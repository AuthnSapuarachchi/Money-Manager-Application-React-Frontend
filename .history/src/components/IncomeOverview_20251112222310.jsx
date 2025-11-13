import { useEffect, useState } from "react";
import moment from "moment";

const IncomeOverview = ({transactions}) => {

    const [chartData, setChartData] = useState([]);
    
    // Prepare income line chart data by grouping transactions by date
    const prepareIncomeLineChartData = (transactions) => {
        if (!transactions || transactions.length === 0) {
            return [];
        }

        // Group transactions by date and sum amounts
        const groupedByDate = transactions.reduce((acc, transaction) => {
            const date = moment(transaction.date || transaction.createdAt).format('MMM DD');
            
            if (!acc[date]) {
                acc[date] = {
                    date: date,
                    amount: 0,
                    count: 0
                };
            }
            
            acc[date].amount += Number(transaction.amount) || 0;
            acc[date].count += 1;
            
            return acc;
        }, {});

        // Convert to array and sort by date
        const chartData = Object.values(groupedByDate).sort((a, b) => {
            return moment(a.date, 'MMM DD').valueOf() - moment(b.date, 'MMM DD').valueOf();
        });

        return chartData;
    };

    useEffect(() => {
        const result = prepareIncomeLineChartData(transactions);
        console.log
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