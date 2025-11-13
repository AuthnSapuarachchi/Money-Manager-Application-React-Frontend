import { useState } from "react";
import EmojiPickerPopup from "./EmojiPickerPopup";
import Input from "./input";

const AddIncomeForm = ({onAddIncome, categories = []}) => {
    
    const [income, setIncome] = useState({
        name: '',
        categoryId: '',
        amount: '',
        date: ''
    });

    const [loading, setLoading] = useState(false);

    // Filter only INCOME categories
    const incomeCategories = categories.filter(
        category => category.type === 'INCOME'
    );

    const categoryOptions = incomeCategories.map(category => ({
        value: category.id,
        label: category.name
    }));

    const handleChange = (key, value) => {
        setIncome({
            ...income, 
            [key]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!income.name || !income.categoryId || !income.amount || !income.date) {
            return;
        }

        setLoading(true);
        try {
            await onAddIncome(income);
            // Reset form
            setIncome({
                name: '',
                categoryId: '',
                amount: '',
                date: ''
            });
        } catch (error) {
            console.error('Error adding income:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <EmojiPickerPopup 
                icon={income.icon}
                onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
            />

            <Input 
                value={income.name}
                onChange={({target}) => handleChange('name', target.value)}
                label="Income Source"
                placeholder="e.g., Salary, Freelance, Bonus"
                type="text"
                required
            />

            <Input 
                value={income.amount}
                onChange={({target}) => handleChange('amount', target.value)}
                label="Amount"
                placeholder="Enter amount"
                type="number"
                required
            />

            <Input 
                value={income.date}
                onChange={({target}) => handleChange('date', target.value)}
                label="Date"
                type="date"
                required
            />

            <Input 
                value={income.type}
                onChange={({target}) => {
                    handleChange('type', target.value);
                    // Reset category when type changes
                    handleChange('categoryId', '');
                }}
                label="Type"
                type="select"
                options={typeOptions}
                required
            />

            <Input 
                value={income.categoryId}
                onChange={({target}) => handleChange('categoryId', target.value)}
                label="Category"
                type="select"
                options={categoryOptions}
                required
            />

            <div className="flex items-center justify-end gap-3 pt-4">
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg transition-colors duration-200 font-medium flex items-center gap-2"
                >
                    {loading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Adding...
                        </>
                    ) : (
                        'Add Income'
                    )}
                </button>
            </div>
        </form>
    )
}

export default AddIncomeForm