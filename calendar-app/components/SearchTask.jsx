import React from 'react'
import { actualDay, actualMonth, actualYear } from '@/components/MiniCalendar'
import { iconSearch } from '@/app/icons'

function HeaderComponent() {
  return (
    <header>
      <div className='calendar-options'>
        <div className='calendar-search'>
          <div>{iconSearch}</div>
          <input type='search' placeholder='Buscar Tarea' name='search' />
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent