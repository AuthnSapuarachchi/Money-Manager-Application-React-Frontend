import { useContext } from "react"
import Menubar from "./Menubar"
import { AppContext } from "../context/AppContext"

const Dashboard = () => {

    const {user} = useContext(AppContext);

    return (
        <div>
            <Menubar />

            
        </div>
    )
}

export default Dashboard