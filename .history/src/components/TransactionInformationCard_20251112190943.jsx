import { UtensilsCrossed } from "lucide-react";

const TransactionInformationCard = ({icon, title, date, amount, type, hideDeleteBtn, onDelete}) => {
    const getAmountStyles = () => type === 'INCOME' ? 'text-green-500' : 'text-red-500';

    return  (
        <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg">
            <div className="w-12 h-12 flex items-center">
                {icon ? (
                    <img src={icon} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <UtensilsCrossed size={40} className="text-gray-400" />
                )}
            </div>
            <div className="flex-1 flex ttems-center">
                <div>
                    <p className="text-sm text-gray-700 font-medium">{title}</p>
                    <p className="text-xs text-gray-500">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default TransactionInformationCard