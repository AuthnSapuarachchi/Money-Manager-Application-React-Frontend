import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { User } from "lucide-react";

const Sidebar = () => {
    
    const {user} = useContext(AppContext);

    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200 p-5 sticky top-[61px] z-20">
            <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                    {user?.profileImageUrl ? (
                        <img
                            src={user.profileImageUrl}
                            alt={user?.fullName || user?.name || 'User'}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                console.error("Image failed to load:", user.profileImageUrl);
                                e.target.style.display = 'none';
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
        </div>
    );
}

export default Sidebar