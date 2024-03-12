import React from "react";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const GlobalNepaliDatePicker = ({
  label,
  name,
  handleChange,
  value,
  sm,
  md,
}) => {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <Box
      // item
      // md={md}
      // sm={sm}
      // style={{ display: "flex", flexDirection: "column", }}
    >
      <Typography
        variant="body2"
        sx={{ color: textColor }}
        textAlign="left"
        gutterBottom
      >
        {label}
      </Typography>
      <NepaliDatePicker
        inputClassName={`global-datepicker-input ${
          theme.palette.mode === "dark" ? "text-white" : "text-black"
        }`}
        name={name}
        value={value}
        onChange={handleChange}
        options={{ calenderLocale: "ne", valueLocale: "en" }}
      />
    </Box>
  );
};

export default GlobalNepaliDatePicker;
