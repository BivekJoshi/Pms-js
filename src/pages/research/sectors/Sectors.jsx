import React, { useEffect, useState } from "react";
import { Autocomplete, Box, Grid, TextField, Typography, useTheme } from "@mui/material";
import {
  researchSectorNewsData,
  researchSectorPerformanceData,
} from "../researchData";
import SectorTable from "../../../components/researchTable/SectorTable";
import SectorTreeMap from "../../../components/researchTable/SectorTreeMap";

const top100Films = [
  { label: 'Hydro'},
  { label: 'Manufacturing'},
  { label: 'Commercial Banks'},
  { label: 'Hotel & Tourism'},
  { label: 'Non-Life Insurance'},
  { label: 'Investment'},
  { label: 'Development Bank Limited'},
  { label: 'Life Insurance'},
];

const Sectors = () => {
  const theme = useTheme();
  return (
    <>
      <Grid
      p={2}
      my={2}
        sx={{
          background: theme.palette.background.alt,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        
        }}
      >
        <Typography variant="h5">Choose Sectors</Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="--Choose Sector--" />}
        />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <SectorTable
            title="Sector Performance"
            data={researchSectorPerformanceData}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <SectorTable
            title="Hydro News & Announcement"
            data={researchSectorNewsData}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} marginTop={2}>
        <Box>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SectorTable
              title="Top Gainers"
              data={researchSectorPerformanceData}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SectorTable
              title="Top Loosers"
              data={researchSectorPerformanceData}
            />
          </Grid>
        </Box>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          <SectorTreeMap />
        </Grid>
      </Grid>
    </>
  );
};

export default Sectors;
