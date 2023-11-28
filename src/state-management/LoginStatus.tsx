import { useReducer, useState } from "react";

import loginReducer from "./reducer/loginReducer";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const [user, dispatch] = useReducer(loginReducer, '')

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({type: 'LOGOUT', email: ""})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({type: 'LOGIN', email: "musa.abdillah@ottodigital.id"})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
