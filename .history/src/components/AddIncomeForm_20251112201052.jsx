import { useState } from "react";

const AddIncomeForm = ({onAddIncome, categories}) => {
    
    const [income, setincome] = useState({
        name: '',
        amount: '',
        data: '',
        icon: '',
        categoryId: ''
    });

    categories.map(category => ({
        value: category.id,
        label: category
    }))
    
    return (
        <div>
            Add Income
        </div>
    )
}

export default AddIncomeForm