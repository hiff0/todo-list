import React, { useState } from "react";
import Button from "../Button/Button";
import styles from './TaskInput.module.css';
import { useTaskContext } from '../../provider/useTaskContext';

function TaskInput() {
    const {todo, addTask, onChange, onClick} = useTaskContext();

    return (
        <div className={styles.taskinput}>
            <input type="text" placeholder="Введите задачу" onChange={onChange} value={todo.title} className={styles.input} />
            <Button title="Добавить" onClick={onClick} />
        </div>
    )
}

export default TaskInput;