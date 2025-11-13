import { useState } from "react";
import Input from "./input";

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
        <div className="p-4">
            <Input />
        </div>
    )
}

export default AddCategoryForm;