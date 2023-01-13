import { TaskType } from "../../../types";
import Button from "../Button";
import styles from './Task.module.css';
import { useTaskContext } from "../../provider";

interface TaskProp {
    task: TaskType,
}

function Task({ task }: TaskProp) {

    const { checkTask, deleteTask, selectTaskIdForEdit } = useTaskContext();

    return (
        <div className={styles.task}>
            <div onClick={() => checkTask(task.id)} className={
                !task.isDone ? styles.title : styles.title__isdone
            }>
                {task.title}
            </div>
            <div className={styles.buttons}>
                <Button title="Редактировать" onClick={() => selectTaskIdForEdit(task.id)} />
                <Button title="Удалить" onClick={() => deleteTask(task.id)} />
            </div>
        </div >
    )
}

export default Task;