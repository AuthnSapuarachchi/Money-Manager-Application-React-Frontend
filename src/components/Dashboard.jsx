import Menubar from "./Menubar"
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = ({children, activeLink}) => {

    const {user, isSidebarOpen} = useContext(AppContext);

    return (
        <div className="min-h-screen bg-gray-50">
            <Menubar activeLink={activeLink} />

            {user && (
                <div className="flex">
                    {/* Desktop Sidebar - Toggleable */}
                    <div className={`max-[1080px]:hidden transition-all duration-300 ${
                        isSidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
                    }`}>
                        {isSidebarOpen && <Sidebar activeLink={activeLink} />}
                    </div>

                    {/* Main Content - Adjusts based on sidebar state */}
                    <div className={`flex-1 p-6 transition-all duration-300 ${
                        isSidebarOpen ? 'ml-0' : 'ml-0'
                    }`}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard