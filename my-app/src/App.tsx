import { useState } from 'react'
import { TaskType } from './utils/types';
import List from "./components/List.tsx/List";
import TaskInput from "./components/TaskInput/TaskInput";
import styles from './App.module.css';

const TASKS = [
  {
    id: 1,
    title: 'Задача 1',
    isDone: false,
  },
  {
    id: 2,
    title: 'Задача 2',
    isDone: true,
  }
];

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const addTask = ({ title }: Omit<TaskType, 'isDone' | 'id'>) => {
    setTasks([...tasks, { id: tasks.length + 1, title, isDone: false }])
  }

  const checkTask = (id: TaskType['id']) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone }
        }

        return task;
      })
    )
  }

  const deleteTask = (id: TaskType['id']) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  return (
    <div className={styles.todolist}>
      <div className={styles.container}>
        <TaskInput addTask={addTask} />
        <List tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
