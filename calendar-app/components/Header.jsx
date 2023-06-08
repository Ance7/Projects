import React from 'react'
import { actualDay, actualMonth, actualYear } from '@/components/Calendar'
import { iconSearch } from '@/app/icons'

function HeaderComponent() {
  return (
    <header>
      <div className='calendar-options'>
        <div className='calendar-search'>
          <div>{iconSearch}</div>
          <input type='search' placeholder='Buscar Tarea' name='search'/>
        </div>
        <div className='options'>
          <div>Hoy</div>
          <div className='active'>Semana</div>
          <div>Mes</div>
          <div>Año</div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent