'use client'

import React from 'react';
import styles from '../app/page.module.css'

const YearCalendars = ({ date }) => {
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
  const daysInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

  const prevMonthDays = []
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    prevMonthDays.push(daysInPrevMonth - i)
  }

  const nextMonthDays = []
  for (let i = lastDayOfMonth + 1; i <= 6; i++) {
    nextMonthDays.push(i - lastDayOfMonth)
  }

  const changeCalendar = () => {
    let calendar = [...prevMonthDays, ...Array.from({length: daysInMonth}, (_, i) => i + 1), ...nextMonthDays]
    let rows = []

    for (let i = 0; i < calendar.length; i++) {
      if (i % 7 === 0) {
        rows.push(
        <tr key={i}>
          <td style={{color: '#bd0000'}}>{calendar[i]}</td>
          <td>{calendar[i + 1]}</td>
          <td>{calendar[i + 2]}</td> 
          <td>{calendar[i + 3]}</td>
          <td>{calendar[i + 4]}</td>
          <td>{calendar[i + 5]}</td>
          <td>{calendar[i + 6]}</td>
        </tr>
        )
      }
    }

    return rows
  }

  return(
    <div className={styles.yearCalendarView}>
      <div>
        <div>
          <span>
            {date.toLocaleString('default', {month: 'long'}).slice(0, 1).toUpperCase() + date.toLocaleString('default', {month: 'long'}).slice(1)}
          </span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>D</th>
            <th>L</th>
            <th>M</th>
            <th>X</th>
            <th>J</th>
            <th>V</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          {changeCalendar()}
        </tbody>
      </table>
    </div>
  )
}

export default YearCalendars;
