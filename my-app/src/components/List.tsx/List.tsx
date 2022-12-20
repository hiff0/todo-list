import Task from "../Task/Task";
import styles from './List.module.css';
import { useTaskContext } from "../../provider/useTaskContext";

function List() {
    const { tasks, checkTask, deleteTask } = useTaskContext();

    return (
        <div className={styles.list}>
            {tasks.map((task) => <Task task={task} checkTask={checkTask} deleteTask={deleteTask} />)}
        </div>
    )
}

export default List;