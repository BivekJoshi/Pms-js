import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/navbar/Navbar';

import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeSettings } from './../theme';
import { Outlet, useNavigate } from 'react-router-dom';
import { useGetTheme } from '../hooks/brokerTheme/useBrokerTheme';
import Spinner from '../components/spinner/Spinner';

const AppLayout = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state?.theme?.mode);
  const brokerId = useSelector((state) => state?.user.details?.brokerNo);
  const authDataString = localStorage.getItem('auth');
  const authData = JSON.parse(authDataString);
  let authToken = authData?.authToken;
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetTheme(brokerId);
  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    } else {
      refetch();
    }
    if (data) {
      dispatch({ type: 'SET_BROKER_THEME', payload: data?.web });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, authToken]);

  const theme = useMemo(
    () => createTheme(themeSettings(mode, data?.web)),
    [mode, data, isLoading]
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </>
  );
};

export default AppLayout;
