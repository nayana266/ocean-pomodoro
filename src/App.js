import React, { useState } from "react";
import "./style.css"; // Import your CSS styles
import { Label } from "./Label"; // Correct named import
import Image from "./Image"; // Import Image component
import Countdown from "./Countdown"; // Correct import for Countdown component
import Timer from "./Timer"; // Assuming you have a Timer component

function App() {
  const [start, setStart] = useState(false); // State to track the start button click
  const [countdownFinished, setCountdownFinished] = useState(false); // Track when countdown finishes

  const handleStartClick = () => {
    console.log("Start button clicked!");
    setStart(true); // Start the countdown when the button is clicked
  };

  return (
    <div className="App">
      {/* Display the Image and Label components */}
      <Image />
      <Label />

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
