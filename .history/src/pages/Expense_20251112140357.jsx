import Dashboard from "../components/Dashboard";


const Expense = () => {
    useUser();
    return (
        <Dashboard activeLink="expense">
            This Expense page
        </Dashboard>
    )
}

export default Expense;