import { useContext } from "react"
import Menubar from "./Menubar"
import { AppContext } from "../context/AppContext"

const Dashboard = () => {

    const {user} = useContext(AppContext);

    return (
        <div>
            <Menubar />

            {user && (
                <div className="flex">
                    <div className="max-[1080px]:hidden">
                        {/* sidebar */}

                    </div>

                    <div ca>
                        Rightide
                    </div>

                </div>
            )}
        </div>
    )
}

export default Dashboard