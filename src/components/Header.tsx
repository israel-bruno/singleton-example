import { useState, useEffect } from "react";
import Task from "../shared/interfaces/ITask";
import TasksSingleton from "../shared/TasksSingleton";

import "../styles/header.scss";

const tasksSingleton = TasksSingleton.getInstance();

export function Header() {
  const [numTasks, setNumTasks] = useState(tasksSingleton.tasks.length);

  useEffect(() => {
    setInterval(() => {
      setNumTasks(tasksSingleton.tasks.length);
    }, 100);
  });

  return (
    <header className="header">
      <div>
        <img src="/logo.svg" alt="to.do" />
      </div>

      <h2>Tasks: {numTasks}</h2>
    </header>
  );
}
