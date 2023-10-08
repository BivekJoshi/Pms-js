import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Background from '../assets/left.png';
import Logo from '../assets/logo.png';
import Curved from '../assets/curves--.png';
import Bear from '../assets/bear--.png';

const LoginLayout = () => {
  const [token, setToken] = useState(localStorage.token);
  const navigate = useNavigate();
  useEffect(() => {
    setToken(localStorage.token);
    if (!token) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      display='grid'
      gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)' }}
      height='100vh'
    >
      <Box
        position='relative'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <img
          className='ioginImg sm:w-screen'
          src={Background}
          alt='Background'
          style={{
            position: 'absolute',
            height: '100vh',
            width: '150%',
            zIndex: '-1',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '32px',
          }}
        >
          <img
            src={Logo}
            alt='Logo'
            style={{ width: '75%', maxWidth: '100%' }}
          />
        </Box>
        <Typography
          color='white'
          sx={{
            fontSize: { xs: '26px', sm: '36px' },
            fontWeight: 'bold',
            span: { color: 'purple' },
          }}
        >
          <span>Welcome</span> to DGTrade
        </Typography>
        <Typography
          color='white'
          sx={{
            fontSize: { xs: '.8rem', md: '1rem' },
          }}
        >
          “Stay ahead of the curve with us”
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          background: '#fdf8fd',
          borderRadius: {
            xs: '50px 50px 0 0',
            md: '50px 0 0 50px',
          },
        }}
      >
        <img
          src={Bear}
          alt='bear--.png'
          style={{ position: 'absolute', right: '10%' }}
        />
        <img
          src={Curved}
          alt='RightPick'
          style={{ position: 'absolute', width: '100%' }}
        />

        <Box
          className='relative self-center'
          sx={{
            padding: { xs: '20px', sm: '96px 22px' },
            boxShadow:
              '0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)',
            width: { xs: '90%', sm: '80%' },
            bgcolor: '#fdf8fd',
            borderRadius: '9px',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginLayout;
