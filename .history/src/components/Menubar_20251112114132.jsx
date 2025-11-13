import { useState, useRef, useContext } from "react";
import { LogOut, Menu, User, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Menubar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { user, clearUser } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.removeItem('token');
        }
        if (typeof clearUser === 'function') clearUser();
        setShowDropdown(false);
        navigate('/login');
    };

    

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
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    <User className="text-blue-400" />
                </button>

                {/* Dropdown */}
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {/*user details */}
                            <div className="px-4 py-3 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                                        <User className="text-blue-400 w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800 truncate">
                                            {user?.name || user?.fullName || "Guest User"}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">
                                            {user?.email || "guest@example.com"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*Drop Option */}
                            <div className="py-1 border-b border-blue-100">
                                <button
                                    type="button"
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                    aria-label="Logout"
                                    onClick={handleLogout}
                                >
                                    <LogOut size={16} className="text-red-600" />
                                    <span>Logout</span>
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </div>

            {/* */}

        </div>
    )
}

export default Menubar