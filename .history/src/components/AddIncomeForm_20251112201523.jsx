import { useState } from "react";
import EmojiPickerPopup from "./EmojiPickerPopup";
import Input from "./input";

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
            ...income, [key]: value
        })
    }
    
    return (
        <div>
            <EmojiPickerPopup 
                icon={income.icon}
                onSelect={() => handleChange('icon', selectedicon)}
            />

            <Input 
                value={income.name}
                onChange={({target}) => handleChange('name', target.)}
            />

        </div>
    )
}

export default AddIncomeForm