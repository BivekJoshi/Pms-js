import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <Box
      color={theme.palette.text.main}
      bgcolor={theme.palette.background.alt}
      sx={{
        padding: '1rem 2rem',
        borderRadius: '6px',
      }}
    >
      <div style={{ marginBottom: '0.6rem' }}>
        <Typography variant='h4'>{t("Investment Performance")}</Typography>
      </div>
      <ResponsiveContainer width='100%' height={200}>
        <LineChart data={data} >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey={t('Total Share Capital')}
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey={t('Total Investment')} stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LineChartDash;
