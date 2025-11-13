import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Filter = () => {
    useUser();
    return (
        <Dashboard activeLink="filter">
            <div className="">

            </div>
        </Dashboard>
    )
}

export default Filter;