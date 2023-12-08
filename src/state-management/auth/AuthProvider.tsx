import { ReactNode, useReducer } from 'react'
import AuthContext from './AuthContext';


interface LoginAction {
    type: 'LOGIN';
    username: string;
}

interface LogoutAction {
    type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction

const AuthReducer =  (username: string, action: AuthAction): string => {
    if (action.type === 'LOGIN') return action.username;
    if (action.type === 'LOGOUT') return '';
    return username
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider =  ({ children}: AuthProviderProps) => {
    const [username, dispatch] = useReducer(AuthReducer, '');

    return (
        <AuthContext.Provider value={{username, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
