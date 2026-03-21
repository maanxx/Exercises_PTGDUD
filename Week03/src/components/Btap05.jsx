import React, { useState, useRef } from "react";

function Btap05() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const handleAddLap = () => {
    inputRef.current.focus();
  };
  const handleStart = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };
  return (
    <>
      <input ref={inputRef} placeholder="Lap Name" />
      <button onClick={handleAddLap}>Add Lap</button>
      <h1>{time} ms</h1>
      <div>
        <button onClick={handleStart}>
          Start
        </button>
        <button onClick={handlePause}>
          Pause
        </button>
        <button  onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Btap05;
