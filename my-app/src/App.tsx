import React, { createContext, useState } from 'react'
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

// TODO добавить provider patter
// export const FuncContext = React.createContext();

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

  const func = {
    add: addTask,
    check: checkTask,
    delete: deleteTask
  }

  const FuncContext = createContext(func);

  return (
    <div className={styles.todolist}>
      <div className={styles.container}>
        <FuncContext.Provider value={func}>
          <TaskInput addTask={addTask} />
          <List tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
        </FuncContext.Provider>
      </div>
    </div>
  );
}

export default App;
