import { useState, useRef, useContext, useEffect } from "react";
import { Menu, X, User, LogOut, Settings, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

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
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-between gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30">
            {/* Left Side */}
            <div className="flex items-center gap-5">
                <button 
                    onClick={() => setOpenSideMenu(!openSideMenu)} 
                    className="block lg:hidden text-black hover:bg-gray-100 rounded p-1 transition-colors">
                    {openSideMenu ? (
                        <X className="text-2xl" />
                    ) : (
                        <Menu className="text-2xl" />
                    )}    
                </button>
                
                {/* App Title or Logo */}
                <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
                    Money Manager
                </h1>
            </div>

            {/* Right Side - User Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                        {user?.profileImage ? (
                            <img
                                src={user.profileImage}
                                alt={user.name || "User"}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <span className="text-sm">
                                {user?.name?.charAt(0).toUpperCase() || "U"}
                            </span>
                        )}
                    </div>

                    {/* User Name */}
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-sm font-medium text-gray-800">
                            {user?.name || "User"}
                        </span>
                        <span className="text-xs text-gray-500">
                            {user?.email || "user@example.com"}
                        </span>
                    </div>

                    <ChevronDown 
                        className={`w-4 h-4 text-gray-600 transition-transform ${
                            showDropdown ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {/* User Info - Mobile */}
                        <div className="md:hidden px-4 py-3 border-b border-gray-200">
                            <p className="text-sm font-medium text-gray-800">
                                {user?.name || "User"}
                            </p>
                            <p className="text-xs text-gray-500">
                                {user?.email || "user@example.com"}
                            </p>
                        </div>

                        {/* Menu Items */}
                        <button
                            onClick={() => {
                                setShowDropdown(false);
                                navigate("/profile");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <User className="w-4 h-4" />
                            <span>Profile</span>
                        </button>

                        <button
                            onClick={() => {
                                setShowDropdown(false);
                                navigate("/settings");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <Settings className="w-4 h-4" />
                            <span>Settings</span>
                        </button>

                        <div className="border-t border-gray-200 my-1"></div>

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            <span>Logout</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menubar