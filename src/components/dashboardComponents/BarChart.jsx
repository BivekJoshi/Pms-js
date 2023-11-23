import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

const BarChartDash = ({ data }) => {
  const theme = useTheme()
  const { t } = useTranslation();

  const SellingPrice = data.map((xaxisData) => xaxisData.Selling_Price);
  const CostPrice = data.map((xaxisData) => xaxisData.Cost_Price);
  const Name = data.map((xaxisData) => xaxisData.name);

  const [chartData] = useState({
    series: [
      {
        name: "Selling Price",
        data: SellingPrice,
      },
      {
        name: "Cost Price",
        data: CostPrice,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: false, // Swap to false to make it vertical
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: Name},

      yaxis: {
        categories: Name, // Swap with xaxis
      },
    },
  });

  return (
    <Box
      padding={2}
      borderRadius={"6px"}
      color={theme.palette.text.main}
      bgcolor={theme.palette.background.alt}
      id="chart"
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={250}
      />
    </Box>
  );
};

export default BarChartDash;
