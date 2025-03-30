import React, { useState } from "react";
import "./style.css"; // Import your CSS styles
import { Label } from "./Label"; // Correct named import
import Image from "./Image"; // Import Image component
import Countdown from "./Countdown"; // Correct import for Countdown component
import Timer from "./Timer"; // Assuming you have a Timer component

function App() {
  const [start, setStart] = useState(false); // State to track the start button click
  const [countdownFinished, setCountdownFinished] = useState(false);

  const handleStartClick = () => {
    setStart(true);
  };

  const seashellStyle = {
    position: "absolute",
    top: "30px", // Adjust as needed
    left: "1000px", // Adjust as needed
    transform: "rotate(10deg)", 
    width: "300px",
    height: "300px",
  };

  const coralStyle = {
    position: "absolute",
    top: "23%", // Adjust as needed
    left: "200px", // Adjust as needed
    transform: "rotate(-10deg)", // Adjust rotation as needed
    width: "200px",
    height: "200px",
  };

  const coral2Style = {
    position: "absolute",
    top: "410px", // Adjust as needed
    left: "1150px", // Adjust as needed
    transform: "rotate(-5deg)", 
    width: "180px",
    height: "180px",
  };

  const starStyle = {
    position: "absolute",
    top: "410px", // Adjust as needed
    left: "250px", // Adjust as needed
    transform: "rotate(7deg)", // Adjust rotation as needed
    width: "300px",
    height: "300px",
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

      {/* Conditionally render the Timer component if the start state is true */}
      {start ? (
        <Timer />
      ) : (
        <button className="start-button" onClick={handleStartClick}>
          Start
        </button>
      )}

      {/* Debugging - Check if Countdown component is rendering */}
      {start && !countdownFinished && (
        <>
          {console.log("Rendering Countdown component")}
          <Countdown duration={1500} onFinish={() => setCountdownFinished(true)} />
        </>
      )}

      {/* Conditionally render message after countdown finishes */}
      {countdownFinished && <div>Countdown Finished!</div>}
    </div>
  );
}

export default App;
