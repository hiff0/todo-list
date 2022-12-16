import React, { useState } from "react";
import Button from "../Button/Button";
import { TaskType } from "../../utils/types";
import styles from './TaskInput.module.css';

interface TaskPanel {
    addTask: ({ title }: Omit<TaskType, 'isDone' | 'id'>) => void;
}

function TaskInput({ addTask }: TaskPanel) {
    const [todo, setTodo] = useState({
        title: '',
    })

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTodo({ title: value })
    }

    const onClick = () => {
        addTask({ title: todo.title });
        setTodo({ title: '' })
    }

    return (
        <div className={styles.taskinput}>
            <input type="text" placeholder="Введите задачу" onChange={onChange} value={todo.title} className={styles.input} />
            <Button title="Добавить" onClick={onClick} />
        </div>
    )
}

export default TaskInput;