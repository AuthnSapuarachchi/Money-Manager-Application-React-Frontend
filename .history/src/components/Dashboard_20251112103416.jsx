import { useContext } from "react"
import Menubar from "./Menubar"

const Dashboard = () => {

    const {user} = useContext(AppContext);

    return (
        <div>
            <Menubar />
        </div>
    )
}

export default Dashboard