import React, { useState, useEffect } from 'react';
import Timecode from 'react-timecode';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(5 * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ fontSize: "1rem", fontWeight: "bold"}}>
      <Timecode time={duration - time} />
    </div>
  );
};

export default Timer;