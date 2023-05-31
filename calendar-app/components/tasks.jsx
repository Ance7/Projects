import React from 'react'

function tasks(nameTask) {
  return (
    <div className='task-card'>
      <div className='close-btn'>

      </div>

      <div className='task-content'>
        <div className='task-title'>{ nameTask }</div>
        <div className='task-description'>

        </div>
      </div>

      <div className='task-btns'>
        <button className='btn-edit-task'>Editar</button>
        <button className='btn-delete-task'>Eliminar</button>
      </div>
    </div>
  )
}

export default tasks