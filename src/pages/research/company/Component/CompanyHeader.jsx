import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const CompanyHeader = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.background.alt}
      style={{
        // marginBottom: "1rem",
        padding: "2rem",
        borderRadius: "6px",
      }}
    >
      <Typography variant="h4">
        <b>
          Nabil Bank Limited
          <br />
          Nepse : NABIL : Financials, Bank
        </b>
      </Typography>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Last Price (NPR) :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Todays Change :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Last Traded :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                NEPSE Status :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Bid /Size{" "}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5"> Rs 789.00</Typography>
              <Typography variant="h5"> Down Rs 50 (0.82%)</Typography>
              <Typography variant="h5"> 11:10 Am, 14 Aug 22</Typography>
              <Typography variant="h5"> Open</Typography>
              <Typography variant="h5"> Rs 785 /150</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Offer /Size :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Volume :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Traders :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Value :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Open :{" "}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5"> Rs 180 /1,478</Typography>
              <Typography variant="h5"> 1,687,870</Typography>
              <Typography variant="h5"> 196,565</Typography>
              <Typography variant="h5"> 5,00,000</Typography>
              <Typography variant="h5"> Rs 795</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                High :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Low :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Previous Close :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                52 Week High :
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                52 Week Low :
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5"> Rs 800</Typography>
              <Typography variant="h5"> Rs 789</Typography>
              <Typography variant="h5"> Rs 723</Typography>
              <Typography variant="h5"> Rs 789</Typography>
              <Typography variant="h5"> Rs 789</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        {/* Hello */}
      </Grid>
    </Box>
  );
};

export default CompanyHeader;
