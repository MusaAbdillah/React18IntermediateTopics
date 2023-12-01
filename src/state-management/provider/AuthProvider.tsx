import { ReactNode, useReducer } from 'react'
import AuthReducer from '../reducer/authReducer';
import AuthContext from '../context/AuthContext';

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
