import Menubar from "./Menubar"
import Sidebar from "./Sidebar";

const Dashboard = ({children, activeLink}) => {

    
    return (
        <div className="min-h-screen bg-gray-50">
            <Menubar activeLink={activeLink} />

            
        </div>
    )
}

export default Dashboard