import axiosInstance, { removeHeader, setHeader } from "./axiosInstance";

type RequestUser = {
    email: string;
    password: string;
};

type ResponseToken = {
    accessToken: string;
    refreshToken: string;
};

export async function login({
    email,
    password,
}: RequestUser): Promise<ResponseToken> {
    const { data } = await axiosInstance.post("/api/auth/login", {
        email,
        password,
    });
    if (data.accessToken) {
        setHeader("Authorization", `Bearer ${data.accessToken}`);
    }
    return data;
}
export async function signUp({ email, password }: RequestUser): Promise<void> {
    const { data } = await axiosInstance.post("/api/auth/signup", {
        email,
        password,
    });
    return data;
}
export async function logout({ email, password }: RequestUser): Promise<void> {
    const { data } = await axiosInstance.delete("/api/auth/logout");
    removeHeader("Authorization");
    return data;
}
