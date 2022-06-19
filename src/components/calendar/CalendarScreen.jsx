import { Calendar, luxonLocalizer } from "react-big-calendar";
import { DateTime } from "luxon";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent, Navbar, CalendarModal } from "../";
import { useState } from "react";

const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 7 });

const events = [
  {
    title: "Dentista, me rompen la boca",
    start: DateTime.now().minus({ hour: 4 }).toJSDate(),
    end: DateTime.now().minus({ hour: 2 }).toJSDate(),
    // start:new Date('2022-05-28T01:36:42.486-03:00'),
    // end:new Date('2022-05-29T01:36:42.486-03:00',
    bgcolor: "#fafafa",
    user: {
      name: "felipee2do",
    },
  },
];

export const CalendarScreen = () => {

  const [lastView] = useState(localStorage.getItem('lastView') || 'week')

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };
  const onSelect = (event) => {
    console.log({ lick: event });
  };
  const onViewChanged = (event) => {
    console.log({ onViewChanged: event });
    localStorage.setItem('lastView', event)
  };
  return (
    <div className="calendar-screen">
      <Navbar></Navbar>

      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastView}
        style={{ height: "calc(100vh - 80px)" }}
        startAccesor="start"
        endAccessor="end"
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView = {onViewChanged}
      ></Calendar>


      <CalendarModal></CalendarModal>
    </div>
  );
};
