import { Calendar, luxonLocalizer} from 'react-big-calendar'
import { DateTime} from 'luxon'
import { Navbar } from '../ui/Navbar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = luxonLocalizer(DateTime,{firstDayOfWeek: 7})
const events = [
   { 
       title:'Dentista, me rompen la boca',
       start: DateTime.now(),
       end: DateTime.now().plus({hours:2}),
       bgcolor: '#fafafa'
    }
    
]

export const CalendarScreen = () => {
  return (
      <div className='calendar-screen'>
          <Navbar></Navbar>

          <Calendar
            localizer = {localizer}
            events = {events}

            startAccesor = "start"
            endAccessor="end"
          >

          </Calendar>

      </div>
  )
}
