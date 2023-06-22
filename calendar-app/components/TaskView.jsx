import styles from '@/app/page.module.css'

const TaskView = ({ taskName, tasks, tags, colorTags, setTasks, setShowTaskView, setShowEditTasks, setTaskForEdit }) => {
  const task = tasks.find(task => task.name === taskName)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const colorTag = colorTags[tags.indexOf(task.tag)]

  const deleteTask = () => {
    tasks.splice(tasks.indexOf(task), 1)
    setTasks([...tasks])
    setShowTaskView(false)
    console.log(tasks)
  }

  if (task) {
    return (
      <>
        <div className={styles.taskContainer}>
          <h3>{task.name}</h3>
          <p>{task.date.toLocaleDateString('es-Es', options)}</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <p>{task.initHour >= 6 ? task.initHour + 6 + ' PM' : task.initHour + 6 + ' AM'}</p>
            <p>-</p>
            <p>{task.finishHour >= 6 ? task.finishHour + 6 + ' PM' : task.finishHour + 6 + ' AM'}</p>
          </div>
          <p style={{ backgroundColor: colorTag, padding: '0.3rem 1.2rem', borderRadius: '15px', width: '8rem', textAlign: 'center' }}>
            {task.tag}
          </p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p style={{ minWidth: '9rem' }}>Repetir</p>
            <p>{task.repeat}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p style={{ minWidth: '9rem' }}>Descripcion</p>
            <p>{task.description}</p>
          </div>

          <div style={{ backgroundColor: '#6D6D6D', width: '100%', height: '2px', margin: '0.6rem 0 0.6rem' }} />

          <div className={styles.taskBtnContainer}>
            <button
              className={styles.btnEditTask}
              onClick={() => {
                setShowEditTasks(true)
                setShowTaskView(false)
                setTaskForEdit(task)
              }}
            >
              Editar
            </button>
            <button className={styles.btnDeleteTask} onClick={() => deleteTask()}>Eliminar</button>
          </div>
        </div>
      </>
    )
  }
}

export default TaskView
