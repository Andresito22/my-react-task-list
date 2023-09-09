import { useState, useEffect } from 'react';

export function useTaskManager(initialTasks = []) {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tareas')) || [];
    setTasks(storedTasks);
  }, []);

  const createTask = (taskName) => {
    const newTask = { name: taskName, status: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tareas', JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tareas', JSON.stringify(updatedTasks));
  };

  const updateTaskStatus = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
    localStorage.setItem('tareas', JSON.stringify(updatedTasks));
  };

  const clearAllTasks = () => {
    const updatedTasks = [];
    setTasks(updatedTasks);
    localStorage.removeItem('tareas');
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTaskStatus,
    clearAllTasks,
  };
}