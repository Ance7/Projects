import React from 'react'

function ComponenteH() {
  return (
    <header>
      <button className='btn-create-task'>
        Crear
      </button>

      <div className='info-date'>
        <p>June</p>
        <span>2023</span>
      </div>

      <div className='calendar-options'>
        <input type='search' placeholder='Buscar Tarea' name='search'  />
        <div className='options'>
          <div>Today</div>
          <div className='active'>Semana</div>
          <div>Mes</div>
          <div>Año</div>
        </div>
      </div>
    </header>
  )
}

export default ComponenteH