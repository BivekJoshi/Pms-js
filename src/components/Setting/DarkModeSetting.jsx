import { Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';

const DarkModeSetting = ({ onClose }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [selectedMode, setSelectedMode] = useState('light');

  const handleModeClick = (mode) => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div style={{ width: 290, padding: '0rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
        }}
      >
        <Typography variant='h5' gutterBottom>
          Setting
        </Typography>
        <CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} />
      </div>
      <Divider />
      <div style={{ padding: '1rem' }}>
        <Typography variant='button' display='block' gutterBottom>
          MODE
        </Typography>
        <Grid
          container
          spacing={0}
          sx={{
            border: '1px solid grey',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            // alignItems:"center"
          }}
        >
          <Grid
            item
            xs={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: '10px',
              backgroundColor:
                selectedMode === 'light' ? theme.palette.common : 'red',
            }}
            onClick={() => handleModeClick('light')}
          >
            <WbSunnyIcon />
            <Typography variant="h6" >Light</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: selectedMode === 'dark' ? 'white' : '#8e8888',
            }}
            onClick={() => handleModeClick('dark')}
          >
            <DarkModeIcon />
            <Typography variant="h6">Dark</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DarkModeSetting;
