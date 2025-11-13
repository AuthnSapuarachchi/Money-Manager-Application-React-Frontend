const Transaction = ({transactions, onMore, type, title}) => {
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg"> {title}</h5>
                
            </div>
        </div>
    )
}

export default Transaction