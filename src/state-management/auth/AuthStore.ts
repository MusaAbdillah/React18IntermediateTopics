import { create } from "zustand";
import { mountStoreDevtool} from "simple-zustand-devtools"

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

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Counter store', UserAuthStore)
}

export default UserAuthStore;