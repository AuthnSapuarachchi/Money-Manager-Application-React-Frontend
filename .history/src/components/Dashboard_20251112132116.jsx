import { Children, useContext } from "react"
import Menubar from "./Menubar"
import { AppContext } from "../context/AppContext"
import Sidebar from "./Sidebar";

const Dashboard = ({Children}) => {

    const {user} = useContext(AppContext);

    return (
        <div>
            <Menubar />

            {user && (
                
            )}
        </div>
    )
}

export default Dashboard