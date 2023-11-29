import { useTheme } from "@mui/material";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const MarketTreeMap = () => {
  const theme = useTheme();
  const [state] = useState({
    series: [
      {
        data: [
          {
            x: "New Delhi",
            y: 218,
          },
          {
            x: "Kolkat",
            y: 149,
          },
          {
            x: "Mumbai",
            y: 184,
          },
          {
            x: "Ahmedabad",
            y: 55,
          },
          {
            x: "Bangaluru",
            y: 84,
          },
          {
            x: "Pune",
            y: 31,
          },
          {
            x: "Chennai",
            y: 70,
          },
          {
            x: "Jaipur",
            y: 30,
          },
          {
            x: "Surat",
            y: 44,
          },
          {
            x: "Hyderabad",
            y: 68,
          },
          {
            x: "Lucknow",
            y: 28,
          },
          {
            x: "Indore",
            y: 19,
          },
          {
            x: "Kanpur",
            y: 29,
          },
        ],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        height: 350,
        type: "treemap",
        toolbar: { show: false },
      },
      //   title: {
      //     text: "Distibuted Treemap (different color for each cell)",
      //     align: "center",
      //   },
      colors: [
        "#3B93A5",
        "#F7B844",
        "#ADD8C7",
        "#EC3C65",
        "#CDD7B6",
        "#C1F666",
        "#D43F97",
        "#1E5D8C",
        "#421243",
        "#7F94B0",
        "#EF6537",
        "#C0ADDB",
      ],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
        },
        formatter: function (text, op) {
          return [text, op.value];
        },
        offsetY: -4,
      },
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false,
        },
      },
    },
  });
  return (
      <div style={{ background: theme.palette.background.alt}}>
        <ReactApexChart
        options={state.options}
        series={state.series}
        type="treemap"
        height={350}
        width="100%"
      />
      </div>
  );
};

export default MarketTreeMap;
