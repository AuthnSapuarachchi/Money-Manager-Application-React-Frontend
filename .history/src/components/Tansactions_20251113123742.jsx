import moment from "moment"


const Transaction = ({transactions, onMore, type, title}) => {
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg"> {title}</h5>
                <button className="text-blue-500 hover:underline" onClick={onMore}>
                    More <ArrowRight className="text-base" size={16} />
                </button>
            </div>
            <div className="mt-6">
                {transactions?.slice(0, 5).map(item => (
                    <TransactionInformationCard 
                        key={item.id}
                        title={item.title}
                        name={item.name}
                        icon={item.icon}
                        date={moment(item.date).format('MMM DD, YYYY')}
                        amount={item.amount}
                        type={item.type}
                        hideDeleteBtn
                    />
                ))}
            </div>
        </div>
    )
}

export default Transaction