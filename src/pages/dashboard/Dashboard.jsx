import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import CardInfo from '../../components/dashboardComponents/CardInfo';
import { barData, lineData } from './data';
import LineChartDash from '../../components/dashboardComponents/LineChart';
import BarChartDash from '../../components/dashboardComponents/BarChart';
import DashboardIndexCard from '../../components/dashboardComponents/DashboardIndexCard';

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4} lg={4} xl={4}>
        <DashboardIndexCard />
      </Grid>
      <Grid item xs={12} md={8} lg={8} xl={8}>
        <LineChartDash data={lineData} />
      </Grid>
      <Grid item xs={12} md={5} lg={5} xl={5}>
        <CardInfo />
      </Grid>
      <Grid item xs={12} md={7} lg={7} xl={7}>
        <BarChartDash data={barData} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
