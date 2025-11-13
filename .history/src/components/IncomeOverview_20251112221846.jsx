import { useEffect } from "react";

const IncomeOverview = ({transactions}) => {

    const [chartData, setChartData] = useState([]);
    useEffect

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