import { Upload } from "lucide-react";
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

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    }


    return (
        <div className="flex justify-center mb-6">
            <input type="file"
                accept="image/*"
                    ref={inputRef}
                    onChange={handleImageChange} 
                    className="hidden"
            />

            {!image ? (
                <div className="w-20 h-20 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer" onClick={onChooseFile}>
                    <User className="text-blue-500" size={35} />
                    <button 
                        onClick={onChooseFile} 
                        className="w-8 h-8 flex items-center justify-center bg-primary-text-white rounded-full absolute bottom-0 right-0">
                        <Upload size={15} />
                    </button>
                </div>
            ): (
                <div className="relative">
                    <img src={previewUrl} alt="profile photo" className="w-20 h-20 rounded-full object" />
                </div>
            )}

        </div>
    )
}

export default ProfilePhotoSelector