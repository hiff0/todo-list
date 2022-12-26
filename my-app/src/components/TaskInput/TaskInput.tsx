import { useState } from "react";
import Button from "../Button/Button";
import styles from './TaskInput.module.css';
import { useTaskContext } from '../../provider/useTaskContext';

interface TaskInputProps {
    mode: 'Добавить' | 'Изменить'
}

function TaskInput({ mode }: TaskInputProps) {
    const { addTask, changeTask } = useTaskContext();
    const [todo, setTodo] = useState({
        title: '',
    });
    const isEdit = mode === 'Изменить';
    const placeholder = mode === 'Изменить' ? 'Измените задачу' : 'Введите задачу';


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTodo({ title: value })
    }

    const onClick = () => {
        if (isEdit) {
            return (
                changeTask({ title: todo.title }),
                setTodo({ title: '' })
            )
        }
        addTask({ title: todo.title });
        setTodo({ title: '' })
    }

    // TODO добавить функционал оставления названия в поле input при редактировании
    // TODO добавить функцционал отмены изменения задачи
    return (
        <div className={styles.taskinput}>
            <input type="text" placeholder={placeholder} onChange={onChange} value={todo.title} className={styles.input} />
            <Button title={mode} onClick={onClick} />
        </div>
    )
}

export default TaskInput;