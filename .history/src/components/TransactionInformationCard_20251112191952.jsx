import { Calendar, Trash2 } from "lucide-react";

const TransactionInformationCard = ({icon, title, name, date, amount, type, hideDeleteBtn = false, onDelete}) => {
    const getAmountStyles = () => type === 'INCOME' ? 'text-green-600' : 'text-red-600';
    const getBgStyles = () => type === 'INCOME' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100';
    const getIconBgStyles = () => type === 'INCOME' ? 'bg-green-100' : 'bg-red-100';

    // Format currency
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value);
    };

    return  (
        <div className={`group relative flex items-center justify-between gap-4 p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${getBgStyles()}`}>
            <div className="flex items-center gap-4 flex-1">
                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${getIconBgStyles()} text-2xl group-hover:scale-110 transition-transform`}>
                    {icon ? (
                        <span>{icon}</span>
                    ) : (
                        <span>💰</span>
                    )}
                </div>

                {/* Transaction Details */}
                <div className="flex-1">
                    <h6 className="font-semibold text-gray-800 mb-1">
                        {name || title}
                    </h6>
                    {title && name && title !== name && (
                        <p className="text-sm text-gray-600 mb-1">{title}</p>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span>{date}</span>
                    </div>
                </div>

                {/* Amount - Database data */}
                <div className="text-right">
                    <p className={`text-xl font-bold ${getAmountStyles()}`}>
                        {type === 'INCOME' ? '+' : '-'}{formatCurrency(amount)}
                    </p>
                </div>

                {/* Delete Button */}
                {!hideDeleteBtn && onDelete && (
                    <button
                        onClick={onDelete}
                        className="opacity-0 group-hover:opacity-100 p-2 hover:bg-red-100 rounded-lg transition-all duration-200 cursor-pointer"
                        title="Delete transaction"
                        aria-label="Delete transaction"
                    >
                        <Trash2 size={18} className="text-red-600" />
                    </button>
                )}

                <div className={`flex items-centr gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
                    <h6 className="text-xs font-medium"> 
                        {type === 'INCOME' ? '+' : '-'} ${addThous}
                    </h6>
                </div>

            </div>
        </div>
    )
}

export default TransactionInformationCard