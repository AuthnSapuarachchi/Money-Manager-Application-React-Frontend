import { useState } from "react";
import { data } from "react-router-dom";

const AddIncomeForm = ({onAddIncome, categories}) => {
    
    const [income, setincome] = useState({
        name: '',
        amount: '',
        data
    });
    
    return (
        <div>
            Add Income
        </div>
    )
}

export default AddIncomeForm