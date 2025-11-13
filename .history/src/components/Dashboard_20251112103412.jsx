import { useContext } from "react"
import Menubar from "./Menubar"

const Dashboard = () => {

    const {user} = useContext

    return (
        <div>
            <Menubar />
        </div>
    )
}

export default Dashboard