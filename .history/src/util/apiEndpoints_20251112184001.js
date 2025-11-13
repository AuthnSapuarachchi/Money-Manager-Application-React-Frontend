//export const BASE_URL ="https://authnsapuarachchi-money-manager-1460.onrender.com/api/v1.0";
export const BASE_URL = "http://localhost:8081/api/v1.0";

const CLOUDINARY_CLOUD_NAME = "dwyypqs8g";

export const API_ENDPOINTS = {
  login: `${BASE_URL}/login`,
  register: `${BASE_URL}/register`,
  status: `${BASE_URL}/status`,
  activate: `${BASE_URL}/activate`,
  health: `${BASE_URL}/health`,
  getUserInfo: `${BASE_URL}/profile`,
  getAllCategories: `${BASE_URL}/categories`,
  addCategorys: `${BASE_URL}/categories`,
  updateCategory: (categoryId) => `${BASE_URL}/categories${categoryId ? `/${categoryId}` : ""}`,
  getAllIncome
  uploadImage: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
};
