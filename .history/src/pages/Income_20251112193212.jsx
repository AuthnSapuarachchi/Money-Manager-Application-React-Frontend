import { data } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import IncomeList from "../components/IncomeList";


const Income = () => {

    const [incomeData, setIncomeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openAddInomeModel, setOpenAddInomeModel] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState( {
        show: false,
        data: null,
    });   

    const fetchIncomeDetails = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await axiosConfig.get(API_ENDPOINTS.getAllIncomes);
            if (response.status === 200) {
                const incomes = response.data.incomes || response.data;
                setIncomeData(incomes);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Failed to fetch incomes");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchIncomeDetails();
    }, []);

    return (
        <Dashboard activeLink="income">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        {/* overview for income withline char*/}

                    </div>
                    <IncomeList 
                        transactions={incomeData} 
                        onDelete={(id)=>console.log('delete income', id)}    
                    />

                    {/* add income modal */}
                    <Mo

                </div>
            </div>
        </Dashboard>
    )
}

export default Income;