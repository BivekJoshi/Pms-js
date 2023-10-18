import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const summaryData = {
  title: 'Summary',
  price: '43764375',
  gain: '34783783578',
  loss: '467436743',
  tGain: '43784387',
  tLoss: '3784378',
  investment: '3478437',
  date: '2023-10-10',
};
const DashboardIndexCard = () => {
  const theme = useTheme();

  const style = {
    color: theme.palette.text.light,
    fontWeight: '500',
    lineHeight: '1.5rem',
  };

  const { t } = useTranslation();

  return (
    <>
      <Box
        bgcolor={theme.palette.background.alt}
        color={theme.palette.text.main}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem  2rem',
          borderRadius: '6px',
        }}
      >
        <Typography
          variant='h2'
          style={{
            color: theme.palette.text.light,
            fontWeight: '800',
            marginBottom: '1rem',
          }}
        >
          {t(`Summary`)}
        </Typography>
        <Typography variant='p' style={style}>
          Rs. {summaryData?.price} (Total Share Capital)
        </Typography>
        <Box sx={style}>
          Day Gain :<Typography variant='p'>{summaryData?.gain}</Typography>
        </Box>
        <Box sx={style}>
          Day Loss:
          <Typography variant='p' sx={{ color: 'red' }}>
            {summaryData?.loss}
          </Typography>
        </Box>
        <Box sx={style}>
          Total Gain :
          <Typography variant='p' sx={style}>
            {summaryData?.tGain}
          </Typography>
        </Box>
        <Box sx={style}>
          Total Loss :
          <Typography variant='p' sx={{ color: 'red' }}>
            {summaryData?.tLoss}
          </Typography>
        </Box>
        <Box sx={style}>
          Total Investment :{' '}
          <Typography variant='p'> {summaryData?.investment} </Typography>
        </Box>
        <Box sx={style}>
          As of Tue : <Typography variant='p'> {summaryData?.date} </Typography>
        </Box>
      </Box>
    </>
  );
};

export default DashboardIndexCard;
