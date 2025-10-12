import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

export default axiosInstance;