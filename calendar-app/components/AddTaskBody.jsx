import React, { useState } from 'react'
import styles from '@/app/page.module.css'
import { miniArrowLeft, miniArrowRight } from '@/app/icons'

const AddTaskBody = ({ tags, colorTag, tasks, setTasks, setShowAddTask }) => {
  const [initHour, setInitHour] = useState(8)
  const [finishHour, setFinishHour] = useState(15)

  const [tagSelect, setTagSelect] = useState('')

  const [taskName, setTaskName] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskRepeat, setTaskRepeat] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const handleInitHour = (ope) => {
    if (ope === 'inc') {
      if (initHour === 22) return
      if (initHour === finishHour - 1) return
      setInitHour(initHour + 1)
    } else if (ope === 'dec') {
      if (initHour === 5) return
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

  const handleSelectTag = (tag) => {
    setTagSelect(tag)
  }

  const handleChangeName = (e) => {
    setTaskName(e.target.value)
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

  const createTask = (event) => {
    event.preventDefault()
    const [year, month, day] = taskDate.split('-')
    const date = new Date(year, month - 1, day)
    setTasks([...tasks, {
      name: taskName,
      date: date,
      initHour: initHour - 6,
      finishHour: finishHour - 6,
      tag: tagSelect,
      repeat: taskRepeat,
      description: taskDescription
    }])
  }

  return (
    <div className={styles.addTaskContainer}>
      <h3 style={{ fontSize: '1.7rem', color: '#B68D40' }}>Crea un evento</h3>
      <form className={styles.addTaskBody}>
        <div>
          <label>Nombre</label>
          <input type="text" placeholder='Ingresa el nombre' maxLength={10} onChange={handleChangeName}/>
        </div>
        <div>
          <label>Fecha</label>
          <input type="date" onChange={handleChangeDate}/>
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
              tags.map((tag, index) => {
                return (
                  <div key={index}>
                    <p style={{ backgroundColor: colorTag[index] }} className={tagSelect === tag ? styles.tagActive : styles.addTaskBodyTags} onClick={() => { handleSelectTag(tag) }}>
                      {tag}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <label>Repetir</label>
          <select onChange={handleChangeRepeat}>
            <option value="everyDays">Todos los dias</option>
            <option value="oneDay">Solo un dia</option>
            <option value="everyWeek">Cada semana</option>
            <option value="everyMonth">Cada mes</option>
          </select>
        </div>
        <div>
          <label>Descripcion</label>
          <textarea type="text" placeholder='Ingresa la descripcion' maxLength={50} onChange={handleChangeDescription}/>
        </div>

        <div className={styles.addTaskLine} />

        <button
          className={styles.btnCreateTask}
          disabled={!taskName || !taskDate || !tagSelect || !taskDescription}
          onClick={ () => {
            // eslint-disable-next-line no-undef
            createTask(event)
            setShowAddTask(false)
          }}>
            Crear
          </button>
      </form>
    </div>
  )
}

export default AddTaskBody
