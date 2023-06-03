'use client'

import { useState } from "react"

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

export const CalendarComponent = () => {
  const [date, setDate] = useState(new Date)

  function handlePrevMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1))
  }

  function handleNextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1))
  }

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
  const daysInPrevMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()

  const prevMonthDays = []

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    prevMonthDays.push(daysInPrevMonth - i)
  }

  const nextMonthDays = []

  for (let i = lastDayOfMonth + 1; i <= 6; i++) {
    nextMonthDays.push(i - lastDayOfMonth)
  }

  return(
    <div>
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
          {
            [...prevMonthDays.reverse(), ...Array.from({length: daysInMonth}, (_, i) => i + 1), ...nextMonthDays].map((day, i) => (
              i % 7 === 0 ? <tr key={day}><td>{day}</td></tr> : <td key={day}>{day}</td>
            ))
          }
        </tbody>
      </table>
    </div>
    )
}


// // Define el estado inicial de la fecha como la fecha actual
// const [date, setDate] = useState(new Date());

// // Función para manejar el botón "Prev" que cambia la fecha al mes anterior
// function handlePrevMonth() {
//   setDate(new Date(date.getFullYear(), date.getMonth() - 1));
// }

// // Función para manejar el botón "Next" que cambia la fecha al mes siguiente
// function handleNextMonth() {
//   setDate(new Date(date.getFullYear(), date.getMonth() + 1));
// }

// // Obtiene el número de días en el mes actual
// const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// // Obtiene el día de la semana del primer día del mes actual (0 = Domingo, 1 = Lunes, etc.)
// const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

// // Obtiene el día de la semana del último día del mes actual (0 = Domingo, 1 = Lunes, etc.)
// const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

// // Obtiene el número de días en el mes anterior
// const daysInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

// // Crea un array con los días del mes anterior que se mostrarán en el calendario
// const prevMonthDays = [];
// for (let i = firstDayOfMonth - 1; i >= 0; i--) {
//   prevMonthDays.push(daysInPrevMonth - i);
// }

// // Crea un array con los días del siguiente mes que se mostrarán en el calendario
// const nextMonthDays = [];
// for (let i = lastDayOfMonth + 1; i <= 6; i++) {
//   nextMonthDays.push(i - lastDayOfMonth);
// }

// // Renderiza el calendario con los días del mes actual, los días del mes anterior y los días del siguiente mes
// return (
//   <div>
//     <button onClick={handlePrevMonth}>Prev</button>
//     <span>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</span>
//     <button onClick={handleNextMonth}>Next</button>
//     <table>
//       <thead>
//         <tr>
//           <th>Sun</th>
//           <th>Mon</th>
//           <th>Tue</th>
//           <th>Wed</th>
//           <th>Thu</th>
//           <th>Fri</th>
//           <th>Sat</th>
//         </tr>
//       </thead>
//       <tbody>
//         {[...prevMonthDays.reverse(), ...Array.from({ length: daysInMonth }, (_, i) => i + 1), ...nextMonthDays].map((day, i) => (
//           i % 7 === 0 ? <tr key={day}><td>{day}</td></tr> : <td key={day}>{day}</td>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );


// import { useState } from 'react';: Importa la función useState de React para manejar el estado.
// const [date, setDate] = useState(new Date());: Define el estado inicial de la fecha como la fecha actual y crea una función para actualizar el estado.
// function handlePrevMonth() {...}: Define una función para manejar el botón “Prev” que cambia la fecha al mes anterior.
// function handleNextMonth() {...}: Define una función para manejar el botón “Next” que cambia la fecha al mes siguiente.
// const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();: Obtiene el número de días en el mes actual.
// const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();: Obtiene el día de la semana del primer día del mes actual (0 = Domingo, 1 = Lunes, etc.).
// const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();: Obtiene el día de la semana del último día del mes actual (0 = Domingo, 1 = Lunes, etc.).
// const daysInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();: Obtiene el número de días en el mes anterior.
// const prevMonthDays = []; ...: Crea un array con los días del mes anterior que se mostrarán en el calendario.
// const nextMonthDays = []; ...: Crea un array con los días del siguiente mes que se mostrarán en el calendario.
// {[...prevMonthDays.reverse(), ...Array.from({ length: daysInMonth }, (_, i) => i + 1), ...nextMonthDays].map((day, i) => (...))}: Renderiza el calendario con los días del mes actual, los días del mes anterior y los días del siguiente mes.
