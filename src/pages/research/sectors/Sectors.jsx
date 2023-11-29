import React, { useEffect, useState } from "react";
import { Box, Grid, useTheme } from "@mui/material";
import {
  researchSectorNewsData,
  researchSectorPerformanceData,
} from "../researchData";
import SectorTable from "../../../components/researchTable/SectorTable";
import MarketTreeMap from "../Component/MarketTreeMap";
import SectorTreeMap from "../../../components/researchTable/SectorTreeMap";

const Sectors = () => {
  return (
    <>
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
