// import Link from 'next/link'
import './globals.css'
import { rubik } from './fonts'
import ComponenteH from '@/components/SearchTask'
import dynamic from 'next/dynamic'
import HeaderComponent from '@/components/SearchTask'
import Tags from '@/components/Tags'
import Calendar from '@/components/Calendar'
import { MiniCalendar } from '@/components/MiniCalendar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>

        <HeaderComponent />

        <main>
          <div className='calendar-container'>
            <MiniCalendar />
          </div>

          <Tags />

          <Calendar />

          {children}
        </main>
      </body>
    </html>
  )
}
