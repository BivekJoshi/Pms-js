import { colors } from "@mui/material";
import React from "react";
import { Cell, Pie, PieChart } from "recharts";
const data = [
  {
    name: "Commercial Bank",
    value: 30,
    color:"red"
  },
  {
    name: "Hydropower",
    value: 20,
    color:"blue"
  },
  {
    name: "Manufacturing",
    value: 10,
    color:"yellow"
  },
  {
    name: "Debentures",
    value: 2,
    color:"green"
  },
  {
    name: "Finance",
    value: 5,
    color:"pink"
  },
  {
    name: "Life Insurance",
    value: 33,
    color:"purple"
  },
];
const PieChartDash = () => {
  return (
    <PieChart width={730} height={250}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
        {data.map((entry, index) => (
          <Cell key={entry?.name} fill={entry?.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartDash;
