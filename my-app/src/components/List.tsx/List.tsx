import Task from "../Task/Task";
import styles from './List.module.css';
import { useTaskContext } from "../../provider/useTaskContext";
import TaskInput from "../TaskInput/TaskInput";

function List() {
    const { tasks, taskIdForEdit } = useTaskContext();

    return (
        <div className={styles.list}>
            {tasks.map((task) => {
                if (task.id === taskIdForEdit) {
                    return <TaskInput mode='Изменить' />
                }
                return <Task task={task} />
            })}
        </div>
    )
}

export default List;