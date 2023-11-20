import { Chip, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


function StockExchange() {
  const theme = useTheme();

  const data = [
    {
      uv: 4000,
      amt: 0.0,
    },
    {
      uv: 3000,
      amt: 2210,
    },
    {
      uv: 2000,
      amt: 2290,
    },
    {
      uv: 2780,
      amt: 2000,
    },
    {
      uv: 1890,
      amt: 2181,
    },
    {
      uv: 2390,
      amt: 2500,
    },
    {
      uv: 3490,
      amt: 2100,
    },
  ];

  const yMin = 0;
  const yMax = 6000;

  const yTickInterval = 1000;
  const yTicks = [];
  for (let value = yMin; value <= yMax; value += yTickInterval) {
    yTicks.push(value);
  }
  return (
    <div style={{ background: theme.palette.background.alt, padding: "16px" }}>
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="0 1.5rem 1.5rem"
        alignItems="flex-end"
      >
        <Grid>
          <Typography variant="h5" fontWeight="500">
            NEPAL STOCK EXCHANGE
          </Typography>
          <Typography variant="h6" fontWeight="500">
            Volume 30.43B
          </Typography>
        </Grid>
        <Grid display="flex" flexDirection="row">
          <CalendarMonthIcon width="18px" height="18px" />
          <Typography pr="10px">Oct 30 11:09 Am</Typography>
          <Chip label="success" color="success" sx={{height:"20px", }}/>
        </Grid>
      </Grid>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#54C5FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#54C5FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis domain={[yMin, yMax]} ticks={yTicks} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#54C5FF"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockExchange;
