import { Box, useTheme } from '@mui/material';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// import { useTranslation } from "react-i18next";
import './ApexCHart.css';

const LineChartDash = ({ lineData, height }) => {
  const theme = useTheme();
  // const { t } = useTranslation();
  const mode = theme.palette.mode;
  const isDarkMode = mode === 'dark';
  const names = lineData?.map((line) => line.name);
  const Total_Share_Capital = lineData?.map((line) => line.Total_Share_Capital);
  const Total_Investment = lineData?.map((line) => line.Total_Investment);

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: 'black',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.9,
        background: 'red',
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#82ca9d', '#2e2d4a'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    title: {
      text: 'Investment Performance',
      align: 'left',
      style: {
        // color: mode === "dark" ? "black" : theme.palette.text.alt,
        color: isDarkMode ? theme.palette.text.alt : 'black',
      },
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: names,
      title: {
        text: 'Total Share Capital',
        style: {
          color: isDarkMode ? theme.palette.text.alt : 'black',
        },
      },
      labels: {
        style: {
          colors: [
            isDarkMode ? theme.palette.text.alt : 'black',
            isDarkMode ? theme.palette.text.alt : 'black',
            isDarkMode ? theme.palette.text.alt : 'black',
            isDarkMode ? theme.palette.text.alt : 'black',
            isDarkMode ? theme.palette.text.alt : 'black',
            isDarkMode ? theme.palette.text.alt : 'black',
            isDarkMode ? theme.palette.text.alt : 'black',
            isDarkMode ? theme.palette.text.alt : 'black',
            isDarkMode ? theme.palette.text.alt : 'black',
          ],
        },
      },
    },
    yaxis: {
      title: {
        text: 'Total Investment',
        style: {
          color: isDarkMode ? theme.palette.text.alt : 'black',
        },
      },
      min: 0,
      max: 11000,
      tickAmount: 4,
      labels: {
        style: {
          colors: [isDarkMode ? theme.palette.text.alt : 'black'],
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
      labels: {
        colors: [
          isDarkMode ? theme.palette.text.alt : 'black',
          isDarkMode ? theme.palette.text.alt : 'black',
        ],
      },
    },
  };
  const chartData = {
    series: [
      {
        name: 'Total Share Capital',
        data: Total_Share_Capital,
      },
      {
        name: 'Total Investment',
        data: Total_Investment,
      },
    ],
    options: chartOptions,
  };

  return (
    <Box
      color={theme.palette.text.main}
      bgcolor={theme.palette.background.alt}
      sx={{
        padding: '1rem 2rem',
        borderRadius: '6px',
      }}
    >
      {/* <div style={{ marginBottom: "0.6rem" }}>
        <Typography variant="h4">{t("Investment Performance")}</Typography>
      </div> */}
      <div id='chart'>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type='line'
          height={height ? height : 250}
          // style={{"& apexcharts-text, & apexcharts-yaxis-label":{
          //   color: "white",
          // } }}
        />
      </div>
    </Box>
  );
};

export default LineChartDash;
