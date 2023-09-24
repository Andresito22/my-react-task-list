import { useState } from 'react';
import { Checkbox, Input, Button, Flex, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    <Flex alignItems="center" className='contenedor'>
      <Checkbox
        isChecked={status}
        onChange={handleCheckboxChange}
        marginRight="20px"
      />
      {isEditing ? (
        <>
          <Input
            className='input-edit'
            value={updatedTaskName}
            onChange={handleInputChange}
          />
          <Input
            className='input-edit'
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
      <Spacer />
      {isEditing ? (
        <>
          <Button
            className='boton3'
            onClick={handleSaveClick}
            colorScheme="green"
            size="sm"
          >
            <FontAwesomeIcon icon={faSave} />
          </Button>
          <Button
            className='boton4'
            onClick={handleCancelClick}
            colorScheme="red"
            size="sm"
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </>
      ) : (
        <>
          <Button
            className='boton3'
            onClick={handleEditClick}
            colorScheme="blue"
            size="sm"
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button
            className='boton4'
            onClick={handleDelete}
            colorScheme="red"
            size="sm"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </>
      )}
    </Flex>
  );
}

export default Task;
