import List from "./components/List.tsx/List";
import TaskInput from "./components/TaskInput/TaskInput";
import styles from './App.module.css';
import { TaskProvider } from './provider/TaskProvider';

function App() {
  
  return (
    <TaskProvider>
    <div className={styles.todolist}>
      <div className={styles.container}>
          <TaskInput/>
          <List/>
      </div>
    </div>
    </TaskProvider>
  );
}

export default App;
