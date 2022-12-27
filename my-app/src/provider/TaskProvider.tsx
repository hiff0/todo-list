import React, { useState } from "react";
import { TaskType } from "../utils/types";
import { TaskContext } from "./TaskContext";
import titleValidator from "../utils/validator";

interface TaskProviderProps {
    children: React.ReactNode
}

export function TaskProvider({ children }: TaskProviderProps) {
    const TASKS = [
        {
            id: 1,
            title: 'Задача 1',
            isDone: false,
        },
        {
            id: 2,
            title: 'Задача 2',
            isDone: true,
        }
    ];

    const [tasks, setTasks] = useState(TASKS);
    const [taskIdForEdit, setTaskIdForEdit] = useState<TaskType['id'] | null>(null);

    const addTask = ({ title }: Omit<TaskType, 'isDone' | 'id'>) => {
        const isValidTitle = titleValidator(title);
        if (isValidTitle) {
            setTasks([...tasks, { id: tasks.length + 1, title, isDone: false }])
        }
    }

    const checkTask = (id: TaskType['id']) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isDone: !task.isDone }
                }

                return task;
            })
        )
    }

    const deleteTask = (id: TaskType['id']) => {
        setTasks(
            tasks.filter((task) => task.id !== id)
        )
    }

    const selectTaskIdForEdit = (id: TaskType['id']) => {
        setTaskIdForEdit(id);
    }

    const resetTaskIdForEdit = () => {
        setTaskIdForEdit(null);
    }

    const changeTask = ({ title }: Omit<TaskType, 'isDone' | 'id'>) => {
        setTasks(tasks.map((task) => {
            if (task.id === taskIdForEdit) {
                return { ...task, title: title };
            }
            return task;
        }))
        setTaskIdForEdit(null);
    }

    const value = {
        tasks,
        taskIdForEdit,
        addTask,
        checkTask,
        deleteTask,
        changeTask,
        selectTaskIdForEdit,
        resetTaskIdForEdit
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

