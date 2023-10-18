import React from 'react';
import './Spinner.css';
import { useTheme } from '@mui/material';
const Spinner = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.alt,
        color: theme.palette.text.main,
      }}
    >
      <div className='spinner'></div>
    </div>
  );
};

export default Spinner;
