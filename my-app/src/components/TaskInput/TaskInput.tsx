import { useState } from "react";
import Button from "../Button/Button";
import styles from './TaskInput.module.css';
import { useTaskContext } from '../../provider/useTaskContext';

interface TaskInputProps {
    mode: 'Добавить' | 'Изменить'
}

function TaskInput({ mode }: TaskInputProps) {
    const { tasks, taskIdForEdit, addTask, changeTask, resetTaskIdForEdit } = useTaskContext();
    const [todo, setTodo] = useState({
        title: '',
    });
    const isEdit = mode === 'Изменить';
    const placeholder = mode === 'Изменить' ? 'Измените задачу' : ' ';


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTodo({ title: value })
    }

    const onClick = () => {
        if (isEdit) {
            return (
                changeTask({ title: todo.title })
            )
        }
        addTask({ title: todo.title });
        setTodo({ title: '' })
    }

    return (
        <div className={styles.taskinput}>
            <input type="text" placeholder={placeholder} onChange={onChange} value={todo.title} className={styles.input} />
            <div className={styles.buttons}>
                <Button title={mode} onClick={onClick} />
                {
                    isEdit && <Button title="Отменить" onClick={resetTaskIdForEdit} />
                }
            </div>
        </div>
    )
}

export default TaskInput;