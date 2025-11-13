const FinanceOverwiew = ({totalBalance, totalIncome, totalExpense}) => {
    const COLOR = ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF1493', '#FF0000'];

    const balanceData = [
        { name: 'Total ', value: totalBalance, color: COLOR[0] },
        { name: 'Income', value: totalIncome, color: COLOR[1] },
        { name: 'Expense', value: totalExpense, color: COLOR[2] },
    ]

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