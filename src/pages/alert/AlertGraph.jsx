import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { companyData as chartData } from "../dashboard/data";

const AlertGraph = () => {
  return (
    <ResponsiveContainer width="100%">
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Pvalue"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Mvalue" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AlertGraph;
