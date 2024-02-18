import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { themeSettings } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import KycNavbar from "../components/navbar/KycNavbar";
import KycForm from "../kyc/pages/KycForm";
import AddressIndividualDp from "../kyc/dp/forms/individual/AddressIndividualDp";

const KycLayout = () => {
  const mode = useSelector((state) => state?.theme?.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const individualKycDemat = [
    {
      id: 1,
      component: <KycForm />,
      label: "Basic Details",
    },
    {
      id: 2,
      component: <AddressIndividualDp />,
      label: "Addsress Details",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <KycNavbar />
      <Outlet />
    </ThemeProvider>
  );
};

export default KycLayout;
