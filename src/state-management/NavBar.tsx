import { useContext } from 'react';
import LoginStatus from './LoginStatus';
import UseTask from './hook/UseTask';

const NavBar = () => {

  const {tasks} = UseTask();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
