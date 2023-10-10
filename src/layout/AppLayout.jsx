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

import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./../theme";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const authDataString = localStorage.getItem("auth");
  const authData = JSON.parse(authDataString);
  let authToken = authData?.authToken;

  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) {
      navigate("/login");
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
