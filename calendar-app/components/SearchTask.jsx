'use client'

import React, { useState } from 'react'
import { iconSearch } from '@/app/icons'
import TaskView from './TaskView'
import { set } from 'date-fns'

function SearchTask ({ tasks, tags, colorTags }) {
  const [actualSearch, setActualSearch] = useState('')
  const [showTaskView, setShowTaskView] = useState(false)
  const [foundTaskName, setFoundTaskName] = useState('')
  const [showTaskNotFound, setshowTaskNotFound] = useState(false)

  const handleChange = (e) => {
    setActualSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const filteredTask = tasks.filter(task => task.name.toLowerCase() === actualSearch.toLowerCase())

    if (filteredTask.length > 0) {
      setShowTaskView(true)
      setFoundTaskName(filteredTask[0].name)
    } else {
      setshowTaskNotFound(true)
    }
  }

  return (
    <header>
      <div className='calendar-options'>
        <form className='calendar-search' onSubmit={handleSubmit} >
          <div>{iconSearch}</div>
          <input type='search' placeholder='Buscar Tarea' autoComplete='off' name='search' onChange={handleChange} />
        </form>
      </div>
      {
        showTaskView && (
          <>
            <div className={'task-overlay'} onClick={() => setShowTaskView(false)}></div>

            <TaskView taskName={foundTaskName} tasks={tasks} tags={tags} colorTags={colorTags} />
          </>
        )
      }
      {
        showTaskNotFound && (
          <>
            <div className={'task-overlay'} onClick={() => setshowTaskNotFound(false)}></div>

            <div className='task-not-found'>
              <h3>Tarea no encontrada</h3>
              <p>La tarea que buscas no existe, intenta con otro nombre</p>
            </div>
          </>
        )
      }
    </header>
  )
}

export default SearchTask
