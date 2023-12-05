import { Grid, useTheme } from "@mui/material";
import React from "react";
import CardInfo from "../../components/dashboardComponents/CardInfo";
import {
  barData,
  lineData,
  bestPerformanceData,
  worstPerformanceData,
} from "./dashBoardItems";
import LineChartDash from "../../components/dashboardComponents/LineChart";
import BarChartDash from "../../components/dashboardComponents/BarChart";
import DashboardIndexCard from "../../components/dashboardComponents/DashboardIndexCard";
import PerformanceTable from "../../components/dashboardComponents/PerformanceTable";
import PieChartDash from "../../components/dashboardComponents/PieChart";
import DevelopmentPage from "../DevlopmentPage/DevlopmentPage"
const Dashboard = () => {
  return (
    // <Grid container spacing={4}>
    //   <Grid item xs={12} md={4} lg={4} xl={4}>
    //     <DashboardIndexCard />
    //   </Grid>
    //   <Grid item xs={12} md={8} lg={8} xl={8}>
    //     <LineChartDash lineData={lineData} />
    //   </Grid>
    //   <Grid item xs={12} md={5} lg={5} xl={5}>
    //     <CardInfo title={"Realized"} />
    //   </Grid>
    //   <Grid item xs={12} md={7} lg={7} xl={7}>
    //     <BarChartDash data={barData} />
    //   </Grid>
    //   <Grid item xs={12} md={5} lg={5} xl={5}>
    //     <CardInfo title={"Unrealized"} />
    //   </Grid>
    //   <Grid item xs={12} md={7} lg={7} xl={7}>
    //     <BarChartDash data={barData} />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <PerformanceTable title="Best Performance" data={bestPerformanceData} />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <PerformanceTable
    //       title="Worst Performance"
    //       data={worstPerformanceData}
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <PerformanceTable
    //       title="Worst Performance"
    //       data={worstPerformanceData}
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <BarChartDash data={barData} />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <PerformanceTable
    //       title="Worst Performance"
    //       data={worstPerformanceData}
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <BarChartDash data={barData} />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <PerformanceTable
    //       title="Worst Performance"
    //       data={worstPerformanceData}
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <PieChartDash />
    //   </Grid>
    // </Grid>
    <DevelopmentPage/>
  );
};

export default Dashboard;
