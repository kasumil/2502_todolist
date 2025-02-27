import { create } from "zustand";

const useStore = create((set) => ({
    isLogged: false,
    setLogged: (isLogged: boolean) => set({ isLogged }),
    user: null,
    setUser: (user: any) => set({ user }),
    token: null,
    setToken: (token: string) => set({ token }),
    logout: () => set({ isLogged: false, user: null, token: null }),
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),
    error: null,
    setError: (error: any) => set({ error }),
    clearError: () => set({ error: null }),
    success: null,
    setSuccess: (success: any) => set({ success }),
    clearSuccess: () => set({ success: null }),
    modal: null,
    setModal: (modal: any) => set({ modal }),
    clearModal: () => set({ modal: null }),
    modalData: null,
    setModalData: (modalData: any) => set({ modalData }),
    clearModalData: () => set({ modalData: null }),
}));

export default useStore;
