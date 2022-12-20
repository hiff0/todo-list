import { TaskType } from "../../utils/types";
import Button from "../Button/Button";
import styles from './Task.module.css';

interface TaskProp {
    task: TaskType,
    checkTask: (id: TaskType['id']) => void,
    deleteTask: (id: TaskType['id']) => void
}

function Task({ task, checkTask, deleteTask }: TaskProp) {

    const taskStyle = {
        textDecoration: task.isDone ? 'line-through' : 'none'
    }

    return (
        <div className={styles.task}>
            <div style={taskStyle} onClick={() => checkTask(task.id)} className={styles.title}>
                {task.title}
            </div>
            <div>
                <Button title="Удалить" onClick={() => deleteTask(task.id)} />
            </div>
        </div >
    )
}

export default Task;