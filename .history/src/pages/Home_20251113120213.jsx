import { WalletCards } from "lucide-react";
import Dashboard from "../components/Dashboard";
import InfoCard from "../components/InfoCard";
import { useUser } from "../hooks/useUser";
import { addThousandsSeparator } from "../util/numberFormat";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";

const Home = () => {
    useUser();

    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchDashboardData = async () => {
        if (isLoading) {
            return;
        }
        try {
            setIsLoading(true);
            const response = await axiosConfig.get(API_ENDPOINTS.dashboard);
            if (response.data === 200) {
                setDashboardData(response.data);
            }
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            toast.error(error.response?.data?.message || error.message || "Failed to fetch dashboard data");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
        return () => {};
    }, []);

    return (
        <Dashboard activeLink="dashboard">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/*Display the cards */}
                    <InfoCard 
                        icon={<WalletCards />}
                        label="Total Balance"
                        value={addThousandsSeparator(fetchDashboardData?.totalBalance)}
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