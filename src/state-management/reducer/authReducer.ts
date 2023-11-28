
interface LoginAction {
    type: 'LOGIN';
    username: string;
}

interface LogoutAction {
    type: 'LOGOUT';
}

type AuthAction = LoginAction | LogoutAction

const loginReducer =  (email: string, action: AuthAction): string => {
    if (action.type === 'LOGIN') return action.username;
    return ''
}

export default loginReducer;