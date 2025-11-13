const FinanceOverwiew = ({totalBalance, totalIncome, totalExpense}) => {
    const COLOR = ['#FFB6C1', '#FFC0CB', ];
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