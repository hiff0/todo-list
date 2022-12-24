import { TaskType } from "../../utils/types";
import Button from "../Button/Button";
import styles from './Task.module.css';
import { useTaskContext } from "../../provider/useTaskContext";

interface TaskProp {
    task: TaskType,
}

function Task({ task }: TaskProp) {

    const { checkTask, deleteTask, selectTaskIdForEdit } = useTaskContext();

    const taskStyle = {
        textDecoration: task.isDone ? 'line-through' : 'none'
    }

    return (
        <div className={styles.task}>
            <div style={taskStyle} onClick={() => checkTask(task.id)} className={styles.title}>
                {task.title}
            </div>
            <div>
                <Button title="Редактировать" onClick={() => selectTaskIdForEdit(task.id)} />
                <Button title="Удалить" onClick={() => deleteTask(task.id)} />
            </div>
        </div >
    )
}

export default Task;