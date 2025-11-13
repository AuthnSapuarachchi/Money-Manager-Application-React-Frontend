import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

const Home = () => {
    useUser();
    return (
        <Dashboard activeLink="dashboard">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/*Display the cards */}
                    
                </div>

                <div className="grid-cols-1 md:grid-cols-2 gap-6 mt-">

                </div>

            </div>
        </Dashboard>
    )
}
export default Home;