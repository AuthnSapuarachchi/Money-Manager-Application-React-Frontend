import { useState } from "react";

const AddIncomeForm = ({onAddIncome, categories}) => {
    
    const [income, setincome] = useState({
        name: '',
        amount: '',
        data: '',
        icon: '',
        categoryId: ''
    });

    const categoryOptions = categories.map(category => ({
        value: category.id,
        label: category.name
    })) 
    

    return (
        <div>
            Add Income
        </div>
    )
}

export default AddIncomeForm