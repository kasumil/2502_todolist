import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

function setHeader(key: string, value: string) {
    axiosInstance.defaults.headers.common[key] = value;
}

function removeHeader(key: string) {
    if (!axiosInstance.defaults.headers.common[key]) {
        return;
    }

    delete axiosInstance.defaults.headers.common[key];
}

export { setHeader, removeHeader };
export default axiosInstance;
