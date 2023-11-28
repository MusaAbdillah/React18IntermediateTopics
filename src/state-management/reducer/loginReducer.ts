
interface Action {
    type: 'LOGIN' | 'LOGOUT'
    email: string
}
const loginReducer =  (email: string, action: Action): string => {
    if (action.type === 'LOGIN') return action.email;
    return ''
}

export default loginReducer;