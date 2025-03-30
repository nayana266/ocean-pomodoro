import React from 'react';
import './CountdownButton.css';

const CountdownButton = ({ toggleTimer, isRunning }) => {
    return (
        <button className="countdown-button" onClick={toggleTimer}>
          {isRunning ? 'Pause Countdown' : 'Start Countdown'} {/* Text changes based on timer state */}
        </button>
      );
  };

export default CountdownButton;