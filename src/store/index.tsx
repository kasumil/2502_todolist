import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
    persist(
        (set) => ({
            isLogged: false,
            user: null,
            token: null,
            setLogged: (isLogged: boolean) => set({ isLogged }),
            setUser: (user: object | null) => set({ user }),
            setToken: (token: string | null) => set({ token }),
            logout: () => set({ isLogged: false, user: null, token: null }),

            modal: false,
            modalData: null,
            setModal: (modal: boolean) => set({ modal }),
            setModalData: (modalData: object | string | null) =>
                set({ modalData }),
            clearModal: () => set({ modal: false }),
            clearModalData: () => set({ modalData: null }),

            loading: false,
            error: null,
            setLoading: (loading: boolean) => set({ loading }),
            setError: (error: Error | string | null) => set({ error }),
            clearError: () => set({ error: null }),
        }),
        {
            name: "todolist-storage", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);

export default useStore;
