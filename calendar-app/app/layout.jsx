// import Link from 'next/link'
import './globals.css'
import { rubik } from './fonts'
import ComponenteH from '@/components/header'
import dynamic from 'next/dynamic'
import { CalendarComponent } from '@/components/Calendar'
import HeaderComponent from '@/components/Header'
import Tags from '@/components/Tags'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>

        <HeaderComponent />

        <main>
          <div className='calendar-info'>
            <div className='mini-calendar'>

            </div>
            <div className='tags'>

            </div>
            <div className='today-events'>

            </div>
            <div className='tomorrow-events'>

            </div>
          </div>

          <CalendarComponent />

          <Tags />

          {children}
        </main>
      </body>
    </html>
  )
}
