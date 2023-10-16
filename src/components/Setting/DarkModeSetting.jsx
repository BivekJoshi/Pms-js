import { Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

const DarkModeSetting = ({ onClose }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const mode = theme.palette.mode;
  const language = useSelector((store) => store.language.mode);

  const handleModeClick = (mode) => {
    dispatch({ type: 'TOGGLE_THEME', payload: mode });
  };

  const handleLanguageChange = (mode) => {
    dispatch({ type: 'TOGGLE_LANGUAGE', payload: mode });
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
              background:
                mode === 'light' ? theme.palette.grey[500] : 'transparent',
            }}
            onClick={() => handleModeClick('light')}
          >
            <WbSunnyIcon />
            <Typography variant='h6'>Light</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: '10px',
              background:
                mode === 'dark' ? theme.palette.grey[500] : 'transparent',
            }}
            onClick={() => handleModeClick('dark')}
          >
            <DarkModeIcon />
            <Typography variant='h6'>Dark</Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{ padding: '1rem' }}>
        <Typography variant='button' display='block' gutterBottom>
          LANGUAGE
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
              alignItems: 'center',
              gap: '8px',
              padding: '10px',
              backgroundColor:
                language === 'EN' ? theme.palette.grey[500] : 'transparent',
            }}
            onClick={() => handleLanguageChange('EN')}
          >
            <svg
              width='24'
              height='16'
              viewBox='0 0 24 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_3592_30975)'>
                <path d='M0 0H24V16.0002H0V0Z' fill='white' />
                <path
                  d='M13.5 -9.15527e-05H10.5V6.49988H0V9.49989H10.5V15.9999H13.5V9.49989H24V6.49988H13.5V-9.15527e-05Z'
                  fill='#D80027'
                />
                <path
                  d='M18.4587 10.7824L24 13.861V10.7824H18.4587ZM14.6087 10.7824L24 15.9998V14.5245L17.2644 10.7824H14.6087ZM21.4985 15.9998L14.6087 12.1718V15.9998H21.4985Z'
                  fill='#0052B4'
                />
                <path
                  d='M14.6087 10.7824L24 15.9998V14.5245L17.2644 10.7824H14.6087Z'
                  fill='white'
                />
                <path
                  d='M14.6087 10.7824L24 15.9998V14.5245L17.2644 10.7824H14.6087Z'
                  fill='#D80027'
                />
                <path
                  d='M4.23474 10.7823L0 13.135V10.7823H4.23474ZM9.39132 11.4458V15.9998H1.19489L9.39132 11.4458Z'
                  fill='#0052B4'
                />
                <path
                  d='M6.73562 10.7824L0 14.5245V15.9998L9.39132 10.7824H6.73562Z'
                  fill='#D80027'
                />
                <path
                  d='M5.54133 5.21729L0 2.13872V5.21729H5.54133ZM9.39132 5.21729L0 -9.15527e-05V1.47525L6.73562 5.21729H9.39132ZM2.50153 -9.15527e-05L9.39132 3.82791V-9.15527e-05H2.50153Z'
                  fill='#0052B4'
                />
                <path
                  d='M9.39132 5.21729L0 -9.15527e-05V1.47525L6.73562 5.21729H9.39132Z'
                  fill='white'
                />
                <path
                  d='M9.39132 5.21729L0 -9.15527e-05V1.47525L6.73562 5.21729H9.39132Z'
                  fill='#D80027'
                />
                <path
                  d='M19.7653 5.21734L24 2.86468V5.21734H19.7653ZM14.6087 4.55387V-9.15527e-05H22.8051L14.6087 4.55387Z'
                  fill='#0052B4'
                />
                <path
                  d='M17.2644 5.21724L24 1.47521V-0.000137329L14.6087 5.21724H17.2644Z'
                  fill='#D80027'
                />
              </g>
              <defs>
                <clipPath id='clip0_3592_30975'>
                  <rect width='24' height='16' fill='white' />
                </clipPath>
              </defs>
            </svg>

            <Typography variant='h6'>English</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              gap: '8px',
              backgroundColor:
                language === 'NP' ? theme.palette.grey[500] : 'transparent',
              padding: '10px',
            }}
            onClick={() => handleLanguageChange('NP')}
          >
            <svg
              width='24'
              height='16'
              viewBox='0 0 24 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 15.9998V0.000123978L13.1447 8.19154H4.10672L12.7119 15.9998H0Z'
                fill='#0052B4'
              />
              <path
                d='M11.4736 7.71352L0.478088 0.861423V15.5218H11.4736L2.86843 7.71352H11.4736Z'
                fill='#D80027'
              />
              <path
                d='M4.59387 11.2078L3.91001 10.8861L4.27423 10.2238L3.53154 10.3658L3.43742 9.61557L2.92015 10.1674L2.40284 9.61557L2.30871 10.3658L1.56607 10.2237L1.93029 10.8861L1.24634 11.2078L1.93029 11.5295L1.56607 12.1918L2.30876 12.0498L2.40284 12.8L2.92015 12.2482L3.43742 12.8L3.53154 12.0498L4.27418 12.1919L3.91001 11.5295L4.59387 11.2078ZM4.13754 4.98418L3.64011 4.75022L3.905 4.26844L3.36486 4.3718L3.29637 3.82613L2.92015 4.22743L2.54393 3.82613L2.4755 4.3718L1.93526 4.26844L2.2002 4.75022L1.70271 4.98418L2.92015 5.22765L4.13754 4.98418Z'
                fill='white'
              />
              <path
                d='M4.38101 4.98418C4.38101 5.79099 3.72696 6.44504 2.92015 6.44504C2.11334 6.44504 1.45929 5.79099 1.45929 4.98418'
                fill='white'
              />
            </svg>

            <Typography variant='h6'>Nepali</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DarkModeSetting;
