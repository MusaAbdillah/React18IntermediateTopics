import { ReactNode, useReducer } from "react";
import taskReducer from "../reducer/taskReducer";
import TaskContext from "../context/taskContext";

interface TaskProviderProps {
    children: ReactNode;
}

const  TaskProvider = ({children}: TaskProviderProps)  => {
    const [tasks, dispatch] = useReducer(taskReducer, [])

    return (
        <TaskContext.Provider value={{tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider
