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
    const shouldSkipToken = excutetedEndpoints.some((endpoint) => {
        config.url.includes(endpoint) 
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
            console.error("",error);
        }
    }
    return Promise.reject(error);
});

export default axiosConfig;