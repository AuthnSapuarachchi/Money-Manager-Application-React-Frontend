import { useRef } from "react";

const ProfilePhotoSelector = ({image, setImage}) => {
    
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    return (
        <div className="flex justify-center mb-6">
            <input type="file"
                accept="image/*"
                    ref={inputRef}
                    onChange={handleImageChange} 
                    className=""/>
        </div>
    )
}

export default ProfilePhotoSelector