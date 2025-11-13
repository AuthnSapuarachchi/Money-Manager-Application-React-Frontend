const TransactionInformationCard = ({icon, title, date, amount, type, hideDeleteBtn, onDelete}) => {
    const getAmountStyles = () => type === 'INCOME' ? 'text-green-500' : 'text-red-500';

    return  (
        <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg">
            <div className="w-12 h-12 flex items-center">
                {icon ? (
                    <img src={icon} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <Ute
                )}
            </div>
        </div>
    )
}

export default TransactionInformationCard