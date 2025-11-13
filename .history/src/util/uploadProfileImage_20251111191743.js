import { API_ENDPOINTS } from "./apiEndpoints";

const CLOUDINARY_UPLOAD_PRESET = "moneyManager";

const uploadProfileImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
}

try {
    fetch(API_ENDPOINTS.uploadImage, {
        method: "POST",
        body: formData
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Cloudiary upload failed: ${errorData.error.message || response.statusText}`);
    }

    const data = await response.json();
    console.log('Image upload success', data);
    return data.secure_url;
} catch () {

}