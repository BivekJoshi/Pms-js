import React, { useState, useEffect } from "react";
import Timecode from "react-timecode";

const Timer = (props) => {
  const { reset } = props;
  const [time, setTime] = useState(0);
  const [duration] = useState(1 * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1000);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time, reset]);

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
        color: time > 60 ? "#ff4b4b" : "",
      }}
    >
      <Timecode time={duration - time} />
    </div>
  );
};

export default Timer;
