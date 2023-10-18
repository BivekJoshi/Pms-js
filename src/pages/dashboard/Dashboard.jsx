import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import Card from '../../components/dashboardComponents/Card';
import CardInfo from '../../components/dashboardComponents/CardInfo';
import { barData, lineData } from './data';
import LineChartDash from '../../components/dashboardComponents/LineChart';
import BarChartDash from '../../components/dashboardComponents/BarChart';
import PieChartDash from '../../components/dashboardComponents/PieChart';
import BestPerformance from '../../components/dashboardComponents/BestPerformance';
import WorstPerformance from '../../components/dashboardComponents/WorstPerformance';

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4} lg={4} xl={4}>        
        <Card />
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
      <Grid item xs={12} md={12} lg={12} xl={12}>        
        <BestPerformance/>
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12}>        
        <WorstPerformance/>
      </Grid>
      <Grid item xs={12} md={4} lg={4} xl={4}>        
        <PieChartDash />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
