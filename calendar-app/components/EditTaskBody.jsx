'use client'

import React, { useState } from 'react'
import styles from '@/app/page.module.css'
import { miniArrowLeft, miniArrowRight } from '@/app/icons'

const EditTaskBody = ({ task, colorTag, setTasks, tasks, setShowEditTasks, setTaskForEdit, tags }) => {
  const [initHour, setInitHour] = useState(task.initHour + 6)
  const [finishHour, setFinishHour] = useState(task.finishHour + 6)
  const [taskDate, setTaskDate] = useState(task.date)
  const [taskRepeat, setTaskRepeat] = useState(task.repeat)
  const [taskDescription, setTaskDescription] = useState(task.description)
  const colorTagTask = colorTag[tags.indexOf(task.tag)]

  const formatDate = (date) => {
    const actualDate = new Date(date)
    const year = actualDate.getFullYear()
    const month = actualDate.getMonth() + 1
    const day = actualDate.getDate()
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
  }

  const handleInitHour = (ope) => {
    if (ope === 'inc') {
      if (initHour === 23) return
      if (initHour === finishHour - 1) return
      setInitHour(initHour + 1)
    } else if (ope === 'dec') {
      if (initHour === 6) return
      setInitHour(initHour - 1)
    }
  }

  const handleFinishHour = (ope) => {
    if (ope === 'inc') {
      if (finishHour === 23) return
      setFinishHour(finishHour + 1)
    } else if (ope === 'dec') {
      if (finishHour === initHour + 1) return
      setFinishHour(finishHour - 1)
    }
  }

  const handleChangeDate = (e) => {
    setTaskDate(e.target.value)
  }

  const handleChangeRepeat = (e) => {
    setTaskRepeat(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setTaskDescription(e.target.value)
  }

  const editTask = (event) => {
    event.preventDefault()
    let date
    if (taskDate === task.date) {
      const [year, month, day] = formatDate(task.date).split('-')
      date = new Date(year, month - 1, day)
    } else {
      const [year, month, day] = taskDate.split('-')
      date = new Date(year, month - 1, day)
    }

    tasks.splice(tasks.indexOf(task), 1)

    setTasks([...tasks, {
      name: task.name,
      // eslint-disable-next-line object-shorthand
      date: date,
      initHour: initHour - 6,
      finishHour: finishHour - 6,
      tag: task.tag,
      repeat: taskRepeat,
      description: taskDescription
    }])

    setTaskForEdit('')
  }

  return (
    <div className={styles.editTaskContainer}>
      <h3 style={{ fontSize: '1.7rem', color: '#B68D40' }}>Edita un evento</h3>
      <form className={styles.addTaskBody}>
        <div>
          <label>Nombre</label>
          <p className={styles.editTaskTaskName}>{task.name}</p>
        </div>
        <div>
          <label>Fecha</label>
          <input type="date" onChange={handleChangeDate} defaultValue={formatDate(task.date)} />
        </div>
        <div>
          <label>Hora</label>
          <div className={styles.addTaskHourInput}>
            <div>
              <span onClick={() => handleInitHour('dec')}>{miniArrowLeft}</span>
              <p>{initHour}{initHour >= 12 ? ':00 PM' : ':00 AM'}</p>
              <span onClick={() => handleInitHour('inc')}>{miniArrowRight}</span>
            </div>
            <div>
              <span onClick={() => handleFinishHour('dec')}>{miniArrowLeft}</span>
              <p>{finishHour}{finishHour >= 12 ? ':00 PM' : ':00 AM'}</p>
              <span onClick={() => handleFinishHour('inc')}>{miniArrowRight}</span>
            </div>
          </div>
        </div>
        <div>
          <label>Tag</label>
          <div className={styles.addTaskBodyTagsContainer}>
            {
              <p style={{ backgroundColor: colorTagTask, padding: '0.3rem 1.5rem', borderRadius: '15px', margin: 0, cursor: 'not-allowed' }}>{task.tag}</p>
            }
          </div>
        </div>
        <div>
          <label>Repetir</label>
          <select onChange={handleChangeRepeat} defaultValue={task.repeat}>
            <option value="Cada dia">Todos los dias</option>
            <option value="Un Dia">Solo un dia</option>
            <option value="Cada semana">Cada semana</option>
            <option value="Cada mes">Cada mes</option>
          </select>
        </div>
        <div>
          <label>Descripcion</label>
          <textarea type="text" placeholder='Ingresa la descripcion' maxLength={50} onChange={handleChangeDescription} defaultValue={task.description} />
        </div>

        <div className={styles.addTaskLine} />

        <button
          className={styles.btnCreateTask}
          onClick={ () => {
            // eslint-disable-next-line no-undef
            editTask(event)
            setShowEditTasks(false)
            setTaskForEdit(task)
          }}>
            Editar
          </button>
      </form>
    </div>
  )
}

export default EditTaskBody
