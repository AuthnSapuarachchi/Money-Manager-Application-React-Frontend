const FinanceOverwiew = ({totalBalance, totalIncome, totalExpense}) => {
    const COLOR = ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF1493', '#FF0000'];

    const balanceData = [
        { name: 'Total Balance', value: totalBalance, color: COLOR[0] },
        { name: 'Total Income', value: totalIncome, color: COLOR[1] },
        { name: 'Total Expense', value: totalExpense, color: COLOR[2] },
    ]

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Finance Overwiew</h5>
            </div>

            <CustomPieChart
                data={balanceData}
                lable="Total Balance"
                tota
            />

        </div>
    )
}

export default FinanceOverwiew