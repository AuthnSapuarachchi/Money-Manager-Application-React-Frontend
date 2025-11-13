import { useState } from "react";

const AddIncomeForm = ({onAddIncome, categories}) => {
    
    const [income, setincome] = useState({
        name: '',
        amount: '',
        data: '',
        icon: '',
        categoryId: ''
    });

    categories.map(Category => ({
        value: categoryFromCategoryConfig.
    }))
    
    return (
        <div>
            Add Income
        </div>
    )
}

export default AddIncomeForm