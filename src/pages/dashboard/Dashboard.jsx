import { useTheme } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  const theme = useTheme();
  console.log(theme)
  return <div>Dashboard</div>;
};

export default Dashboard;
