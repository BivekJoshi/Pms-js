import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import Card from '../../components/dashboardComponents/Card';
import CardInfo from '../../components/dashboardComponents/CardInfo';

const Dashboard = () => {
  const theme = useTheme();
  return (
  <Box sx={{ background: theme.palette.background.main, paddingX: 3, paddingTop: "1rem" }}>
    <Grid container spacing={4}>
    <Grid item xs={12} md={4} lg={4}> <Card title="Summary" price="43764375" gain="34783783578" loss="467436743" tGain="43784387" tLoss="3784378" investment="3478437" date="2023-10-10" /> </Grid>
    <Grid item xs={12} md={8} lg={8}> Hello </Grid>
    <Grid item xs={12} md={5} lg={5}> <CardInfo /> </Grid>
    <Grid item xs={12} md={7} lg={7}> Hello </Grid>
    </Grid>
    </Box>
  );
};

export default Dashboard;
