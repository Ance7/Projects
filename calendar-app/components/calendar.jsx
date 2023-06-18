'use client'

import React, { useState } from 'react'
import { CalendarDay, CalendarMonth, CalendarWeek, CalendarYear } from './CalendarViews'

function Calendar ({ tags, colorTag, tasks, setTasks }) {
  const [optionActive, setOptionActive] = useState('week')

  const handleClick = (optDate) => {
    setOptionActive(optDate)
  }

  const handleCalendar = (optDate) => {
    if (optDate === 'today') {
      return <CalendarDay tags={tags} colorTag={colorTag} tasks={tasks} setTasks={setTasks} />
    } else if (optDate === 'week') {
      return <CalendarWeek tags={tags} colorTag={colorTag} tasks={tasks} setTasks={setTasks} />
    } else if (optDate === 'month') {
      return <CalendarMonth />
    } else if (optDate === 'year') {
      return <CalendarYear />
    }
  }

  return (
    <div>
      <div className='options'>
          <div onClick={() => handleClick('today')} className={optionActive === 'today' ? 'active' : null}>Hoy</div>
          <div onClick={() => handleClick('week')} className={optionActive === 'week' ? 'active' : null}>Semana</div>
          <div onClick={() => handleClick('month')} className={optionActive === 'month' ? 'active' : null}>Mes</div>
          <div onClick={() => handleClick('year')} className={optionActive === 'year' ? 'active' : null}>Año</div>
      </div>

      <div className='calendar'>
        {optionActive === 'week' ? handleCalendar('week') : null}
        {optionActive === 'today' ? handleCalendar('today') : null}
        {optionActive === 'month' ? handleCalendar('month') : null}
        {optionActive === 'year' ? handleCalendar('year') : null}
      </div>
    </div>
  )
}

export default Calendar
