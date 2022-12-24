import Button from "../Button/Button";
import styles from './TaskInput.module.css';
import { useTaskContext } from '../../provider/useTaskContext';

interface TaskInputProps {
    mode: 'Добавить' | 'Изменить'
}

function TaskInput({ mode }: TaskInputProps) {
    const { todo, onChange, onClick } = useTaskContext();
    const isEdit = mode === 'Изменить';
    const placeholder = mode === 'Изменить' ? 'Новая задача' : 'Введите задачу';

    return (
        <div className={styles.taskinput}>
            <input type="text" placeholder={placeholder} onChange={onChange} value={todo.title} className={styles.input} />
            <Button title={mode} onClick={() => onClick(isEdit)} />
        </div>
    )
}

export default TaskInput;