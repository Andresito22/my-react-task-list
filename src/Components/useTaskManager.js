import { useState, useEffect } from 'react';

function useTaskManager(){
    const [tasks, setTasks] = useState(getStoredTasks());

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])

    function getStoredTasks(){
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    }

    const createTask = (taskName) => {
        if (taskName.trim() !== '') {
            const newTask = { name: taskName, status: false};
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    }

    const deleteTask = (index) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks;
        })
    }

    const updateTask = (index, updatedTask) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = {
                ...updatedTasks[index],
                ...updatedTask,
            };
            return updatedTasks;
        })
    }

    const updateTaskStatus = (index) => {
        setTasks((prevTasks) => {
          const updatedTasks = [...prevTasks];
          updatedTasks[index] = {
            ...updatedTasks[index],
            status: !updatedTasks[index].status,
          };
          return updatedTasks;
        });
      };

    return { tasks, createTask, deleteTask, updateTask, updateTaskStatus}
}

export default useTaskManager