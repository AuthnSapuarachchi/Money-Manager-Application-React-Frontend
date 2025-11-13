import { Trash, Upload, User } from "lucide-react";
import { useRef, useState } from "react";

const ProfilePhotoSelector = ({image, setImage}) => {
    
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);

            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = (e) => {
        e.prevent
        setImage(null);
        setPreviewUrl(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    }


    return (
        <div className="flex flex-col items-center mb-6">
            <input 
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImageChange} 
                className="hidden"
            />

            {!image ? (
                <div className="relative group">
                    <div 
                        onClick={onChooseFile}
                        className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                    >
                        <User className="text-gray-400 group-hover:text-blue-500 transition-colors" size={40} />
                    </div>
                    <button 
                        onClick={onChooseFile}
                        type="button"
                        className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
                    >
                        <Upload size={16} />
                    </button>
                </div>
            ) : (
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
                        <img 
                            src={previewUrl} 
                            alt="Profile photo" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button 
                        onClick={handleRemoveImage}
                        type="button"
                        className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
                    >
                        <Trash size={16} />
                    </button>
                </div>
            )}
            
            <p className="text-xs text-gray-500 mt-2 text-center">
                {!image ? 'Click to upload profile photo' : 'Click trash to remove'}
            </p>
        </div>
    )
}

export default ProfilePhotoSelector