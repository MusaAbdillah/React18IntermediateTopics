import { create } from "zustand";
import { AuthAction } from "./AuthProvider";

interface AuthStore {
    user: string
    login: (username: string) => void
    logout: () => void
}

const UserAuthStore = create<AuthStore>(set => ({
    user: '',
    login: (username) => set(() => ({ user: username})),
    logout: () => set(() => ({ user: ''}))
}));

export default UserAuthStore;