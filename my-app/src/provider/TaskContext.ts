import { createContext } from "react";
import { TaskType } from "../utils/types";

export interface TaskContextProps {
    tasks: TaskType[],
    addTask: ({ title }: Omit<TaskType, 'isDone' | 'id'>) => void,
    checkTask: (id: TaskType['id']) => void,
    deleteTask: (id: TaskType['id']) => void
}

export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    addTask: () => null,
    checkTask: () => null,
    deleteTask: () => null
})