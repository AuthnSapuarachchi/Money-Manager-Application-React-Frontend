import { Calendar, Trash2, TrendingDown, TrendingUp } from "lucide-react";
import { addThousandsSeparator } from "../util/numberFormat";

const TransactionInformationCard = ({icon, title, name, date, amount, type, hideDeleteBtn = false, onDelete}) => {
    const isIncome = type === 'INCOME';
    
    return  (
        <div className={`group relative flex items-center justify-between gap-4 p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${
            isIncome 
                ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:border-green-300' 
                : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200 hover:border-red-300'
        }`}>
            
            {/* Left Section - Icon */}
            <div className={`relative w-14 h-14 flex items-center justify-center rounded-xl shadow-sm text-2xl group-hover:scale-110 transition-all duration-300 ${
                isIncome 
                    ? 'bg-gradient-to-br from-green-100 to-emerald-200' 
                    : 'bg-gradient-to-br from-red-100 to-rose-200'
            }`}>
                {icon ? (
                    <span className="drop-shadow-sm">{icon}</span>
                ) : (
                    <span>💰</span>
                )}
            </div>

            {/* Middle Section - Transaction Details */}
            <div className="flex-1 min-w-0">
                <h6 className="font-bold text-gray-900 mb-1 text-base truncate">
                    {name || title}
                </h6>
                {title && name && title !== name && (
                    <p className="text-sm text-gray-600 mb-1.5 truncate">{title}</p>
                )}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={13} className="flex-shrink-0" />
                    <span className="font-medium">{date}</span>
                </div>
            </div>

            {/* Right Section - Amount Badge */}
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg shadow-sm ${
                isIncome 
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                    : 'bg-gradient-to-br from-red-500 to-rose-600'
            }`}>
                <div className="text-right">
                    <p className="text-white font-bold text-lg whitespace-nowrap">
                        {isIncome ? '+' : '-'} ${addThousandsSeparator(amount)}
                    </p>
                </div>
                {isIncome ? (
                    <TrendingUp size={20} className="text-white flex-shrink-0" strokeWidth={2.5} />
                ) : (
                    <TrendingDown size={20} className="text-white flex-shrink-0" strokeWidth={2.5} />
                )}
            </div>

            {/* Delete Button - Absolute Positioned */}
            {!hideDeleteBtn && onDelete && (
                <button
                    onClick={onDelete}
                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
                    title="Delete transaction"
                    aria-label="Delete transaction"
                >
                    <Trash2 size={16} strokeWidth={2.5} />
                </button>
            )}
        </div>
    )
}

export default TransactionInformationCard