import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import { useState } from "react";

const Income = () => {

    const [incomeData, setIncomeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openAddCategorymodel, setOpenAddCategoryModel] = useState(false);
    const [openEditCategory, setOpenEditCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useUser();
    return (
        <Dashboard activeLink="income">
            This Income page
        </Dashboard>
    )
}

export default Income;