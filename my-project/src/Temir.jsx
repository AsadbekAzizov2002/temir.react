import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className=" bg-stone-600 w-full h-[100vh] flex items-center justify-center flex-col space-y-3">
      
      <span className=" text-white text-[20px] font-bold  w-[240px] h-[60px] bg-stone-800 text-center flex justify-center items-center rounded-md ">
      <h1 >Timer: 
      <h1>
      {seconds}</h1>

      </h1>
      </span>
      <span className=" space-x-2">
      <button className=" bg-slate-700 text-white w-[120px] h-[60px] rounded-md font-medium text-[20px]" onClick={handleStartStop}>{isActive ? 'Stop' : 'Start'}</button>
      <button className=" bg-slate-700 text-white w-[120px] h-[60px] rounded-md font-medium text-[20px]" onClick={handleReset}>Reset</button>
      </span>
    </div>
  );
};

export default Timer;
