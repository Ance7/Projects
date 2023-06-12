'use client'

import React, { useState } from 'react'

function Calendar() {
  const [optionActive, setOptionActive] = useState('week');

  return (
    <div>
      <div className='options'>
          <div >Hoy</div>
          <div >Semana</div>
          <div >Mes</div>
          <div >Año</div>
      </div>

      <div className='calendar'>

      </div>
    </div>
  )
}

export default Calendar