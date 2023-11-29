import { useReducer } from 'react';
import './App.css';
import LoginStatus from './state-management/LoginStatus';
import TaskList from './state-management/TaskList';
import TaskContext from './state-management/context/taskContext';
import taskReducer from './state-management/reducer/taskReducer';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  return <>
     <TaskContext.Provider value={{tasks, dispatch}}>
      <NavBar />
      <HomePage />
     </TaskContext.Provider>
     
  </>;
}

export default App;
