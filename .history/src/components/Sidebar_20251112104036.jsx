import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Sidebar = () => {
    
    const {user} = useContext(AppContext);

    return (
        <div className="w-64">

        </div>
    )
}

export default Sidebar