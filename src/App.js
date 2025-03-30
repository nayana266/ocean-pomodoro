// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./style.css";
import { Label } from "./Label"; // Correct named import
import Image from "./Image";
import Timer from "./Timer";


function App() {
  return (
   
      <div className="App">
        <Image />
        <Label />
        <Timer /> 
      </div>
   
  );
}

export default App;
