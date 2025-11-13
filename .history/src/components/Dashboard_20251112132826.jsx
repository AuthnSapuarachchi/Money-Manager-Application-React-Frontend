import Menubar from "./Menubar"
import Sidebar from "./Sidebar";

const Dashboard = ({children, }) => {

    return (
        <div className="min-h-screen bg-gray-50">
            <Menubar />

            <div className="flex">
                <div className="max-[1080px]:hidden">
                    {/* sidebar */}
                    <Sidebar />
                </div>

                <div className="flex-1 p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dashboard