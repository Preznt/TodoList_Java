import { useState } from "react";
import Calendar from "react-calendar";
import "../css/Calendar.css";
import moment from "moment";
import { RiTodoLine } from "react-icons/ri";

const CalendarContainer = () => {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);
  useState(async () => {
    try {
      const res = await fetch("/api/todo/date");
      const result = await res.json();
      setMark(result);
      console.log(mark);
    } catch (err) {
      console.log("캘린더 useState : " + err);
    }
  }, []);
  return (
    <div className="flex justify-center ">
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        showNeighboringMonth={false}
        tileContent={({ date, view }) => {
          if (mark.find((m) => m === moment(date).format("YYYY-MM-DD"))) {
            return (
              <div className="w-full flex justify-end">
                <RiTodoLine size="1.5em" />
              </div>
            );
          }
        }}
      />
    </div>
  );
};

export default CalendarContainer;
