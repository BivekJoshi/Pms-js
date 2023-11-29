import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChartDash = () => {
  const theme = useTheme();
  // const { t } = useTranslation();
  const mode = theme.palette.mode;
  const isDarkMode = mode === "dark";

  const chartOptions = {
    chart: {
      width: 350,
      type: "pie",
      background: "transparent", // Set background to transparent
    },
    labels: [
      "Hydropower",
      "Manufacturing",
      "Debentures",
      "Finance",
      "Life Insurance",
      "Commercial Bank",
    ],
     plotOptions: {
      pie: {
        dataLabels: {
          enabled: false, // Disable data labels if not needed
        },
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
    colors: ["#04A4DC", "#94DCFC", "#B7BDC1", "#FBBD00", "#9C6C5A", "#06A8F5"],
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
  };
  const chartData = {
    series: [44, 55, 13, 43, 22, 50],
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
export default PieChartDash;
