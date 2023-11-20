import React from "react";
import { Grid, useTheme } from "@mui/material";
import SelectorPerformance from "./Component/SelectorPerformance";
import MarketNews from "./Component/MarketNews";
import TopGainers from "./Component/TopGainers";
import StockExchange from "./Component/StockExchange";


const Research = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <SelectorPerformance />
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <MarketNews />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <TopGainers />
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <StockExchange />
      </Grid>
    </Grid>
  );
};

export default Research;
