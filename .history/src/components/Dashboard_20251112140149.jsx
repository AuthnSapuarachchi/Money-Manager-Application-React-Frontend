import Menubar from "./Menubar"
import Sidebar from "./Sidebar";

const Dashboard = ({children, activeLink}) => {

    const {user} = useContext(AppContext);

    return (
        <div className="min-h-screen bg-gray-50">
            <Menubar activeLink={activeLink} />

            {}
        </div>
    )
}

export default Dashboard