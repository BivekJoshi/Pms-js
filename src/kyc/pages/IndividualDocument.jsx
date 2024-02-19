import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const IndividualDocument = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ backgroundColor: "#fff", padding: "16px", borderRadius: "6px" }}
    >
      <Grid item>
        <Typography variant="h4">Document Upload</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained">+ Add</Button>
      </Grid>
    </Grid>
  );
};

export default IndividualDocument;
