import Dashboard from "../components/Dashboard";


const Home = () => {
    useUser();
    return (
        <Dashboard activeLink="dashboard">
            This is Home
        </Dashboard>
    )
}
export default Home;