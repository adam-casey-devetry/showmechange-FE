import React from "react";
import "./App.css";
import City from "./City.png";
import ListOfStates from "./ListOfStates";
import ListOfCapitals from "./ListOfCapitals";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={City} className="App-logo" alt="logo" />
        <p>Show Me Change</p>
        <ListOfStates />
        <ListOfCapitals />
      </header>
    </div>
  );
}

export default App;
