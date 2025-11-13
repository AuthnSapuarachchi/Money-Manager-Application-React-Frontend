import { useState } from "react";
import Category from "../pages/Category";

const AddIncomeForm = ({onAddIncome, categories}) => {
    
    const [income, setincome] = useState({
        name: '',
        amount: '',
        data: '',
        icon: '',
        categoryId: ''
    });

    categories.map(Category => ({
        
    }))
    
    return (
        <div>
            Add Income
        </div>
    )
}

export default AddIncomeForm