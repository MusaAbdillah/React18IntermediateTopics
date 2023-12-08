import './App.css';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TaskProvider from './state-management/tasks/TaskProvider';
import Counter from './state-management/counter/Counter';

function App() {

  //const [tasks, taskDispatch] = useReducer(taskReducer, [])
  //const [username, authDispatch] = useReducer(AuthReducer, '')

  return(
        <TaskProvider>
          <Counter/>
          <NavBar />
          <HomePage />
        </TaskProvider>
  )
}

export default App;
