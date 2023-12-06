import {
  Chip,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
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
import Footer from '../components/footer/Footer';
import MarketIndexNav from '../components/navbar/MarketIndexNav';
import FormModal from '../components/formModal/FormModal';
import FeedbackModal from '../components/feedbackModal/FeedbackModal';

const AppLayout = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state?.theme?.mode);
  const brokerId = useSelector((state) => state?.user.details?.brokerNo);
  const authDataString = localStorage.getItem('auth');
  const authData = JSON.parse(authDataString);
  const authToken = authData?.authToken;
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetTheme(brokerId);
  const [feedbackModal, setFeedbackModal] = useState(false);

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    } else if (authData?.tempPassword) {
      navigate('change/password');
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
        <div style={{ position: 'relative' }}>
          <Navbar />

          <MarketIndexNav />
          {/* <Container fixed> */}
          <section
            style={{
              padding: '16px',
              minHeight: '94dvh',
            }}
            data-aos='fade-right'
          >
            <Outlet />
          </section>
          {/* </Container> */}
          <Footer />
        </div>
        <div style={{ position: 'absolute', bottom: '12px', right: '32px' }}>
          <IconButton onClick={() => setFeedbackModal(true)}>
            Support
          </IconButton>
        </div>

        <FormModal
          open={feedbackModal}
          onClose={() => setFeedbackModal(false)}
          width='378px'
          formComponent={
            <FeedbackModal onClose={() => setFeedbackModal(false)} />
          }
        />
      </ThemeProvider>
      {/* </ErrorBoundary> */}
    </>
  );
};

export default AppLayout;
