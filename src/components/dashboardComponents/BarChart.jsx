import { Box, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const BarChartDash = ({ data }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      padding={2}
      borderRadius={'6px'}
      color={theme.palette.text.main}
      bgcolor={theme.palette.background.alt}
    >
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={t("Selling Price")} fill='#8884d8' />
          <Bar dataKey={t("Cost Price")} fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BarChartDash;
