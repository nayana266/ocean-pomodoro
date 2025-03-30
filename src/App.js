<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
>>>>>>> dccec48b2652a9c7f1cd182649099aa5fd43dcda
import "./style.css";
import { Label } from "./Label"; // Correct named import
import Image from "./Image";
import Timer from "./Timer";

function App() {
  const [start, setStart] = useState(false); // State to track the start button click

  return (
    <div className="App">
      {/* Display the Image and Label components */}
      <Image />
      <Label />

      {/* Conditionally render Timer based on the start state */}
      {start ? (
        <Timer />
      ) : (
        <button className="start-button" onClick={() => setStart(true)}>
          Start
        </button>
      )}
    </div>
  );
}

export default App;
