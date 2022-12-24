import { createContext } from "react";
import { TaskType } from "../utils/types";
import React from "react";

export interface TaskContextProps {
    tasks: TaskType[],
    todo: { title: string },
    taskIdForEdit: TaskType['id'] | null,
    addTask: ({ title }: Omit<TaskType, 'isDone' | 'id'>) => void,
    checkTask: (id: TaskType['id']) => void,
    deleteTask: (id: TaskType['id']) => void,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onClick: (isEdit: boolean) => void,
    selectTaskIdForEdit: (id: TaskType['id']) => void,
}

export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    todo: { title: '' },
    taskIdForEdit: null,
    addTask: () => null,
    checkTask: () => null,
    deleteTask: () => null,
    onChange: () => null,
    onClick: () => null,
    selectTaskIdForEdit: () => null,
})