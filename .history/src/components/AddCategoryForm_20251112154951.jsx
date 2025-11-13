import { useState } from "react";

const AddCategoryForm = () => {
    const [category, setCategory] = useState({
        name: '',
        type: '',
        icon: '',
    });

    const categoryTypeOptions = [
        { value: 'INCOME', label: 'Income' },
        { value: 'EXPENSE', label: 'Expense' },
    ];

    return (
        div.p-4
    )
}

export default AddCategoryForm;