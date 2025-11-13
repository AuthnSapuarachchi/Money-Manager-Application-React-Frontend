import { useState } from "react";

const AddIncomeForm = ({onAddIncome, categories}) => {
    
    const [income, setincome] = useState({
        name: '',
        amount: '',
        data: '',
        icon: ''
    });
    
    return (
        <div>
            Add Income
        </div>
    )
}

export default AddIncomeForm