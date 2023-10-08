import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import CustomTable from '../../components/customTable/CustomTable';

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ backgroundColor: theme.palette.neutral[900] }}
        >
          <Box>
            <Typography variant='h2'>Overview</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ backgroundColor: theme.palette.neutral[900] }}
        >
          <Box>ok</Box>
        </Grid>
      </Grid>
      <CustomTable />
    </Box>
  );
};

export default Dashboard;
