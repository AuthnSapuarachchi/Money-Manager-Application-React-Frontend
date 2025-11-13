import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Filter = () => {
    useUser();
    return (
        <Dashboard activeLink="filter">
            This Filter page
        </Dashboard>
    )
}

export default Filter;