import { useState, useRef, useContext, useEffect } from "react";
import { Menu, X, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Menubar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { user, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setShowDropdown(false);
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-between gap-5 bg-white border-b border-gray-200 py-4 px-4 sm:px-7 sticky top-0 z-30 shadow-sm">
            {/* Left Side */}
            <div className="flex items-center gap-3 sm:gap-5">
                <button 
                    onClick={() => setOpenSideMenu(!openSideMenu)} 
                    className="lg:hidden text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors">
                    {openSideMenu ? <X size={24} /> : <Menu size={24} />}
                </button>
                
                <div className="flex items-center gap-2 sm:gap-3">
                    <img src={assets.logo} alt="Money Manager Logo" className="h-8 w-8 sm:h-10 sm:w-10"/>
                    <span className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                        Money Manager
                    </span>
                </div>
            </div>

            {/* Right Side - User Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    {user?.profileImage ? (
                        <img 
                            src={user.profileImage} 
                            alt={user.name || "User"} 
                            className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        <User size={20} className="text-blue-600" />
                    )}
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                        {/* User Details */}
                        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full shrink-0">
                                    {user?.profileImage ? (
                                        <img 
                                            src={user.profileImage} 
                                            alt={user.name || "User"} 
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        <User size={20} className="text-blue-600" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-800 truncate">
                                        {user?.name || "Guest User"}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        {user?.email || "guest@example.com"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Menu Options */}
                        <div className="py-1">
                            <button
                                onClick={() => {
                                    setShowDropdown(false);
                                    navigate("/profile");
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                                <User size={16} />
                                <span>Your Profile</span>
                            </button>
                            
                            <button
                                onClick={() => {
                                    setShowDropdown(false);
                                    navigate("/settings");
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                                <Settings size={16} />
                                <span>Settings</span>
                            </button>
                            
                            <div className="border-t border-gray-200 my-1"></div>
                            
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                                <LogOut size={16} />
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menubar;