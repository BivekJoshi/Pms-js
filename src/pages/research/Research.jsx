import { Grid } from "@mui/material";
import SelectorPerformance from "./Component/SelectorPerformance";
import MarketNews from "./Component/MarketNews";
import TopGainers from "./Component/TopGainers";
import StockExchange from "./Component/StockExchange";
import TopLoseers from "./Component/TopLoseers";
import MarketTreeMap from "./Component/MarketTreeMap";

const Research = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={5} lg={5} xl={5}>
        <SelectorPerformance />
      </Grid>
      <Grid item xs={12} md={7} lg={7} xl={7}>
        <MarketNews />
      </Grid>
      <Grid item xs={12} md={5} lg={5} xl={5}>
        <TopGainers />
      </Grid>
      <Grid item xs={12} md={7} lg={7} xl={7}>
        <StockExchange />
      </Grid>
      <Grid item xs={12} md={5} lg={5} xl={5}>
        <TopLoseers />
      </Grid>
      <Grid item xs={12} md={7} lg={7} xl={7}>
        <MarketTreeMap />
      </Grid>
      <Grid item xs={12} md={6}>
        <TopGainers />
      </Grid>
      <Grid item xs={12} md={6}>
        <TopLoseers />
      </Grid>
      <Grid item xs={12}>
        <TopGainers />
      </Grid>
    </Grid>
  );
};

export default Research;
