import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const LineChartDash = ({ data }) => {
  const theme = useTheme();

  return (
    <Box
      color={theme.palette.text.main}
      bgcolor={theme.palette.background.alt}
      sx={{
        padding: '1rem 2rem',
        borderRadius: '6px',
      }}
    >
      {/* total share capital total investment */}
      <div style={{ marginBottom: '0.6rem' }}>
        <Typography variant='h4'>Recent Holding Chart</Typography>
      </div>
      <ResponsiveContainer width='100%' height={200}>
        <LineChart
          data={data}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          {/* <text x={150} y={10} textAnchor="middle" fontSize="20">
          Recent holding chart
        </text> */}
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='Total share capital'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='Total investment' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LineChartDash;
