import {
  Chip,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ErrorBoundary from "../components/ErrorBoundary";
import Navbar from "../components/navbar/Navbar";

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
      {/* <ErrorBoundary> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <header>
          <Navbar />
        </header>
        {/* <Container fixed> */}
        <section style={{ margin: "0px 32px" }}>
          <Outlet />
        </section>
        {/* </Container> */}
        <Grid
          width="100%"
          display="flex"
          p="0px 48px"
          height="63px"
          gap="22px"
          alignItems="center"
          justifyContent="space-between"
          bgcolor={theme.palette.background.alt}
        >
          <Typography variant="h7">
            DG TRADE © DIGIHUB | Sumeru Securities Pvt. Ltd.
          </Typography>
          <Chip label="Version : 1.0" sx={{ fontSize: "13px" }} />
        </Grid>
      </ThemeProvider>
      {/* </ErrorBoundary> */}
    </>
  );
};

export default AppLayout;
