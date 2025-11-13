import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Filter = () => {
    useUser();
    return (
        <Dashboard activeLink="filter">
            <div className="my-5 mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Filter Transactions</h2>
                </div>
                <div className="card p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg font-semibold">Select the filters</h5>
                    </div>
                    <form action="" className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4">
                        <div>
                            <label htmlFor="" className="block text:sm font-medium mb-1">Type</label>
                            <select id="type" className="appearance-none w-full bg-white border border-gray-200 rounded-md py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200">
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm font-medium mb-1">Start Date</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm font-medium mb-1">End Date</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Sort Order</label>
                            <select id="type" className="appearance-none w-full bg-white border border-gray-200 rounded-md py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200">
                                <option value="asc">Assending</option>
                                <option value="desc">Discending</option>
                            </select>
                        </div>
                        <div className="">
                            <div className="w-full">
                                <label htmlFor="" className="block text-sm font-medium mb-1">Category</label>
                                <input type="text" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Dashboard>
    )
}

export default Filter;