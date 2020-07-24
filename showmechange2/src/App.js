import React from 'react';
import './App.css';
import City from './City.png';
import ListOfStates from './ListOfStates';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={City} className="App-logo" alt="logo" />
        <p>
          Show Me Change
        </p>
        <ListOfStates/>
          
       
      </header>
    </div>
  );
}

export default App;
