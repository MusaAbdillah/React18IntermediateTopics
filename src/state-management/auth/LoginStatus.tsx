

import { useContext } from "react"
import AuthContext from "./AuthContext";

export const UseAuth = () => useContext(AuthContext);

// export default UseAuth;

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  // const [user, dispatch] = useReducer(loginReducer, '')
  // const {username, dispatch} = useContext(AuthContext);
  const {username, dispatch} = UseAuth();

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => dispatch({type: 'LOGOUT'})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({type: 'LOGIN', username: "musa.abdillah@ottodigital.id"})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
