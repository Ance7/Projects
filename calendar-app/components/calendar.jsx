'use client'

import { useState } from "react"

import styles from '../app/globals.css'
import { el } from "date-fns/locale"

export const CalendarComponent = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

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
          <td>{calendar[i]}</td>
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
    <div className={'calendar-table'}>
      <button onClick={handlePrevMonth}>
        Prev
      </button>
      <span>
        {date.toLocaleString('default', {month: 'long'})}
        {date.getFullYear()}
      </span>

      <button onClick={handleNextMonth}>
        Next
      </button>

      <table>
        <thead>
          <tr>
            <th>Domingo</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
          </tr>
        </thead>
        <tbody>
          {changeCalendar()}
        </tbody>
      </table>
    </div>
    )
}
