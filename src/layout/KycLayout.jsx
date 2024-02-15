import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { themeSettings } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import KycNavbar from "../components/navbar/KycNavbar";

const KycLayout = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state?.theme?.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <KycNavbar />
      <Outlet />
    </ThemeProvider>
  );
};

export default KycLayout;
