import React from "react";
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
