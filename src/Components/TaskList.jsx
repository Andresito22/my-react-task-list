import React from 'react';
import Task from './Task';
import { useState } from 'react';

function TaskList() {
  const [tasks, setTask] = useState([
    {name: "Task1", status: false},
    {name: "Task2", status: true},
  ]);

  return (
    <>
      <div>
        <input onChange={(e) => setTask(e.target.value)} />
        <button>+</button>
      </div>
      <ul>
      {tasks.map((task) => (
        <li><Task nombre={task.name} estado={task.status}/></li>
      ))}
      </ul>
    </>
  )
}

export default TaskList