import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Sidebar = () => {
    
    const {user} = useContext(AppContext);

    return (
        <div className="w-64 h-[calc(100vh-61px) ">

        </div>
    )
}

export default Sidebar