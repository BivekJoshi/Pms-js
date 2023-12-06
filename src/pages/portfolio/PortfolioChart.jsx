import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useGetUserenPortfolio } from '../../hooks/portfolio/usePortfolio';

const PortfolioChart = ({ data }) => {
  const theme = useTheme();
  const { data: userPorfolioData, isLoading } = useGetUserenPortfolio();
  const mode = theme.palette.mode;
  const isDarkMode = mode === "dark";
  const sector = data && data.map((script) => script?.sector);
  const quantity = userPorfolioData && userPorfolioData.map((script) => script?.quantity);
  // console.log(data)
  const chartOptions = {
    chart: {
      width: 380,
      type: "donut",
      background: "transparent", // Set background to transparent
    },
    labels: sector,
     plotOptions: {
      pie: {
        dataLabels: {
          enabled: false, // Disable data labels if not needed
        },
        expandOnClick: true,
        stroke: {
          color: "transparent", // Set stroke to none
        },
      },
    },
    legend: {
      position: "bottom", 
    },
    theme: {
      mode: isDarkMode ? "dark" : "light",
    },
    colors: ["#04A4DC", "#94DCFC", "#B7BDC1"],
    responsive: [
      {
        breakpoint: 350,
        options: {
          chart: {
            width: 150,
          },
          legend: {
            position: "bottom",
            horizontalAlign: "center",
            itemMargin: {
              horizontal: 10,
              vertical: 5,
            },
          },
        },
      },
      {
        breakpoint: 500,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
            horizontalAlign: "center",
            itemMargin: {
              horizontal: 10,
              vertical: 5,
            },
          },
        },
      },
    ],
    donut: {
      size: "65%", // You can adjust the size of the hole
      labels: {
        show: true,
        name: {
          show: true,
        },
        value: {
          show: true,
        },
        total: {
          show: true,
        },
      },
    },
  };
  
  
  const chartData = {
    series: quantity,
    options: chartOptions,
  };
  
  return (
    <Box
      bgcolor={theme.palette.background.alt}
      sx={{
        padding: "1rem 2rem",
        borderRadius: "6px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
      id="pie"
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width={350}
      />
    </Box>
  );
};
export default PortfolioChart;
