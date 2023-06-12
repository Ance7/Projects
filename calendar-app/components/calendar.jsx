'use client'

import { task } from '@/Context/task';
import React, { useState } from 'react'

function Calendar() {
  const [optionActive, setOptionActive] = useState('week')

  const handleClick = (optDate) => {
    setOptionActive(optDate)
  }

  const handleCalendar = (optDate) => {
    if (optDate === 'today') {
      let hours = [...Array(19).keys()]
      return (
        <div>
          {
            hours.map((hour, index) => {
              return (
                <div key={index}>
                  <div>{hour + 6}:00</div>
                </div>
              )  
            }) 
          }
        </div>
      )
    } else if (optDate === 'week') {
      let todayDate = new Date()
      let dayDate = todayDate.getDay()
      let monthDate = todayDate.getMonth() + 1
      let days = [...Array(7).keys()]
      let daysName = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
      let hours = [...Array(19).keys()]
      return (
        <div>
          <thead>
            <tr>
              <td></td>
              {
                days.map((day, index) => {
                  return (
                    <td key={index}>
                      <div>{daysName[day]}</div>
                      <span>{dayDate + '.'}{monthDate < 10 ? '0'+monthDate : monthDate}</span>
                    </td>
                  )  
                })
              }
            </tr>
          </thead>
          <tbody>
              {
                hours.map((hour, index) => {
                  return (
                    <tr key={index}>
                      <td>{hour + 6} {hour+6 <= 12 ? 'AM' : 'PM'}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  )   
                })
              }
          </tbody>
        </div>
      )
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
      </div>
    </div>
  )
}

export default Calendar