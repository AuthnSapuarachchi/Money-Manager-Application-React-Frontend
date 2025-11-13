import { Calendar, Trash2, TrendingDown, TrendingUp } from "lucide-react";
import { addThousandsSeparator } from "../util/numberFormat";

const TransactionInformationCard = ({icon, title, name, date, amount, type, hideDeleteBtn = false, onDelete}) => {
    const isIncome = type === 'INCOME';
    
    return  (
        <div className={`group relative flex items-center justify-between gap-4 p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
            isIncome 
                ? 'bg-white border-green-200 hover:border-green-300' 
                : 'bg-white border-red-200 hover:border-red-300'
        }`}>
            
            {/* Left Section - Icon */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg text-2xl transition-transform group-hover:scale-110 ${
                isIncome 
                    ? 'bg-green-100' 
                    : 'bg-red-100'
            }`}>
                {icon ? (
                    <span>{icon}</span>
                ) : (
                    <span>💰</span>
                )}
            </div>

            {/* Middle Section - Transaction Details */}
            <div className="flex-1 min-w-0">
                <h6 className="font-semibold text-gray-800 mb-1 truncate">
                    {name || title}
                </h6>
                {title && name && title !== name && (
                    <p className="text-sm text-gray-600 mb-1 truncate">{title}</p>
                )}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={13} />
                    <span>{date}</span>
                </div>
            </div>

            {/* Right Section - Amount */}
            <div className="flex items-center gap-2">
                <div className="text-right">
                    <p className={`text-lg font-bold ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
                        {isIncome ? '+' : '-'}${addThousandsSeparator(amount)}
                    </p>
                </div>
                {isIncome ? (
                    <TrendingUp size={18} className="text-green-600" />
                ) : (
                    <TrendingDown size={18} className="text-red-600" />
                )}
            </div>

            {/* Delete Button */}
            {!hideDeleteBtn && onDelete && (
                <button
                    onClick={onDelete}
                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-all duration-200"
                    title="Delete transaction"
                    aria-label="Delete transaction"
                >
                    <Trash2 size={14} />
                </button>
            )}
        </div>
    )
}

export default TransactionInformationCard