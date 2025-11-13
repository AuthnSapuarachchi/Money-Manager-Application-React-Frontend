import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Income = () => {

    const [incomeData, setIncomeData] = useState([]);

    useUser();
    return (
        <Dashboard activeLink="income">
            This Income page
        </Dashboard>
    )
}

export default Income;