import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Home = () => {
    useUser();
    return (
        <Dashboard activeLink="dashboard">
            
        </Dashboard>
    )
}
export default Home;