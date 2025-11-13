import { useState, useRef, useContext } from "react";
import { Menu, X } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Menubar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { user } = useContext(AppContext);

    return (
        <div className="flex items-center justify-between gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30">
            {/* Left Side */}
            <div className="flex items-center gap-5">
                <button 
                    onClick={() => setOpenSideMenu(!openSideMenu)} 
                    className="text-black hover:bg-gray-100 rounded p-2 transition-colors border border-gray-300">
                    {openSideMenu ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}    
                </button>
                <div className="flex items-center gap-3">
                    <img src={assets.logo} alt="logo" className="h-10 w-10"/>
                    <span className="text-lg font-medium text-black trancate">Money Manager</span>
                </div>
            </div>


            {/* Right Side - Avatar */}
            <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Profile
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
                    Logout
                </button>
            </div>

        </div>
    )
}

export default Menubar