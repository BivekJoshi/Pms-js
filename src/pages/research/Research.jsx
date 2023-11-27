import { Grid } from '@mui/material';
import SelectorPerformance from './Component/SelectorPerformance';
import MarketNews from './Component/MarketNews';
import TopGainers from './Component/TopGainers';
import StockExchange from './Component/StockExchange';
import TopLoseers from './Component/TopLoseers';
import MarketTreeMap from './Component/MarketTreeMap';

const Research = () => {
  return (
    <div>
      <Grid
        display='grid'
        gridTemplateColumns='2fr 3fr'
        gap='32px'
        p='32px 16px'
        rowGap='32px'
      >
        <SelectorPerformance />
        <MarketNews />
        <TopGainers />
        <StockExchange />
        <TopLoseers />
        <MarketTreeMap />
      </Grid>
      <Grid
        display='grid'
        gridTemplateColumns='2fr 2fr'
        gap='32px'
        p='0 16px 32px'
      >
        <TopGainers />
        <TopLoseers />
      </Grid>
      <TopGainers />
    </div>
  );
};

export default Research;
