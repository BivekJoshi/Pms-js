import { Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const CButton = ({
  title,
  color,
  bgcolor,
  padding,
  textAlign,
  flexDirextion,
  flex,
  gap,
  margin,
  variant,
  maxWidth,
}) => {
  const theme = useTheme();
  const buttonStyle = {
    padding: padding || "1rem",
    backgroundColor: bgcolor || theme.palette.background.alt,
    textAlign: textAlign || "center",
    
  };

  const gridStyle = {
    display: flex || "flex",
    flexDirection: flexDirextion || "row",
    gap: gap || "none",
    margin: margin || "0rem",
    maxWidth: maxWidth || "fit-content",
  };

  const typographyStyle = {
    color: color || theme.palette.text.main,
  };

  return (
    <Grid container style={gridStyle}>
      <Button style={buttonStyle}>
        <Typography variant="h6" style={typographyStyle}>
          {title}
        </Typography>
      </Button>
    </Grid>
  );
};

export default CButton;
