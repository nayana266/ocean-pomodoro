import React, { useState, useEffect } from "react";
import "./style.css";

const Countdown = ({ duration, onFinish }) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    console.log("Countdown started with:", seconds);

    if (seconds <= 0) {
      console.log("Countdown finished");
      onFinish();
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onFinish]); // Depend on `seconds` to update properly

  // Format time as MM:SS
  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div className="countdown-container">
      <div className="countdown">{formatTime(seconds)}</div>
    </div>
  );
};

export default Countdown;
