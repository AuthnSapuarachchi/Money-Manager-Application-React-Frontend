import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Home = () => {
    useUser();
    return (
        <Dashboard activeLink="dashboard">
            <div className="my-5 mx-auto">
                div.grid.grid-col
            </div>
        </Dashboard>
    )
}
export default Home;