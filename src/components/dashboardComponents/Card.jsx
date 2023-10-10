import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Card = ({ data }) => {
  const theme = useTheme();

  const style = {
    color: theme.palette.text.light,
    fontWeight: "500",
    lineHeight: "1.5rem",
  };

  return (
    <>
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        background: theme.palette.background.main,
        padding: "1.5rem  2rem",
      }}
    >
      <Typography variant="h2" style={{ color: theme.palette.text.light, fontWeight: "800", marginBottom: "1rem" }}>
        {data?.title}
      </Typography>
      <Typography variant="p" style={style}>
        Rs. {data?.price} (Total Share Capital)
      </Typography>
      <Box sx={style}>
        Day Gain :<Typography variant="p">{data?.gain}</Typography>
      </Box>
      <Box sx={style}>
        Day Loss:
        <Typography variant="p" sx={{ color: "red" }}>
          {data?.loss}
        </Typography>
      </Box>
      <Box sx={style}>
        Total Gain :
        <Typography variant="p" sx={style}>
          {data?.tGain}
        </Typography>
      </Box>
      <Box sx={style}>
        Total Loss :
        <Typography variant="p" sx={{ color: "red" }}>
          {data?.tLoss}
        </Typography>
      </Box>
      <Box sx={style}>
        Total Investment :{" "}
        <Typography variant="p"> {data?.investment} </Typography>
      </Box>
      <Box sx={style}>
        As of Tue : <Typography variant="p"> {data?.date} </Typography>
      </Box>
    </Box>
  </>
  );
};

export default Card;
