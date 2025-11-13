import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "https://authnsapuarachchi-money-manager-1460.onrender.com/api/v1.0",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

//list of endpoints that don't require authantication header
const excutetedEndpoints = ["/login", "/register", "/status", "/activate", "/health"];

//request interceptor
axiosConfig.interceptors.request.use((config) => {
    excutetedEndpoints.some((endpoint) => {
        config.url.includes(endpoint) && (config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`);
        return config;
    })
}, (error) => {
    return Promise.reject(error);
});

export default axiosConfig;