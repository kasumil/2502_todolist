import axios from "axios";
import { refreshAccessToken } from "./apis";
import getAccessToken from "../serverActions/auth";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// 요청 인터셉터 (Access Token 자동 추가)
axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터 (Access Token 만료 시 자동 갱신)
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const newToken = await refreshAccessToken();

            if (newToken) {
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${newToken}`;
                return axiosInstance(originalRequest); // 요청 재시도
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
