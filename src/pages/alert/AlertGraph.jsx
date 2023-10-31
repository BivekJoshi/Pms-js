import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { lineData } from '../dashboard/data';
import { useTranslation } from 'react-i18next';
import { Box, Typography, useTheme } from '@mui/material';

const AlertGraph = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      color={theme.palette.text.main}
      bgcolor={theme.palette.background.alt}
      sx={{
        borderRadius: '6px',
      }}
    >
      <div style={{ marginBottom: '0.6rem' }}>
        <Typography variant='h4'>{t('Value')}</Typography>
      </div>
      <ResponsiveContainer width='100%' height={200}>
        <LineChart data={lineData}>
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
          <Line
            type='monotone'
            dataKey={t('Total Investment')}
            stroke='#82ca9d'
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default AlertGraph;
