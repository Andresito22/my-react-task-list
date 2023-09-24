import { useState, useEffect } from 'react';
import useTaskManager from './UseTaskManager';
import Task from './Task';
import "./styles.css"

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask, updateTaskStatus } =
    useTaskManager();
  const [taskName, setTaskName] = useState('');
  const [pendingTasks, setPendingTasks] = useState(0);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false); // Nuevo estado para controlar la ventana emergente de error

  useEffect(() => {
    setPendingTasks(tasks.filter((task) => !task.status).length);
  }, [tasks]);

  const handleTaskStatusChange = (index) => updateTaskStatus(index);

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim().length >= 3) {
      createTask(taskName);
      setTaskName('');
      setError('');
      setShowError(false); // Oculta la ventana emergente de error si se muestra
    } else {
      setError('El nombre de la tarea debe tener al menos 3 caracteres.');
      setShowError(true); // Muestra la ventana emergente de error
    }
  };

  const handleDeleteTask = (index) => deleteTask(index);

  const handleUpdateTask = (index, updateName, updateDescription) =>
    updateTask(index, { name: updateName, description: updateDescription });

  const handleInputChange = (e) => setTaskName(e.target.value);

  const handleClearAll = () => {
    const completedTaskIndexes = tasks.reduce((indexes, task, index) => {
      if (task.status) indexes.push(index);
      return indexes;
    }, []);
    completedTaskIndexes.reverse().forEach((index) => {
      deleteTask(index);
    });
  };

  return (
    <>
      <form onSubmit={addTask}>
        <input className='input-task'
          type='text'
          placeholder='Add your new todo'
          value={taskName}
          onChange={handleInputChange}
        />
        <button className='boton1'>+</button>
      </form>
      {showError && <p className='error'>{error}</p>} {/* Mostrar la ventana emergente de error */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task
              name={task.name}
              description={task.description}
              status={task.status}
              onStatusChange={() => handleTaskStatusChange(index)}
              onDelete={() => handleDeleteTask(index)}
              onUpdate={(updatedName, updatedDescription) =>
                handleUpdateTask(index, updatedName, updatedDescription)
              }
            />
          </li>
        ))}
      </ul>
      <>
        <p>You have {pendingTasks} pending tasks.</p>
      </>
      <div className='borrar-contenedor'>
        <button className='boton2' onClick={handleClearAll}>Clean completed tasks</button>
      </div>
    </>
  );
}

export default TaskList;
