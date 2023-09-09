import React, { useEffect, useState } from 'react';
import Task from './Task';
import { useTaskManager } from './UseTaskManager';


function TaskList() {
  const { tasks, createTask, deleteTask, updateTaskStatus, clearAllTasks } = useTaskManager();
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tareas')) || [];
    if (storedTasks.length > 0) {
      storedTasks.forEach((task) => createTask(task.name));
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return;
    }
    createTask(newTask);
    setNewTask('');
  };

  const handleTaskChange = (index) => {
    updateTaskStatus(index, !tasks[index].status);
  };

  const handleDeleteTask = (index) => {
    deleteTask(index);
  };

  const handleClearAll = () => {
    clearAllTasks();
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
        <button onClick={handleClearAll} className="clear-all-button">Clear All</button>
       
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ cursor: 'pointer' }}>
            <span
              onClick={() => handleTaskChange(index)}
              className={task.status ? 'completas' : 'incompletas'}
            >
              {task.name}
            </span>
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
  
  
}

export default TaskList;
