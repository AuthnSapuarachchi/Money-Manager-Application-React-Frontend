import { useState } from "react";
import EmojiPickerPopup from "./EmojiPickerPopup";
import Input from "./input";
import { LoaderCircle } from "lucide-react";

const AddExpenseForm = ({onAddExpense, categories = []}) => {
    
    const [expense, setExpense] = useState({
        name: '',
        categoryId: '',
        amount: '',
        date: '',
        icon: ''
    });

    const [loading, setLoading] = useState(false);

    // Categories are already filtered as EXPENSE type from parent component
    const categoryOptions = [
        { value: '', label: 'Select a category' },
        ...categories.map(category => ({
            value: category.id,
            label: `${category.icon || ''} ${category.name}`
        }))
    ];

    const handleChange = (key, value) => {
        setExpense({
            ...expense, 
            [key]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!expense.name || !expense.categoryId || !expense.amount || !expense.date) {
            return;
        }

        setLoading(true);
        try {
            await onAddExpense(expense);
            // Reset form
            setExpense({
                name: '',
                categoryId: '',
                amount: '',
                date: '',
                icon: ''
            });
        } catch (error) {
            console.error('Error adding expense:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <EmojiPickerPopup 
                icon={expense.icon}
                onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
            />

            <Input 
                value={expense.name}
                onChange={({target}) => handleChange('name', target.value)}
                label="Expense Source"
                placeholder="e.g., Rent, Groceries, Transport"
                type="text"
                required
            />

            <Input 
                value={expense.categoryId}
                onChange={({target}) => handleChange('categoryId', target.value)}
                label="Category"
                type="select"
                options={categoryOptions}
                required
            />

            <Input 
                value={expense.amount}
                onChange={({target}) => handleChange('amount', target.value)}
                label="Amount"
                placeholder="Enter amount"
                type="number"
                required
            />

            <Input 
                value={expense.date}
                onChange={({target}) => handleChange('date', target.value)}
                label="Date"
                type="date"
                required
            />

            <div className="flex items-center justify-end gap-3 pt-4">
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-lg transition-colors duration-200 font-medium flex items-center gap-2"
                >
                    {loading ? (
                        <>
                            <LoaderCircle className="w-4 h-4 animate-spin" />
                            Adding...
                        </>
                    ) : (
                        <>
                            Add Expense
                        </>
                    )}
                </button>
            </div>
        </form>
    )
}

export default AddExpenseForm
