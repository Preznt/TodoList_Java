import { useState } from "react";
import Calendar from "react-calendar";
import "../css/Calendar.css";
import moment from "moment";

const CalendarContainer = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="flex justify-center ">
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        showNeighboringMonth={false}
        tileContent={({ activeStartDate, date, view }) =>
          view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null
        }
      />
    </div>
  );
};

export default CalendarContainer;
