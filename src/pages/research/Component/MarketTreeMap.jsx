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
            x: "Commercial Banks",
            y: 218,
          },
          {
            x: "Corporate Debenture",
            y: 149,
          },
          {
            x: "Development Banks",
            y: 184,
          },
          {
            x: "Finance",
            y: 55,
          },
          {
            x: "Bangaluru",
            y: 84,
          },
          {
            x: "Hotels And Tourism",
            y: 31,
          },
          {
            x: "Hydro Power",
            y: 70,
          },
          {
            x: "Investment",
            y: 30,
          },
          {
            x: "Life Insurance",
            y: 44,
          },
          {
            x: "Manufacturing And Processing",
            y: 68,
          },
          {
            x: "Microfinance",
            y: 28,
          },
          {
            x: "Mutual Fund",
            y: 19,
          },
          {
            x: "Non Life Insurance",
            y: 29,
          },
          {
            x: "Promoter Share",
            y: 29,
          },
          {
            x: "Trading",
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
    <div style={{ background: theme.palette.background.alt }}>
      <div style={{ marginLeft: "1rem" }}>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="treemap"
          height={350}
          width="100%"
        />
      </div>
    </div>
  );
};

export default MarketTreeMap;
