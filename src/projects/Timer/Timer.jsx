import React, { useState, useEffect } from "react";
import "./Timer.css"; // Import your CSS file

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let timeInterval;
    if (isActive) {
      timeInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1); // Update the interval to 1000 milliseconds (1 second)
    } else {
      clearInterval(timeInterval);
    }
    return () => {
      clearInterval(timeInterval);
    };
  }, [isActive]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  const handleStart = () => {
    setIsActive(true);
  };
  const handleStop = () => {
    setIsActive(false);
  };
  const handleReset = () => {
    setTimer(0);
    setIsActive(false);
  };
  return (
    <div className="timer-container">
      <h1>Timer: {formatTime(timer)}</h1>
      <div>
        {!isActive ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}>Stop</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
