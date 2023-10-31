import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Background from '../assets/left.png';
import Logo from '../assets/logo.png';
import Curved from '../assets/curves--.png';
import Bear from '../assets/bear--.png';
import { useSelector } from 'react-redux';

const LoginLayout = () => {
  const authDataString = localStorage.getItem('auth');

  const authData = JSON.parse(authDataString);
  let authToken = authData?.authToken;
  const [token, setToken] = useState(authToken);
  const brokerOption = useSelector((state) => state.brokerList.brokerOption);

  const navigate = useNavigate();
  useEffect(() => {
    setToken(authToken);
    if (!token) {
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (brokerOption === null) {
      navigate('/error-page');
    }
  });

  return (
    <Box
      display='grid'
      gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)' }}
      height='100vh'
    >
      <Grid
        position='relative'
        display='flex'
        justifyContent='center'
        flexDirection='column'
        textAlign='center'
      >
        <img
          className='ioginImg sm:w-screen '
          src={Background}
          alt='Background'
          style={{
            position: 'absolute',
            height: '100vh',
            width: '150%',
            zIndex: '-1',
          }}
        />
        <Grid paddingBottom='32px' display='flex' justifyContent='center'>
          <img src={Logo} alt='Logo' width='30%' />
        </Grid>
        <Typography
          color='white'
          fontSize={{ xs: '26px', sm: '36px' }}
          fontWeight='bold'
          alignSelf='center'
        >
          <span style={{ color: 'purple' }}>Welcome</span> to DGTrade
        </Typography>
        <Typography
          className='italic '
          color='white'
          fontSize={{ xs: '.8rem', md: '1rem' }}
        >
          “Stay ahead of the curve with us”
        </Typography>
      </Grid>

      <Grid
        position='relative'
        display='flex'
        flexWrap='wrap'
        flexDirection='column'
        overflow='hidden'
        alignItems='center'
        justifyContent='center'
        sx={{
          background: '#fdf8fd',
          borderRadius: { xs: '50px 50px 0 0', md: '50px 0 0 50px;' },
        }}
      >
        <span style={{ position: 'absolute', left: '0', bottom: '36px' }}>
          <svg
            width='48'
            height='102'
            viewBox='0 0 48 102'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              opacity='0.1'
              x='-8.53027'
              y='10.6211'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 -8.53027 10.6211)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='2.83496'
              y='6.77832'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 2.83496 6.77832)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='14.2061'
              y='2.93164'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 14.2061 2.93164)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='-4.68555'
              y='21.9863'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 -4.68555 21.9863)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='6.67969'
              y='18.1436'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 6.67969 18.1436)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='18.0508'
              y='14.2969'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 18.0508 14.2969)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='-0.839844'
              y='33.3525'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 -0.839844 33.3525)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='10.5254'
              y='29.5098'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 10.5254 29.5098)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='21.8965'
              y='25.6631'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 21.8965 25.6631)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='-8.36328'
              y='48.5684'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 -8.36328 48.5684)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='3.00391'
              y='44.7227'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 3.00391 44.7227)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='14.3691'
              y='40.8799'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 14.3691 40.8799)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='25.7402'
              y='37.0332'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 25.7402 37.0332)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='-4.51758'
              y='59.9336'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 -4.51758 59.9336)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='6.84961'
              y='56.0879'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 6.84961 56.0879)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='18.2148'
              y='52.2451'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 18.2148 52.2451)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='29.5859'
              y='48.3984'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 29.5859 48.3984)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='-0.671875'
              y='71.3008'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 -0.671875 71.3008)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='10.6953'
              y='67.4551'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 10.6953 67.4551)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='22.0605'
              y='63.6133'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 22.0605 63.6133)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='33.4316'
              y='59.7656'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 33.4316 59.7656)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='-8.20117'
              y='86.5156'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 -8.20117 86.5156)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='3.16992'
              y='82.6689'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 3.16992 82.6689)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='14.5371'
              y='78.8232'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 14.5371 78.8232)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='25.9023'
              y='74.9814'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 25.9023 74.9814)'
              fill='#6C49B4'
            />
            <rect
              opacity='0.1'
              x='37.2734'
              y='71.1338'
              width='8'
              height='8'
              rx='4'
              transform='rotate(-18.6866 37.2734 71.1338)'
              fill='#6C49B4'
            />
          </svg>
        </span>
        <span style={{ position: 'absolute', left: '0', top: '28px' }}>
          <svg
            width='45'
            height='83'
            viewBox='0 0 45 83'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              opacity='0.2'
              cx='12.5'
              cy='12.5'
              r='12.5'
              transform='matrix(1 0 0 -1 20 53)'
              fill='#6C49B4'
            />
            <circle
              opacity='0.2'
              cx='7.5'
              cy='7.5'
              r='7.5'
              transform='matrix(1 0 0 -1 8 23)'
              fill='#6C49B4'
            />
            <circle
              opacity='0.2'
              cx='5.5'
              cy='5.5'
              r='5.5'
              transform='matrix(1 0 0 -1 24 11)'
              fill='#6C49B4'
            />
            <circle
              opacity='0.2'
              cx='15'
              cy='15'
              r='15'
              transform='matrix(1 0 0 -1 -7 83)'
              fill='#6C49B4'
            />
          </svg>
        </span>
        <span style={{ position: 'absolute', right: '0', bottom: '0' }}>
          <svg
            width='40'
            height='128'
            viewBox='0 0 40 128'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              opacity='0.2'
              cx='32.1758'
              cy='18'
              r='18'
              fill='url(#paint0_linear_3179_5530)'
            />
            <circle
              opacity='0.2'
              cx='40'
              cy='87.6523'
              r='40'
              fill='url(#paint1_linear_3179_5530)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_3179_5530'
                x1='50.2462'
                y1='-0.431578'
                x2='28.7738'
                y2='35.9166'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.168986' stop-color='#6C49B4' />
                <stop offset='1' stop-color='#6C49B4' stop-opacity='0' />
              </linearGradient>
              <linearGradient
                id='paint1_linear_3179_5530'
                x1='83.2839'
                y1='128.679'
                x2='8.99662'
                y2='32.763'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.320447' stop-color='#6C49B4' />
                <stop offset='1' stop-color='#6C49B4' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <img
          src={Bear}
          alt='bear--.png'
          style={{ position: 'absolute', top: '20px', right: '40px' }}
        />
        <img
          src={Curved}
          alt='RightPick'
          style={{ position: 'absolute', width: '100vw' }}
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
        >
          <Outlet />
        </div>
      </Grid>
    </Box>
  );
};

export default LoginLayout;
