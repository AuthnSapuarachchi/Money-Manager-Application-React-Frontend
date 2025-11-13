import { WalletCards } from "lucide-react";
import Dashboard from "../components/Dashboard";
import InfoCard from "../components/InfoCard";
import { useUser } from "../hooks/useUser";
import { addThousandsSeparator } from "../util/numberFormat";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    useUser();

    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState({});
    

    return (
        <Dashboard activeLink="dashboard">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/*Display the cards */}
                    <InfoCard 
                        icon={<WalletCards />}
                        label="Total Balance"
                        value={addThousandsSeparator(100000.00)}
                        color="bg-blue-100 text-blue-600"
                    />
                    <InfoCard 
                        icon={<WalletCards />}
                        label="Total Income"
                        value={addThousandsSeparator(200000.00)}
                        color="bg-green-100 text-green-600"
                    />
                    <InfoCard 
                        icon={<WalletCards />}
                        label="Total Expense"
                        value={addThousandsSeparator(50000.00)}
                        color="bg-red-100 text-red-600"
                    />
                </div>

                <div className="grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Recent transactions */}

                    {/* finance overview chart */}

                    {/* Expense transactions */}

                    {/* Income transactions */}

                </div>

            </div>
        </Dashboard>
    )
}
export default Home;