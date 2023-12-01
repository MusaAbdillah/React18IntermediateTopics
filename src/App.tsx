import { useReducer } from 'react';
import './App.css';
import taskReducer from './state-management/reducer/taskReducer';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import AuthProvider from './state-management/provider/AuthProvider';
import TaskContext from './state-management/context/taskContext';

function App() {

  const [tasks, taskDispatch] = useReducer(taskReducer, [])
  //const [username, authDispatch] = useReducer(AuthReducer, '')

  return(
    <>
      <AuthProvider>
        <TaskContext.Provider value={{tasks, dispatch: taskDispatch}}>
          <NavBar />
          <HomePage />
        </TaskContext.Provider>
      </AuthProvider>
    </>
  )
}

export default App;
