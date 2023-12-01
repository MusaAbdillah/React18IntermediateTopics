import React from "react";
import { AuthAction } from "../reducer/authReducer";

interface AuthContextType {
    username: string
    dispatch: React.Dispatch<AuthAction>
}
const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;