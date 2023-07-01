import "./App.css";
import Section from "./comps/Section";
import Title from "./comps/Title";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">ToDo List</header> */}
      <div className="flex flex-col place-items-center my-9">
        <Title/> 
        <Section/>
      </div>
    </div>
  );
}

export default App;
