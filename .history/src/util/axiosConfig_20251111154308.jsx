import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "https://authnsapuarachchi-money-manager-1460.onrender.com/api/v1.0",
    headers: {
        "Content-Type": "application/json",
        
    }
})