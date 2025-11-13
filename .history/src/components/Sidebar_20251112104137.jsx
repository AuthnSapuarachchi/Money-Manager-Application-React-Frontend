import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Sidebar = () => {
    
    const {user} = useContext(AppContext);

    return (
        <div className="w-64 h-[calc(100vh-61px) bg-white border-gray-200/50 p-5 sticky top-[61px] z-">

        </div>
    )
}

export default Sidebar