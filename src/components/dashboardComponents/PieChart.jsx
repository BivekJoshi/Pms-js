import { useState } from "react";
import ReactApexChart from "react-apexcharts";
// const data = [
//   {
//     name: "Commercial Bank",
//     value: 30,
//     color:"red"
//   },
//   {
//     name: "Hydropower",
//     value: 20,
//     color:"blue"
//   },
//   {
//     name: "Manufacturing",
//     value: 10,
//     color:"yellow"
//   },
//   {
//     name: "Debentures",
//     value: 2,
//     color:"green"
//   },
//   {
//     name: "Finance",
//     value: 5,
//     color:"pink"
//   },
//   {
//     name: "Life Insurance",
//     value: 33,
//     color:"purple"
//   },
// ];
const PieChartDash = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Hydropower', 'Manufacturing', 'Debentures', 'Finance', 'Life Insurance'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={380} />
  );
};

export default PieChartDash;
