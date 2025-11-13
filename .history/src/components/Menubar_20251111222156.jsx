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
            <div className="flex item-center gap-5">
                <button onClick={() => setOpenSideMenu()} className="block lg:hidden text-black hover:bg-gray-100 rounded p-1 transition-colors"></button>
            </div>


            {/* Right Side - Avatar */}
            <span>Right Side</span>


            {/* Mobile view */}
            <span>Mobile View</span>

        </div>
    )
}

export default Menubar