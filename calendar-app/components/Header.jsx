import React from 'react'
import { actualDay, actualMonth, actualYear } from '@/components/calendar'

function HeaderComponent() {
  return (
    <header>
      <button className='btn-create-task'>
        Crear
      </button>

      <div className='info-date'>
        <p>{actualMonth}</p>
        <span>{actualYear}</span>
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

export default HeaderComponent