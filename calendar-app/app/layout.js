import Link from 'next/link'
import './globals.css'
import { rubik } from './fonts'

export const metadata = {
  title: 'Calendar App',
  description: 'Calendar App whit Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <header>
          <button className='btn-create-task'>
            Crear
          </button>

          <div className='info-date'>

          </div>

          <div className='calendar-options'>
            <input type='search' placeholder='Buscar Tarea' name='search'  />
            <div>Semana</div>
            <div>Mes</div>
            <div>Año</div>
          </div>
        </header>
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
