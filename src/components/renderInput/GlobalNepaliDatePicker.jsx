import React from "react";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { Typography, useTheme } from "@mui/material";

const GlobalNepaliDatePicker = ({ label, name, handleChange, value }) => {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="body2" sx={{ color: textColor }} gutterBottom>
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
    </div>
  );
};

export default GlobalNepaliDatePicker;
