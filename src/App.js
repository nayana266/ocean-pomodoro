// App.js
import React from "react";
import "./style.css"; 

import { Label } from "./Label";  // Correct named import

import logo from './logo.svg';
import Timer from "./Timer";
import './App.css';

function App() {
   return (
       <div className="App">

           <Label />
       </div>
   );
  return (
    <div className="App">
      <h1>Pixel Pomodoro</h1>
      <Timer /> 
    </div>
  );
}


export default App;