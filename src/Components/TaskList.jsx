import React, { useState, useEffect } from 'react';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {

    const storedTasks = JSON.parse(localStorage.getItem('tareas'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {

    localStorage.setItem('tareas', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return; 
    }


    const newTaskObj = { name: newTask, status: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask(''); 
  };

  const handleTaskChange = (index) => {
 
    const updatedTasks = [...tasks];
    updatedTasks[index].status = !updatedTasks[index].status;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        
        <button onClick={handleAddTask}>+</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} onClick={() => handleTaskChange(index)}>
            <Task nombre={task.name} estado={task.status} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;