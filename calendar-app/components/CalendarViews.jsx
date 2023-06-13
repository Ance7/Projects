import React from 'react'
import styles from '@/app/page.module.css'
import { MiniCalendar } from './MiniCalendar'

export const CalendarDay = () => {
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
}

export const CalendarWeek = () => {
  let todayDate = new Date()
  let dayDate = todayDate.getDay()
  let monthDate = todayDate.getMonth() + 1
  let days = [...Array(7).keys()]
  let daysName = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  let hours = [...Array(19).keys()]
  
  return (
    <table>
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
    </table>
  )
}

export const CalendarMonth = () => {
  return (
    <div>
      <MiniCalendar />
    </div>
  )
}

export const CalendarYear = () => {
  
}