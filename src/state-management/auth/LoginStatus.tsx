

import { useContext } from "react"
import AuthContext from "./AuthContext";
import UserAuthStore from "./AuthStore";

export const UseAuth = () => useContext(AuthContext);

// export default UseAuth;

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  // const [user, dispatch] = useReducer(loginReducer, '')
  // const {username, dispatch} = useContext(AuthContext);
  // const {username, dispatch} = UseAuth();

  const {user, login, logout} = UserAuthStore()

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      {/* <a onClick={() => dispatch({type: 'LOGIN', username: "musa.abdillah@ottodigital.id"})} href="#"> */}
      <a onClick={() => login("musa.abdillah@ottodigital.id")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
