import {
  Box,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { themeSettings } from "../theme";
import { useSelector } from "react-redux";
import KycNavbar from "../components/navbar/KycNavbar";
import { useTranslation } from "react-i18next";
import "./layout.css";
import { corporatKycDematList, individualKycDematList } from "./kycMenuList";
import KycProfileCard from "../kyc/components/KycProfileCard";
const KycLayout = () => {
  const mode = useSelector((state) => state?.theme?.mode);
  const { t } = useTranslation();
  const clientType = "C";
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    if (clientType === "I") {
      setMenuList(individualKycDematList);
    } else if (clientType === "C") {
      setMenuList(corporatKycDematList);
    } else {
      setMenuList([]);
    }
  }, []);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  const activeStyle = {
    color: theme.palette.text.main,
    backgroundColor: theme.palette.primary.main,

    borderRadius: ".5rem ",
    textTransform: "none",
    fontWeight: 700,
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <KycNavbar />
      <section
        style={{
          padding: "16px",
          minHeight: "94dvh",
        }}
        // data-aos='fade-right'
      >
        <Box
          sx={{
            gridTemplateRows: isSm ? "4% 1fr" : "1fr",
            gridTemplateColumns: !isSm ? "2.5fr 10fr" : "1fr",
            minHeight: "94dvh",
          }}
          color={theme.palette.text.main}
          display="grid"
          gap="1rem"
        >
          <Grid
            display="flex"
            flexDirection="column"
            sx={{
              display: isSm ? "none" : "flex",
            }}
          >
            <Grid display="flex" flexDirection="column" gap="16px">
              <KycProfileCard clientType={clientType} nature={"DP"} />
              <Grid
                p="12px"
                bgcolor={theme.palette.background.alt}
                display="flex"
                flexDirection="column"
                borderRadius="8px"
                width="100%"
              >
                <Grid display="flex" flexDirection="column">
                  {menuList.map((item, i) => {
                    return (
                      <NavLink
                        className="navlinks-list"
                        to={item.path}
                        key={i}
                        style={({ isActive }) =>
                          isActive
                            ? activeStyle
                            : { color: theme.palette.text.main }
                        }
                      >
                        <Grid className="profileIcon">
                          {item.icon}
                          <Typography variant="h7">
                            {t(`${item.title}`)}
                          </Typography>
                        </Grid>
                      </NavLink>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box
            color={theme.palette.text.main}
            bgcolor={theme.palette.background.alt}
            sx={{
              borderRadius: "6px",
              padding: "16px",
              boxShadow:
                "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </section>
    </ThemeProvider>
  );
};

export default KycLayout;
