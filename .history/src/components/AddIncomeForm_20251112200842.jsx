import { useState } from "react";

const AddIncomeForm = ({onAddIncome, categories}) => {
    
    const [income, setincome] = useState({
        name: '',
        amount: '',
        da
    });
    
    return (
        <div>
            Add Income
        </div>
    )
}

export default AddIncomeForm