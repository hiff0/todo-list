import { createContext } from "react";
import { TaskType } from "../utils/types";
import React from "react";

export interface TaskContextProps {
    tasks: TaskType[],
    taskIdForEdit: TaskType['id'] | null,
    addTask: ({ title }: Omit<TaskType, 'isDone' | 'id'>) => void,
    checkTask: (id: TaskType['id']) => void,
    deleteTask: (id: TaskType['id']) => void,
    changeTask: ({ title }: Omit<TaskType, 'isDone' | 'id'>) => void,
    selectTaskIdForEdit: (id: TaskType['id']) => void,
}

export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    taskIdForEdit: null,
    addTask: () => null,
    checkTask: () => null,
    deleteTask: () => null,
    changeTask: () => null,
    selectTaskIdForEdit: () => null,
})