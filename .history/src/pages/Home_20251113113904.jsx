import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Home = () => {
    useUser();
    return (
        <Dashboard activeLink="dashboard">
            div.my
        </Dashboard>
    )
}
export default Home;