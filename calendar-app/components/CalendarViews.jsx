import React, { useState } from 'react'
import styles from '@/app/page.module.css'
import { MiniCalendar } from './MiniCalendar'
import YearCalendars from './YearCalendars'
import AddTaskBody from './AddTaskBody'
import showTask from './TaskView'

export const CalendarDay = ({ tags, colorTag, tasks, setTasks }) => {
  const [showAddTask, setShowAddTask] = useState(false)
  const selectedDate = new Date()
  const filteredTasks = filterTasks(tasks, selectedDate)

  const hours = [...Array(19).keys()]

  const showTasks = () => {
    const taskView = []
    let taskLeft

    filteredTasks.forEach(task => {
      const taskTop = task.initHour * 50
      const taskHeight = (task.finishHour - task.initHour) * 50
      const taskColor = colorTag[tags.indexOf(task.tag)]

      const overlap = taskView.some(prevTask => {
        return prevTask.props.style.top + prevTask.props.style.height > taskTop
      })

      if (overlap) {
        taskLeft += 90
      } else {
        taskLeft = 50
      }

      taskView.push(
        <div
          className={styles.task}
          onClick={() => showTask(task.name)}
          style={{
            top: taskTop,
            height: taskHeight,
            backgroundColor: taskColor,
            left: taskLeft
          }}>
          <span>{task.name}</span>
        </div>
      )
    })

    return taskView
  }

  return (
    <div style={{ position: 'relative' }}>
      <button className={styles.btnAddTask} onClick={() => setShowAddTask(true)}>
        +
      </button>

      <table className={styles.dayCalendar}>
        <tbody>
          {
            hours.map((hour, i) => {
              return (
                <tr key={i}>
                  <td>{hour + 6}:00</td>
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
      {
        showAddTask && (
          <>
            <div className={styles.addTaskOverlay} onClick={() => setShowAddTask(false)} />

            <AddTaskBody tags={tags} colorTag={colorTag} tasks={tasks} setTasks={setTasks} setShowAddTask={setShowAddTask} />
          </>
        )
      }
      {
        showTasks()
      }
    </div>
  )
}

export const CalendarWeek = ({ tags, colorTag, tasks, setTasks }) => {
  const [showAddTask, setShowAddTask] = useState(false)

  const todayDate = new Date()
  const dayDate = todayDate.getDay()
  const monthDate = todayDate.getMonth() + 1
  const days = [...Array(7).keys()]
  const daysName = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  const hours = [...Array(19).keys()]

  return (
    <div style={{ position: 'relative' }}>

      <button className={styles.btnAddTask} onClick={() => setShowAddTask(true)}>
          +
      </button>

      <table className={styles.monthCalendar}>
        <thead>
          <tr>
            <td></td>
            {
              days.map((day, index) => {
                return (
                  <td key={index}>
                    <div>{daysName[day]}</div>
                    <span>{dayDate + '.'}{monthDate < 10 ? '0' + monthDate : monthDate}</span>
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
                  <tr key={index} className={styles.hoursMonth}>
                    <td>{hour + 6} {hour + 6 <= 12 ? 'AM' : 'PM'}</td>
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

      {showAddTask && (
        <>
          <div className={styles.addTaskOverlay} onClick={() => setShowAddTask(false)} />

          <AddTaskBody tags={tags} colorTag={colorTag} tasks={tasks} setTasks={setTasks} setShowAddTask={setShowAddTask} />
        </>
      )
    }
    </div>
  )
}

export const CalendarMonth = () => {
  return (
    <div style={{ marginTop: '1.5rem', width: '100%' }}>
      <MiniCalendar/>
    </div>
  )
}

const YearTable = () => {
  const months = Array.from({ length: 12 }, (_, i) => new Date(new Date().getFullYear(), i))
  const monthsPerRow = 3
  const rows = Array.from({ length: Math.ceil(months.length / monthsPerRow) }, (_, i) => months.slice(i * monthsPerRow, (i + 1) * monthsPerRow))

  return (
    <table>
      <tbody>
        {
          rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((month, monthIndex) => (
                <td key={monthIndex}>
                  <YearCalendars date={month} />
                </td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export const CalendarYear = () => {
  return (
    <div className={styles.yearCalendarContainer}>
      <YearTable />
    </div>
  )
}

const filterTasks = (tasks, selectedDate) => {
  return tasks.filter(task => {
    const taskDate = task.date

    return taskDate.getDate() === selectedDate.getDate() &&
      taskDate.getMonth() === selectedDate.getMonth() &&
      taskDate.getFullYear() === selectedDate.getFullYear()
  })
}
