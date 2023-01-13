import List from "./components/List";
import TaskInput from "./components/TaskInput";
import styles from './App.module.css';
import { TaskProvider } from './provider';

function App() {

  return (
    <TaskProvider>
      <div className={styles.todolist}>
        <div className={styles.container}>
          <TaskInput mode='Добавить' />
          <List />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
