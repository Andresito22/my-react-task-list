import React from 'react'


function Task({ nombre, estado }) {

  return (
    <div className='contenedor'>
      <p className={`tareas ${estado ? 'completas' : 'incompletas'}`}>{nombre} </p>     
    </div>
  )
}

export default Task