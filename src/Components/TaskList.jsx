import React, { useEffect, useState } from 'react';
import Task from './Task';
import { useTaskManager } from './UseTaskManager';

function TaskList() {
  const { tasks, createTask, deleteTask, updateTaskStatus, clearAllTasks } = useTaskManager();
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tareas')) || [];
    if (storedTasks.length > 0) {
      storedTasks.forEach((task) => createTask(task.name, task.description));
    }
  }, []);

  const handleAddTask = () => {
    if (newTaskName.trim().length < 3) {
      // Realiza la validación de que el nombre tenga al menos 3 caracteres
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    createTask(newTaskName, newTaskDescription);
    setNewTaskName('');
    setNewTaskDescription('');
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
          placeholder="Nombre de la tarea (mínimo 3 caracteres)"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción de la tarea (opcional)"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
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
            <p>{task.description}</p>
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;