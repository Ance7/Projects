'use client'

import './globals.css'
import { rubik } from './fonts'
import Calendar from '@/components/Calendar'
import { MiniCalendar } from '@/components/MiniCalendar'
import TagsView from '@/components/TagsView'
import { useEffect, useState } from 'react'
import SearchTask from '@/components/SearchTask'

export default function RootLayout ({ children }) {
  const [tags, setTags] = useState(['Trabajo', 'Personal', 'Urgente'])
  const [colorTag, setColorTag] = useState(['#00b8d8', '#ff7cb3', '#00a772'])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks) {
      setTasks(tasks.map(task => ({
        ...task,
        date: new Date(task.date)
      })))
    }
    console.log(tasks)
  }, [])

  return (
    <html lang="en">
      <body className={rubik.className}>

        <SearchTask tasks={tasks} tags={tags} colorTags={colorTag} />

        <main>
          <div className='calendar-container'>
            <MiniCalendar />
          </div>

          <TagsView tags={tags} setTags={setTags} colorTag={colorTag} setColorTag={setColorTag} />

          <Calendar tags={tags} colorTag={colorTag} tasks={tasks} setTasks={setTasks}/>

          {children}
        </main>
      </body>
    </html>
  )
}
