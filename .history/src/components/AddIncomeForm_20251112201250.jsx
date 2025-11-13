import { useState } from "react";
import EmojiPickerPopup from "./EmojiPickerPopup";

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

    const hand
    
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