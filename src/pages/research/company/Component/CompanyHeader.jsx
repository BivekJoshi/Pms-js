import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const CompanyHeader = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.background.alt}
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
        padding: "1rem 1rem",
        borderRadius: "6px",
      }}
    >
      <Typography variant="h5">
        {/* <b> */}
        Nabil Bank Limited
        <br />
        Nepse : NABIL : Financials, Bank
        {/* </b> */}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
         <Grid item xs={4}></Grid>
         <Grid item xs={4}></Grid>
         <Grid item xs={4}></Grid>
      </Grid>
    </Box>
  );
};

export default CompanyHeader;
