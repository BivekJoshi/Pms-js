import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/navbar/Navbar';

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { themeSettings } from './../theme';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <header>
            <Navbar />
          </header>
          <Outlet />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
};

export default AppLayout;
