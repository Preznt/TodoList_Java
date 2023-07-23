import { useState } from "react";
import "./css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-custom.css";
import Login from "./comps/Login";
import Section from "./comps/Section";
import Title from "./comps/Title";
import Slider from "react-slick";
import CalendarContainer from "./comps/calendar/CalendarContainer";
import TodoMain from "./comps/TodoMain";
import { useTodoContext } from "./context/TodoContext";

function App() {
  const { findTheDayTodo, today, sideBarFalse } = useTodoContext();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "dots_custom",
    afterChange: (currentSlide) => {
      if (currentSlide === 0) {
        findTheDayTodo(today);
        sideBarFalse();
      }
    },
  };

  return (
    <div className="App">
      <Slider {...settings}>
        <TodoMain />
        <CalendarContainer />
      </Slider>
      {/* <Login /> */}
    </div>
  );
}

export default App;
