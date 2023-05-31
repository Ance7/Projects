// import Link from 'next/link'
import './globals.css'
import { rubik } from './fonts'
import ComponenteH from '@/components/header'

export const metadata = {
  title: 'Calendar App',
  description: 'Calendar App whit Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>

        <ComponenteH />

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

          {children}
        </main>
      </body>
    </html>
  )
}
