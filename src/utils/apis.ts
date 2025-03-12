import axiosInstance from "./axiosInstance";

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
    return data;
}
export async function signUp({ email, password }: RequestUser): Promise<void> {
    const { data } = await axiosInstance.post("/api/auth/signup", {
        email,
        password,
    });
    return data;
}
export async function logout(): Promise<void> {
    const { data } = await axiosInstance.delete("/api/auth/logout");
    return data;
}

export async function tokenDelete(): Promise<void> {
    await axiosInstance.get("/api/auth/logout");
}

export async function refreshAccessToken(): Promise<object> {
    const { data } = await axiosInstance.post("/api/auth/refresh");
    return data;
}
