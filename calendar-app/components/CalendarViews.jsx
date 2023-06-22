import React, { useState } from 'react'
import styles from '@/app/page.module.css'
import { MiniCalendar } from './MiniCalendar'
import YearCalendars from './YearCalendars'
import AddTaskBody from './AddTaskBody'
import TaskView from './TaskView'
import EditTaskBody from './EditTaskBody'

export const CalendarDay = ({ tags, colorTag, tasks, setTasks }) => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [showTaskView, setShowTaskView] = useState(false)
  const [actualTask, setActualTask] = useState('')
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
          onClick={() => {
            setShowTaskView(true)
            setActualTask(task.name)
          }}
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
      {
        showTaskView && (
          <>
            <div className={styles.taskOverlay} onClick={() => setShowTaskView(false)}></div>

            <TaskView taskName={actualTask} tasks={tasks} tags={tags} colorTags={colorTag} />
          </>
        )
      }
    </div>
  )
}

export const CalendarWeek = ({ tags, colorTag, tasks, setTasks }) => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [showTaskView, setShowTaskView] = useState(false)
  const [ShowEditTasks, setShowEditTasks] = useState(false)
  const [taskForEdit, setTaskForEdit] = useState('')
  const [actualTask, setActualTask] = useState('')
  const filteredTasks = filterTasksByWeek(tasks)

  const todayDate = new Date()
  const dayDate = todayDate.getDay()
  const monthDate = todayDate.getMonth() + 1
  const days = [...Array(7).keys()]
  const daysName = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  const hours = [...Array(19).keys()]
  const firstDayWeek = new Date(todayDate.setDate(todayDate.getDate() - todayDate.getDay()))

  const showTasks = (day) => {
    const taskView = []
    let taskLeftOffset = 0

    filteredTasks
      .filter(task => task.date.getDay() === day)
      .forEach(task => {
        const taskTop = (task.initHour + 1) * 50
        const taskHeight = (task.finishHour - task.initHour + 1) * 50
        const taskColor = colorTag[tags.indexOf(task.tag)]
        const taskLeft = day === 0 ? 50 : 50 + day * 40
        let taskOverlap = false
        const overlap = taskView.some(prevTask => {
          const prevTaskTop = prevTask.props.style.top
          const prevTaskBottom = prevTaskTop + prevTask.props.style.height
          return prevTaskBottom > taskTop
        })

        if (overlap) {
          taskLeftOffset += 5
          taskOverlap = true
        } else {
          taskLeftOffset = 0
          taskOverlap = false
        }

        taskView.push(
          <div
            className={styles.task}
            onClick={() => {
              setShowTaskView(true)
              setActualTask(task.name)
            }}
            style={{
              top: taskTop,
              height: taskHeight,
              backgroundColor: taskColor,
              left: taskLeft + taskLeftOffset,
              width: '3rem',
              opacity: taskOverlap ? 0.6 : 1,
              overflow: 'hidden',
              writingMode: 'vertical-rl'
            }}
          >
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

      <table className={styles.monthCalendar}>
        <thead>
          <tr>
            <td></td>
            {
              days.map((day, i) => {
                const dayDate = firstDayWeek.getDate() + i
                const monthDate = firstDayWeek.getMonth() + 1

                return (
                  <td key={i}>
                    <div>{daysName[day]}</div>
                    <span>{dayDate}.{monthDate < 10 ? '0' + monthDate : monthDate}</span>
                    {
                      showTasks(day)
                    }
                  </td>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
            {
              hours.map((hour, i) => {
                return (
                  <tr key={i} className={styles.hoursMonth}>
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

      {
        showAddTask && (
        <>
          <div className={styles.addTaskOverlay} onClick={() => setShowAddTask(false)} />

          <AddTaskBody tags={tags} colorTag={colorTag} tasks={tasks} setTasks={setTasks} setShowAddTask={setShowAddTask} />
        </>
        )
      }
      {
        showTaskView && (
          <>
            <div className={styles.addTaskOverlay} onClick={() => setShowTaskView(false)}></div>

            <TaskView taskName={actualTask} tasks={tasks} tags={tags} colorTags={colorTag} setTasks={setTasks} setShowTaskView={setShowTaskView} setShowEditTasks={setShowEditTasks} setTaskForEdit={setTaskForEdit} />
          </>
        )
      }
      {
        ShowEditTasks && (
          <>
            <div className={styles.addTaskOverlay} onClick={() => setShowEditTasks(false)}></div>

            <EditTaskBody task={taskForEdit} colorTag={colorTag} setTasks={setTasks} tasks={tasks} setShowEditTasks={setShowEditTasks} setTaskForEdit={setTaskForEdit} tags={tags} />
          </>
        )
      }
    </div>
  )
}

export const CalendarMonth = ({ tasks }) => {
  const taskFilter = filterTasksByMonth(tasks)

  return (
    <div style={{ marginTop: '1.5rem', width: '100%' }}>
      <MiniCalendar />
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

const filterTasksByWeek = (tasks) => {
  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)
  const firstDayWeek = currentDate.getDate() - currentDate.getDay()
  const firstDateWeek = new Date(currentDate)
  firstDateWeek.setDate(firstDayWeek)
  const lastDateWeek = new Date(currentDate)
  lastDateWeek.setDate(firstDayWeek + 6)

  return tasks.filter(task => {
    const taskDate = task.date
    return taskDate >= firstDateWeek && taskDate <= lastDateWeek
  })
}

const filterTasksByMonth = (tasks) => {
  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)
  const firstDayMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDayMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

  return tasks.filter(task => {
    const taskDate = task.date
    return taskDate >= firstDayMonth && taskDate <= lastDayMonth
  })
}
