import { Typography } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartDash = ({ data }) => {
  return (
   <>
   <Typography variant="h4" style={{ marginBottom: "0.3rem"}}>Recent Holding Chart</Typography>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <text x={150} y={10} textAnchor="middle" fontSize="20">
          Recent holding chart
        </text> */}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    </>
  );
};

export default LineChartDash;