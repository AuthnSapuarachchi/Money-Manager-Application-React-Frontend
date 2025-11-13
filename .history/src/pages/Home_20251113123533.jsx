import { CoinsIcon, WalletCards, Wallet } from "lucide-react";
import Dashboard from "../components/Dashboard";
import InfoCard from "../components/InfoCard";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import RecentTransactions from "../components/RecentTransactions";
import FinanceOverview from "../components/FinanceOverview";
import Transaction from "../components/Tansactions";

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
            if (response.status === 200) {
                const data = response.data;
                
                // Convert lowercase type to uppercase for frontend consistency
                if (data.recentTransactions) {
                    data.recentTransactions = data.recentTransactions.map(transaction => ({
                        ...transaction,
                        type: transaction.type ? transaction.type.toUpperCase() : 'EXPENSE',
                        title: transaction.category?.name || transaction.title
                    }));
                }
                
                setDashboardData(data);
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
                        value={dashboardData?.totalBalance || 0}
                        color="bg-blue-100 text-blue-600"
                    />
                    <InfoCard 
                        icon={<Wallet />}
                        label="Total Income"
                        value={dashboardData?.totalIncome || 0}
                        color="bg-green-100 text-green-600"
                    />
                    <InfoCard 
                        icon={<CoinsIcon />}
                        label="Total Expense"
                        value={dashboardData?.totalExpense || 0}
                        color="bg-red-100 text-red-600"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Recent transactions */}
                    <RecentTransactions 
                        transactions={dashboardData?.recentTransactions} 
                        onMore={() => navigate('/expense')} />

                    {/* finance overview chart */}
                    <FinanceOverview
                        totalBalance={dashboardData?.totalBalance || 0}
                        totalIncome={dashboardData?.totalIncome || 0}
                        totalExpense={dashboardData?.totalExpense || 0}
                    />

                    {/* Expense transactions */}
                    <Transaction 
                        transactions={dashboardData?.recent5Expenses || []} 
                        onMore={() => navigate('/expense')} 
                        type="expense" />

                    {/* Income transactions */}
                    <Transaction 
                        transactions={dashboardData?.recent5Incomes || []} 
                        onMore={() => navigate('/expense')} 
                        type="expense" />

                </div>

            </div>
        </Dashboard>
    )
}
export default Home;