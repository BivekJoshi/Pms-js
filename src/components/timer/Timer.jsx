import React, { useState, useEffect } from "react";
import Timecode from "react-timecode";

const Timer = (props) => {
  const { reset } = props;
  const [time, setTime] = useState(0);
  const [duration] = useState(5 * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1000);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []); // Run only once on mount

  useEffect(() => {
    if (reset) {
      setTime(0);
    }
  }, [reset]); // eslint-disable-line
  return (
    <div
      style={{
        fontSize: "1rem",
        fontWeight: "bold",
        color: time > 24000 ? "#ff4b4b" : "",
      }}
    >
      <Timecode time={duration - time} />
    </div>
  );
};

export default Timer;
