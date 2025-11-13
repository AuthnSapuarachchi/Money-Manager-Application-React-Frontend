import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { User } from "lucide-react";
import { SIDE_BAR_DATA } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({activeLink}) => {
    
    const {user} = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Use profilePictureUrl (backend field name)
    const profileImageUrl = user?.profilePictureUrl || user?.profileImageUrl;
    
    

    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200 p-5 sticky top-[61px] z-20">
            <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                    {profileImageUrl ? (
                        <img
                            src={profileImageUrl}
                            alt={user?.fullName || user?.name || 'User'}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                            onLoad={() => {
                                console.log("✅ Image loaded successfully:", profileImageUrl);
                            }}
                        />
                    ) : (
                        <User size={40} className="text-blue-600" />
                    )}
                </div>
                <div className="text-center">
                    <p className="text-sm font-semibold text-gray-800">
                        {user?.fullName || user?.name || "Guest User"}
                    </p>
                    <p className="text-xs text-gray-500">
                        {user?.email || ""}
                    </p>
                </div>
            </div>

            {/* Sidebar Menu */}
            <nav className="flex flex-col gap-2">
                {SIDE_BAR_DATA.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.link;
                    
                    return (
                        <button 
                            onClick={() => navigate(item.link)}
                            key={`menu_${index}`}
                            className={`cursor-pointer w-full flex items-center gap-4 text-[15px] py-3 px-4 rounded-lg transition-colors text-left ${
                                isActive 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                            }`}>
                            <Icon size={20} className="shrink-0" />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </nav>

        </div>
    );
}

export default Sidebar