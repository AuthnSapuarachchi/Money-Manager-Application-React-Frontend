import { API_ENDPOINTS } from "./apiEndpoints";

const CLOUDINARY_UPLOAD_PRESET = "moneyManager";

const uploadProfileImage = async (image) => {
  console.log("📤 uploadProfileImage called with:", image);

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  try {
    console.log("📤 Uploading to:", API_ENDPOINTS.uploadImage);
    const response = await fetch(API_ENDPOINTS.uploadImage, {
      method: "POST",
      body: formData,
    });

    console.log("📥 Upload response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Cloudinary upload failed:", errorData);
      throw new Error(
        `Cloudinary upload failed: ${
          errorData.error?.message || response.statusText
        }`
      );
    }

    const data = await response.json();
    
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw error;
  }
};

export default uploadProfileImage;
