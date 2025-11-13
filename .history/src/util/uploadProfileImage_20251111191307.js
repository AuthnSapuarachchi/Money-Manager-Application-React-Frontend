const CLOUDINARY_UPLOAD_PRESET = "moneyManager";

const uploadProfileImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.
}