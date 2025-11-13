import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Expense = () => {
    useUser();
    return (
        <Dashboard activeLink="expense">
            This Expense page
        </Dashboard>
    )
}

export default Expense;