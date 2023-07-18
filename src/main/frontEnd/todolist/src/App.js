import { useState } from "react";
import "./css/App.css";
import Login from "./comps/Login";
import Section from "./comps/Section";
import Title from "./comps/Title";
import CalendarContainer from "./comps/CalendarContainer";

function App() {
  return (
    <div className="App">
      <CalendarContainer />
      {/* <div className="flex flex-col place-items-center my-9">
        <Title />
        <Section />
      </div> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
