'use client'

import { useState } from "react"

import { arrowLeft, arrowRight } from "@/app/icons"
import styles from '../app/globals.css'

export const CalendarComponent = () => {
  const [date, setDate] = useState(new Date())

  function handlePrevMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1))
  }

  function handleNextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1))
  }

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
    <div className='calendar-table'>
      <div className='calendar-date'>
        <button onClick={handlePrevMonth}>
          {arrowLeft}
        </button>
        <div className="calendar-date-text">
          <span style={{fontWeight: 'bold', fontSize: '1.3rem'}}>
            {date.toLocaleString('default', {month: 'long'}).slice(0, 1).toUpperCase() + date.toLocaleString('default', {month: 'long'}).slice(1)}
          </span>
          <span style={{paddingBottom: '1rem', color: '#ffffff9b'}}>
            {date.getFullYear()}
          </span>
        </div>
        <button onClick={handleNextMonth}>
          {arrowRight}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Dom</th>
            <th>Lun</th>
            <th>Mar</th>
            <th>Mie</th>
            <th>Jue</th>
            <th>Vie</th>
            <th>Sab</th>
          </tr>
        </thead>
        <tbody>
          {changeCalendar()}
        </tbody>
      </table>
    </div>
    )
}
