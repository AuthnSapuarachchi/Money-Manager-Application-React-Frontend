import { useState } from "react";
import EmojiPickerPopup from "./EmojiPickerPopup";

const AddIncomeForm = ({onAddIncome, categories}) => {
    
    const [income, setIncome] = useState({
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

    const handleChange = (key, value) => {
        setIncome({
            ...income, [key]:
        })
    }
    
    return (
        <div>
            <EmojiPickerPopup 
                icon={income.icon}
                onSelect={() => handleChange('icon', selectedicon)}
            />
        </div>
    )
}

export default AddIncomeForm