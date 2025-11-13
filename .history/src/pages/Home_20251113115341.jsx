import { WalletCards } from "lucide-react";
import Dashboard from "../components/Dashboard";
import InfoCard from "../components/InfoCard";
import { useUser } from "../hooks/useUser";
import { addThousandsSeparator } from "../util/numberFormat";

const Home = () => {
    useUser();
    return (
        <Dashboard activeLink="dashboard">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/*Display the cards */}
                    <InfoCard 
                        icon={<WalletCards />}
                        label="Total Balance"
                        value={addThousandsSeparator(100000.00)}
                        color="bg-green-100 text-green-600"
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
                        color="bg-green-100 text-green-600"
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