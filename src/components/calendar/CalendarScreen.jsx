import { Calendar, luxonLocalizer } from "react-big-calendar";
import { DateTime } from "luxon";
import { Navbar } from "../ui/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 7 });
const events = [
  {
    title: "Dentista, me rompen la boca",
    start: DateTime.now().minus({hour:4}).toJSDate(),
    end: DateTime.now().minus({hour:2}).toJSDate(),
    // start:new Date('2022-05-28T01:36:42.486-03:00'),
    // end:new Date('2022-05-29T01:36:42.486-03:00',
    bgcolor: "#fafafa",
  },
];

export const CalendarScreen = () => {
  console.log(DateTime.now().toJSDate());
  return (
    <div className="calendar-screen">
      <Navbar></Navbar>

      <Calendar
        localizer={localizer}
        events={events}
        startAccesor="start"
        endAccessor="end"
      ></Calendar>
    </div>
  );
};
