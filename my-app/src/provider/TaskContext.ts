import { createContext } from "react";
import { TaskType } from "../utils/types";
import React from "react";

export interface TaskContextProps {
    tasks: TaskType[],
    todo: {title: string},
    addTask: ({ title }: Omit<TaskType, 'isDone' | 'id'>) => void,
    checkTask: (id: TaskType['id']) => void,
    deleteTask: (id: TaskType['id']) => void,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onClick: () => void
}

export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    todo: {title: ''},
    addTask: () => null,
    checkTask: () => null,
    deleteTask: () => null,
    onChange: () => null,
    onClick: () => null
})