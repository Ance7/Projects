'use client'

import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState } from "react"
import ReactDatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

const locales = {
  'es-US': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: 'Evento 1', 
    allDay: true, 
    start: new Date(2023, 5, 1), 
    end: new Date(2023, 5, 2)
  },
  {
    title: 'Evento 2', 
    start: new Date(2023, 5, 4), 
    end: new Date(2023, 5, 7)
  }
]

export const CalendarComponent = () => {
  const [newEvent, setNewEvent] = useState({title: '', start: '', end: ''})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

  return(
    <div style={{height: "100vh", width: "100%"}}>
      <Calendar 
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        style={{height: 500, margin: '40px'}}
      />
    </div>
    )
}
