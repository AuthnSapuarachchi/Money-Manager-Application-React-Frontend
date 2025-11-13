import { useState } from "react";
import Input from "./input";
import EmojiPickerPopup from "./EmojiPickerPopup";

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

    const handleChange = (key, value) => {
        setCategory({
            ...category,
            [key]: value,
        });
    };

    return (
        <div className="p-4">

            <EmojiPickerPopup />

            <Input 
                label="Category Name"
                value={category.name}
                onChange={({target}) => handleChange("name", target.value)}
                placeholder="e.g. Groceries, Salaries, etc."
                type="text"
            />

            <Input 
                label="Category Type"
                value={category.type}
                onChange={({target}) => handleChange("type", target.value)}
                placeholder="Select Type"
                type="select"
                isSelect= {true}
                options={categoryTypeOptions}
            />

        </div>
    )
}

export default AddCategoryForm;