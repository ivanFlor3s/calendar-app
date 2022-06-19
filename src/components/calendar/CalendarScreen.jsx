import { Calendar, luxonLocalizer } from "react-big-calendar";
import { DateTime } from "luxon";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent, Navbar } from "../";

const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 7 });


const events = [
  {
    title: "Dentista, me rompen la boca",
    start: DateTime.now().minus({hour:4}).toJSDate(),
    end: DateTime.now().minus({hour:2}).toJSDate(),
    // start:new Date('2022-05-28T01:36:42.486-03:00'),
    // end:new Date('2022-05-29T01:36:42.486-03:00',
    bgcolor: "#fafafa",
    user: {
      name: 'felipee2do'
    }
  },
];

export const CalendarScreen = () => {


  return (
    <div className="calendar-screen">
      <Navbar></Navbar>

      <Calendar
        localizer={localizer}
        events={events}
        style={{height:'calc(100vh - 80px)'}}
        startAccesor="start"
        endAccessor="end"
        components={{
          event: CalendarEvent
        }}
      ></Calendar>
    </div>
  );
};
