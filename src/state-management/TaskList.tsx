import { useContext, useReducer, useState } from 'react';
import taskReducer from './reducer/taskReducer';
import TaskContext from './context/taskContext';

interface Task {
  id: number;
  title: string;
}

const TaskList = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  // const [tasks, dispatch] = useReducer(taskReducer, [])
  const {tasks, dispatch} = useContext(TaskContext);

  return (
    <>
      <button
        onClick={() =>
          dispatch(
            {
              task: { id: Date.now(), title: 'Task ' + Date.now() },
              type: "ADD"
            }
          )
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({type: "DELETE", id: task.id})
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
