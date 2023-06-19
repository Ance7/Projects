'use client'

import './globals.css'
import { rubik } from './fonts'
import HeaderComponent from '@/components/SearchTask'
import Calendar from '@/components/Calendar'
import { MiniCalendar } from '@/components/MiniCalendar'
import TagsView from '@/components/TagsView'
import { useState } from 'react'

export default function RootLayout ({ children }) {
  const [tags, setTags] = useState(['Trabajo', 'Personal', 'Urgente'])
  const [colorTag, setColorTag] = useState(['#00b8d8', '#ff7cb3', '#00a772'])
  const [tasks, setTasks] = useState([
    {
      name: 'Tarea 1',
      date: new Date(2023, 5, 19),
      initHour: 2,
      finishHour: 4,
      tag: 'Trabajo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      name: 'Tarea 2',
      date: new Date(2023, 5, 19),
      initHour: 6,
      finishHour: 8,
      tag: 'Personal',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      name: 'Tarea 3',
      date: new Date(2023, 5, 19),
      initHour: 3,
      finishHour: 12,
      tag: 'Urgente',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      name: 'Tarea 4',
      date: new Date(2023, 5, 19),
      initHour: 10,
      finishHour: 12,
      tag: 'Trabajo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      name: 'Tarea 5',
      date: new Date(2023, 5, 19),
      initHour: 14,
      finishHour: 16,
      tag: 'Personal',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    }
  ])

  return (
    <html lang="en">
      <body className={rubik.className}>

        <HeaderComponent />

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
