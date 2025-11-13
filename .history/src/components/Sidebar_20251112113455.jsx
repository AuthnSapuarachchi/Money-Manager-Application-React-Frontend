import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { User } from "lucide-react";
import { SIDE_BAR_DATA } from "../assets/assets";

const Sidebar = () => {
    
    const {user} = useContext(AppContext);
    
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

                {SIDE_BAR_DATA.map((item, index)=>(
                    <button className="w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3">
                        
                    </button>

                ))}

            </div>
        </div>
    );
}

export default Sidebar