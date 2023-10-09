import { Typography, useTheme } from "@mui/material";
import React from "react";

const Card = ({ data }) => {
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
        {data?.title}
      </Typography>
      <Typography variant="p">Rs. {data?.price} (Total Share Capital)</Typography>
      <div>
        Day Gain :
        <Typography variant="p" sx={style}>
          {data?.gain}
        </Typography>{" "}
      </div>
      <div sx={{ fontWeight: "400" }}>
        Day Loss:
        <Typography variant="p" sx={{ color: "red" }}>
          {data?.loss}
        </Typography>
      </div>
      <div>
        Total Gain :
        <Typography variant="p" sx={style}>
          {data?.tGain}
        </Typography>
      </div>
      <div sx={{ fontWeight: "400" }}>
        Total Loss :
        <Typography variant="p" sx={{ color: "red" }}>
          {data?.tLoss}
        </Typography>
      </div>
      <div>
        Total Investment : <Typography variant="p"> {data?.investment} </Typography>
      </div>
      <div>
        As of Tue : <Typography variant="p"> {data?.date} </Typography>
      </div>
    </div>
  );
};

export default Card;
