import React, { useState } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

import BuyCalculator from './BuyCalculator';
import CustomizedSwitches from '../../../components/switch/NotificationSwitch';
import SellCalculator from './SellCalculator';

const BuySellCalculator = () => {
  const theme = useTheme();

  const [transactionType, setTransactionType] = useState(false);
  const handleTransactionTypeChange = () => {
    setTransactionType((prev) => !prev);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Grid
        container
        style={{
          backgroundColor: theme.palette.background.alt,
          padding: '12px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Typography
          variant='h4'
          style={{
            color: theme.palette.text.light,
            fontWeight: '800',
          }}
        >
          {transactionType ? 'Sell Calculator' : 'Buy Calculator'}
        </Typography>
      </Grid>
      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: ' 16px 32px',
        }}
      >
        <Grid>
          <Grid item xs={12}>
            <CustomizedSwitches
              checked={transactionType}
              onChange={handleTransactionTypeChange}
              name='transactionType'
              id='transactionType'
              multiLabelEnable
              trueLabel='Sell'
              falseLabel='Buy'
              formLabel='Choose Transaction Type'
            />
          </Grid>
        </Grid>
        {!transactionType ? <BuyCalculator /> : <SellCalculator />}
      </Box>
    </div>
  );
};

export default BuySellCalculator;
