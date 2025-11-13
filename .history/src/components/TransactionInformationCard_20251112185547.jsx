const TransactionInformationCard = ({icon, title, date, amount, type, hideDeleteBtn, onDelete}) => {
    const getAmountStyles = () => type === 'INCOME' ? 'text-green-500' : 'text-red-500';
    
    return  (
        <div>TransactionInformationCard</div>
    )
}

export default TransactionInformationCard