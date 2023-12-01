import { useContext, useReducer, useState } from "react";

import loginReducer from "./reducer/authReducer";
import AuthContext from "./context/AuthContext";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  // const [user, dispatch] = useReducer(loginReducer, '')
  const {username, dispatch} = useContext(AuthContext);

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
