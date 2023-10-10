import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import Card from '../../components/dashboardComponents/Card';
import CardInfo from '../../components/dashboardComponents/CardInfo';
import { barData, lineData, summaryData } from './data';
import LineChartDash from '../../components/dashboardComponents/LineChart';
import BarChartDash from '../../components/dashboardComponents/BarChart';

const Dashboard = () => {
  const theme = useTheme();

  return (
  <>
  <Box sx={{  paddingX: 3, paddingTop: "1rem" }}>
    <Grid container spacing={4}>
    <Grid item xs={12} md={4} lg={4} xl={5}> <Card data={summaryData} /> </Grid>
    <Grid item xs={12} md={8} lg={8} xl={7}> <LineChartDash data={lineData} /> </Grid>
    <Grid item xs={12} md={5} lg={5} xl={5}> <CardInfo /> </Grid>
    <Grid item xs={12} md={7} lg={7} xl={7}> <BarChartDash data={barData} /> </Grid>
    </Grid>
    </Box>
    </>
  );
};

export default Dashboard;
