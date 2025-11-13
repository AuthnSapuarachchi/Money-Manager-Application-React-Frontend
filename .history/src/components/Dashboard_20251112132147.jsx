
import Menubar from "./Menubar"
import Sidebar from "./Sidebar";

const Dashboard = ({Children}) => {

    return (
        <div>
            <Menubar />

            <div className="flex">
                    <div className="max-[1080px]:hidden">
                        {/* sidebar */}
                        <Sidebar />
                    </div>

                    <div className="grow mx-5">
                        {Children}
                    </div>

                </div>
        </div>
    )
}

export default Dashboard