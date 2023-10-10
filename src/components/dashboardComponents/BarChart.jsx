import { useTheme } from '@mui/material';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartDash = ({ data }) => {
  const theme = useTheme();

    return (
       <div style={{ padding: "2rem 0rem", background: theme.palette.background.light }}>
         <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Selling Price" fill="#8884d8" />
          <Bar dataKey="Cost Price" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
       </div>
    );
};

export default BarChartDash;