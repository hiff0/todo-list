import Task from "../Task/Task";
import { TaskType } from "../../utils/types";
import styles from './List.module.css';

interface ListPros {
    tasks: TaskType[],
    checkTask: (id: TaskType['id']) => void,
    deleteTask: (id: TaskType['id']) => void
}

function List({ tasks, checkTask, deleteTask }: ListPros) {
    return (
        <div className={styles.list}>
            {tasks.map((task) => <Task task={task} checkTask={checkTask} deleteTask={deleteTask} />)}
        </div>
    )
}

export default List;