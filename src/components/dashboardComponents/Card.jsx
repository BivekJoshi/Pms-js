import { Typography, useTheme } from "@mui/material";
import React from "react";

const Card = ({ title, price, gain, loss, tGain, tLoss, investment, date }) => {
  const theme = useTheme();

  const style = {
    color: theme.palette.tertiary[700],
    fontWeight: "700",
    lineHeight: "1.5rem",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "white",
        padding: "1.5rem  2rem",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "700", mb: "1rem" }}>
        {title}
      </Typography>
      <Typography variant="p">Rs. {price} (Total Share Capital)</Typography>
      <div>
        Day Gain :
        <Typography variant="p" sx={style}>
          {gain}
        </Typography>{" "}
      </div>
      <div sx={{ fontWeight: "400" }}>
        Day Loss:
        <Typography variant="p" sx={{ color: "red" }}>
          {loss}
        </Typography>
      </div>
      <div>
        Total Gain :
        <Typography variant="p" sx={style}>
          {tGain}
        </Typography>
      </div>
      <div sx={{ fontWeight: "400" }}>
        Total Loss :
        <Typography variant="p" sx={{ color: "red" }}>
          {tLoss}
        </Typography>
      </div>
      <div>
        Total Investment : <Typography variant="p"> {investment} </Typography>
      </div>
      <div>
        As of Tue : <Typography variant="p"> {date} </Typography>
      </div>
    </div>
  );
};

export default Card;
