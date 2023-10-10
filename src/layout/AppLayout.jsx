import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/navbar/Navbar';

import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { themeSettings } from './../theme';
import { Outlet, useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const authDataString = localStorage.getItem('auth');
  const authData = JSON.parse(authDataString);
  let authToken = authData?.authToken;

  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* <ErrorBoundary> */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <header>
            <Navbar />
          </header>
          {/* <Container fixed> */}
          <section style={{ margin: '0px 32px' }}>
            <Outlet />
          </section>
          {/* </Container> */}
        </ThemeProvider>
      {/* </ErrorBoundary> */}
    </>
  );
};

export default AppLayout;
