'use client'

import './globals.css'
import { rubik } from './fonts'
import HeaderComponent from '@/components/SearchTask'
import Calendar from '@/components/Calendar'
import { MiniCalendar } from '@/components/MiniCalendar'
import TagsView from '@/components/TagsView'
import { useState } from 'react'

export default function RootLayout({ children }) {

  const [tags, setTags] = useState(['Trabajo', 'Personal', 'Urgente'])
  const [colorTag, setColorTag] = useState(['#00b8d8','#ff7cb3','#00a772'])
  const [tasks, setTasks] = useState([]);

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
