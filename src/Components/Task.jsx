import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./styles.css"

function Task({ name, description, status, onStatusChange, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(name);
  const [updatedTaskDescription, setUpdatedTaskDescription] = useState(description);

  const handleCheckboxChange = () => onStatusChange();

  const handleDelete = () => onDelete();

  const handleEditClick = () => setIsEditing(true);

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedTaskName(name);
    setUpdatedTaskDescription(description);
  };

  const handleSaveClick = () => {
    if (updatedTaskName.trim() !== '') {
      onUpdate(updatedTaskName, updatedTaskDescription);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedTaskName(e.currentTarget.value);
  };

  const handleDescriptionChange = (e) => {
    setUpdatedTaskDescription(e.currentTarget.value);
  };

  return (
    <div className='contenedor'>
      <input
        type='checkbox'
        checked={status}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <>
          <input className='input-edit'
            type='text'
            value={updatedTaskName}
            onChange={handleInputChange}
          />
          <input className='input-edit'
            type='text'
            placeholder='Hour(optional)'
            value={updatedTaskDescription}
            onChange={handleDescriptionChange}
          />
        </>
      ) : (
        <>
          <p className={`Tarea ${status ? 'Tarea-tachada' : ''}`}>{name}</p>
          <p className={`Tarea ${status ? 'Tarea-tachada' : ''}`}>
            {description}
          </p>
        </>
      )}
      {isEditing ? (
        <>
          <button className='boton3' onClick={handleSaveClick}>
            <FontAwesomeIcon icon={faSave} />
          </button>
          <button className='boton4' onClick={handleCancelClick}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      ) : (
        <>
          <button className='boton3' onClick={handleEditClick}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className='boton4' onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </div>
  );
}

export default Task;
