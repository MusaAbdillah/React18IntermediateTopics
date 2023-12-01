import { useReducer } from 'react';
import './App.css';
import taskReducer from './state-management/reducer/taskReducer';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import AuthProvider from './state-management/provider/AuthProvider';
import TaskContext from './state-management/context/TaskContext';
import TaskProvider from './state-management/provider/TaskProvider';

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
