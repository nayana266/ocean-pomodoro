import React, { useState } from "react";
import "./style.css";
import { Label } from "./Label"; // Correct named import
import Image from "./Image";
import Timer from "./Timer";

function App() {
  const [start, setStart] = useState(false); // State to track the start button click

  const seashellStyle = {
    position: "absolute",
    top: "30px", // Adjust as needed
    left: "50px", // Adjust as needed
    transform: "rotate(30deg)", // Adjust rotation as needed
    width: "100px",
    height: "100px",
  };

  const coralStyle = {
    position: "absolute",
    top: "30%", // Adjust as needed
    left: "20px", // Adjust as needed
    transform: "rotate(250deg)", // Adjust rotation as needed
    width: "100px",
    height: "100px",
  };

  const coral2Style = {
    position: "absolute",
    bottom: "10px", // Adjust as needed
    right: "10px", // Adjust as needed
    transform: "rotate(0deg)", // No rotation
    width: "100px",
    height: "100px",
  };

  const starStyle = {
    position: "absolute",
    bottom: "10px", // Adjust as needed
    left: "10px", // Adjust as needed
    transform: "rotate(305deg)", // Adjust rotation as needed
    width: "100px",
    height: "100px",
  };

  return (
    <div className="App">
      {/* Display the Image and Label components */}
      <Image />
      <Label />

      {/* Adds seashell, coral, and star as decorations */}
      <img src="/icons/blueshell.png" alt="Seashell" className="seashell" style= {seashellStyle} />
      <img src="/icons/coral.png" alt="Coral1" className="coral" style={coralStyle}/>
      <img src="/icons/pixelcoral.png" alt="Coral2" className="coral2" style={coral2Style}/>
      <img src="/icons/star.png" alt="Star" className="star" style={starStyle}/>

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
