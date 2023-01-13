import Task from "../Task";
import styles from './List.module.css';
import { useTaskContext } from "../../provider/useTaskContext";
import TaskInput from "../TaskInput";

function List() {
    const { tasks, taskIdForEdit } = useTaskContext();

    return (
        <div className={styles.list}>
            {tasks.map((task) => {
                return task.id === taskIdForEdit ? <TaskInput mode='Изменить' /> : <Task task={task} />
            })}
        </div>
    )
}

export default List;