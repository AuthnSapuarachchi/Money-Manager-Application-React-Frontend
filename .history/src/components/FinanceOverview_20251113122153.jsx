const FinanceOverwiew = ({totalBalance, totalIncome, totalExpense}) => {
    const COLOR = 
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Finance Overwiew</h5>
            </div>

            <CustomPieChart />

        </div>
    )
}

export default FinanceOverwiew