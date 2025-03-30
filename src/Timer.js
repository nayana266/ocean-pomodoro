import React, { useState, useEffect } from "react";
import "./Timer.css";
import gsap from 'gsap';

import Frame1 from './images/Frame1.png';
import Frame2 from './images/Frame2.png';
import Frame3 from './images/Frame3.png';
import Frame4 from './images/Frame4.png';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const frames = [Frame1, Frame2, Frame3, Frame4];

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) {
        setFrameIndex(3);
    } else if (timeLeft > 0 && timeLeft <= 3) {
        setFrameIndex(0);
    } else {
        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev === 1 ? 2 : 1));
        }, 1250);

        return() => clearInterval(interval);
    }
 }, [timeLeft]);


  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
    setFrameIndex(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="timer">
      <h1>{formatTime(timeLeft)}</h1>
      <img src={frames[frameIndex]} alt="Hourglass" className="hourglass" />
      <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;