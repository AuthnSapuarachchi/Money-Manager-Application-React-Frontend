import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Filter = () => {
    useUser();
    return (
        <Dashboard activeLink="filter">
            <div className="my-5 mx-auto">
                <div className="flex justify-between items-center " ></div>
            </div>
        </Dashboard>
    )
}

export default Filter;