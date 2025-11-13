import Dashboard from "../components/Dashboard";

const Home = () => {
    return (
        <Dashboard>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <p className="text-gray-600 mt-2">Welcome to your Money Manager Dashboard</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500">Total Income</h3>
                        <p className="text-2xl font-bold text-green-600 mt-2">$0.00</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500">Total Expense</h3>
                        <p className="text-2xl font-bold text-red-600 mt-2">$0.00</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500">Balance</h3>
                        <p className="text-2xl font-bold text-blue-600 mt-2">$0.00</p>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
                    <p className="text-gray-500 text-center py-8">No transactions yet</p>
                </div>
            </div>
        </Dashboard>
    )
}
export default Home;