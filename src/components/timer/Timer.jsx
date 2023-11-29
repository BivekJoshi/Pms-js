// import React, { useState, useEffect } from "react";
// import Timecode from "react-timecode";

// const Timer = (props) => {
//   const { reset } = props;
//   const [time, setTime] = useState(0);
//   const [duration] = useState(5 * 60 * 1000);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prevTime) => prevTime + 1000);
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []); // Run only once on mount

//   useEffect(() => {
//     if (reset) {
//       setTime(0);
//     }
//   }, [reset]); // eslint-disable-line
//   return (
//     <div
//       style={{
//         fontSize: "1rem",
//         fontWeight: "bold",
//         color: time > 240000 ? "#ff4b4b" : "",
//       }}
//     >
//       <Timecode time={duration - time} />
//     </div>
//   );
// };

// export default Timer;


import { Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import Timecode from "react-timecode";

const Timer = (props) => {
  const theme = useTheme();
  const { reset } = props;
  const [time, setTime] = useState(0);
  const [duration] = useState(5 * 60 * 1000);

  useEffect(() => {
    const storedTime = localStorage.getItem("timerValue");
    if (storedTime) {
      setTime(parseInt(storedTime, 10));
    } else {
      setTime(0);
    }
  }, []); // Run only once on mount

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1000;
        localStorage.setItem("timerValue", newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); // Run only once on mount

  useEffect(() => {
    if (reset) {
      setTime(0);
      localStorage.setItem("timerValue", "0");
    }
  }, [reset]);

if(time > 300000) {
  return  <Typography variant="p" style={{ color: theme.palette.text.main }}>Verification time expired! Please click on resend code to get new OTP</Typography>
} else 
  return (
    <div
      style={{
        fontSize: "1rem",
        fontWeight: "bold",
        color: time > 240000 ? "#ff4b4b" : "",
      }}
    >
      <Timecode time={Math.max(duration - time, 0)} />
    </div>
  );
};

export default Timer;
