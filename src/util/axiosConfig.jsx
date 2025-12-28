import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "http://localhost:8081/api/v1.0", // Local development
    // baseURL: "https://authnsapuarachchi-money-manager-1460.onrender.com/api/v1.0", // Production
    timeout: 30000, // 30 seconds timeout for slow Render servers
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

//list of endpoints that don't require authentication header
const excutetedEndpoints = ["/login", "/register", "/status", "/activate", "/health"];

//request interceptor
axiosConfig.interceptors.request.use((config) => {
    const shouldSkipToken = excutetedEndpoints.some((endpoint) => {
        return config.url?.includes(endpoint);
    });

    if (!shouldSkipToken) {
        const accessToken = localStorage.getItem("token");

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
    }

    return config;

}, (error) => {
    return Promise.reject(error);
});

//response interceptor
axiosConfig.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response) {
        if (error.response.status === 401) {
            window.location.href = "/login";
        } else if (error.response.status === 500) {
            console.error("Server Error, please try again later",error);
        }
    } else if(error.code === "ECONNABORTED") {
        console.error("Request timeout - Backend may be slow or not responding",error);
    } else if (error.request) {
        console.error("No response from backend - Check if backend is running on http://localhost:8081",error);
    } else {
        console.error("Request error:", error.message);
    }
    return Promise.reject(error);
});

export default axiosConfig;