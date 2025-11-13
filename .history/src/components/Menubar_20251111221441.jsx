import { useState, useRef, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Menubar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { user } = useContext(AppContext);

    return (
        <div className="flex items-center justify-between gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30">
            {/* Left Side */}
            

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                    <div className="w-10 h-10 rounded-full overflow-hidden">

        </div>
    )
}

export default Menubar