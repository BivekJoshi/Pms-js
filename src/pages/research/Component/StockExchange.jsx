import { Chip, Grid, Typography, useTheme } from "@mui/material";
import Chart from "react-apexcharts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";
import "../Component/Style.css"

const StockExchange = ({height}) =>  {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const isDarkMode = mode === 'dark';

  const chartOptions = {
      chart: {
        type: "area",
        height:height ? height :350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      // title: {
      //   text: "Fundamental Analysis of Stocks",
      //   align: "left",
      // },
      subtitle: {
        text: "Price Movements",
        align: "right",
        style: {
          color: isDarkMode ? theme.palette.text.main : 'black',
        },
      },
      // labels: series.monthDataSeries1.dates,
      yaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: [isDarkMode ? theme.palette.text.main : 'black'],
          },
        },
      },
      xaxis: {
        opposite: true,
        labels: {
          style: {
            colors: [
              isDarkMode ? theme.palette.text.main : 'black',
              isDarkMode ? theme.palette.text.main : 'black',
              isDarkMode ? theme.palette.text.main : 'black',
              isDarkMode ? theme.palette.text.main : 'black',
              isDarkMode ? theme.palette.text.main : 'black',
              isDarkMode ? theme.palette.text.main : 'black',
              isDarkMode ? theme.palette.text.main : 'black',
              isDarkMode ? theme.palette.text.main : 'black',
              isDarkMode ? theme.palette.text.main : 'black',
            ],
          },
        },
      },
      legend: {
        horizontalAlign: "left",
      },
    
  };
  const chartData = {
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }
   
  ],
  options: chartOptions,
}
  
  return (
    <div style={{ background: theme.palette.background.alt, padding: "16px", width:"100%" }}>
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
          <Chip label="success" color="success" sx={{ height: "20px" }} />
        </Grid>
      </Grid>
      <div id="chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={height ? height :350}
        />
      </div>
    </div>
  );
}

export default StockExchange;
