import Menubar from "./Menubar"
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = ({children, activeLink}) => {

    const {user} = useContext(AppContext);

    return (
        <div className="min-h-screen bg-gray-50">
            <Menubar activeLink={activeLink} />

            {user && (
                <div className="flex">
                <div className="max-[1080px]:hidden">
                    {/* sidebar */}
                    <Sidebar activeLink={activeLink} />
                </div>

                <div className="flex-1 p-6">
                    {children}
                </div>
            </div>
            )}
        </div>
    )
}

export default Dashboard