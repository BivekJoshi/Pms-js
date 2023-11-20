import React from "react";
import { Grid, useTheme } from "@mui/material";
import SelectorPerformance from "./Component/SelectorPerformance";
import MarketNews from "./Component/MarketNews";
import TopGainers from "./Component/TopGainers";
import StockExchange from "./Component/StockExchange";


const Research = () => {
  const theme = useTheme();

  return (
    <Grid
      display="grid"
      gridTemplateColumns="2fr 3fr"
      gap="32px"
      p="32px 16px"
      rowGap="32px"
    >
      <SelectorPerformance />
      <MarketNews />
      <TopGainers />
      <StockExchange/>
    </Grid>
  );
};

export default Research;
