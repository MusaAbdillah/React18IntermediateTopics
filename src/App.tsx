import { useReducer } from 'react';
import './App.css';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import AuthProvider from './state-management/auth/AuthProvider';
import TaskProvider from './state-management/tasks/TaskProvider';

function App() {

  //const [tasks, taskDispatch] = useReducer(taskReducer, [])
  //const [username, authDispatch] = useReducer(AuthReducer, '')

  return(
    <>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </>
  )
}

export default App;
