const CLOUDINARY_UPLOAD_PRESET = "moneyManager";

const uploadProfileImage = async (file) => {
    const formData = new FormData();
    formData.append("file", image);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
}