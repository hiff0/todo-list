import React, { useState } from "react";
import { TaskType } from "../utils/types";
import { TaskContext } from "./TaskContext";

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
    const [todo, setTodo] = useState({
        title: '',
    });
    const [taskIdForEdit, setTaskIdForEdit] = useState<TaskType['id'] | null>(null);

    const addTask = ({ title }: Omit<TaskType, 'isDone' | 'id'>) => {
        setTasks([...tasks, { id: tasks.length + 1, title, isDone: false }])
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

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTodo({ title: value })
    }


    const selectTaskIdForEdit = (id: TaskType['id']) => {
        setTaskIdForEdit(id);
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

    const onClick = (isEdit: boolean) => {
        if (isEdit) {
            return (
                changeTask({ title: todo.title }),
                setTodo({ title: '' })
            )
        }
        addTask({ title: todo.title });
        setTodo({ title: '' })
    }

    const value = {
        tasks,
        todo,
        taskIdForEdit,
        addTask,
        checkTask,
        deleteTask,
        onChange,
        onClick,
        selectTaskIdForEdit,
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

