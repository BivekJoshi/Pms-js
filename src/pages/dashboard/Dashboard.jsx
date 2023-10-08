import { Box, useTheme } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  const theme = useTheme();
  return (
  <Box sx={{ background: theme.palette.primary}}>
    Dashboard
    </Box>
  );
};

export default Dashboard;
