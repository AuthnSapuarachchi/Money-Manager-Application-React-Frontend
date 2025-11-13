import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import { useState } from "react";

const Income = () => {

    const [incomeData, setIncomeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useUser();
    return (
        <Dashboard activeLink="income">
            This Income page
        </Dashboard>
    )
}

export default Income;