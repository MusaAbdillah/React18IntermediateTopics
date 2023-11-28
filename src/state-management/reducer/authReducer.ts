
interface LoginAction {
    type: 'LOGIN';
    username: string;
}

interface LogoutAction {
    type: 'LOGOUT';
}

type AuthAction = LoginAction | LogoutAction

const loginReducer =  (username: string, action: AuthAction): string => {
    if (action.type === 'LOGIN') return action.username;
    return username
}

export default loginReducer;