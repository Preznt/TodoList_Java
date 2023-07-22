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

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "dots_custom",
  };

  return (
    <div className="App">
      <Slider {...settings}>
        <div className="flex flex-col place-items-center my-9">
          <Title />
          <Section />
        </div>
        <CalendarContainer />
      </Slider>
      {/* <Login /> */}
    </div>
  );
}

export default App;
