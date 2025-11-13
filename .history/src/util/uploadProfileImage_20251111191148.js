const CLOUDINARY_UPLOAD_PRESET = "moneyManager";

const uploadProfileImage = async (file) => {
    const formData = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
}