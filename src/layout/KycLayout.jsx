import {
  Box,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useMemo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { themeSettings } from "../theme";
import { useSelector } from "react-redux";
import KycNavbar from "../components/navbar/KycNavbar";
import { useTranslation } from "react-i18next";
import "./layout.css";
const KycLayout = () => {
  const mode = useSelector((state) => state?.theme?.mode);
  const { t } = useTranslation();

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const individualKycDematList = [
    {
      id: 1,
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="3.5"
            fill="#EADDFF"
          />
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="3.5"
            stroke="#25005A"
          />
          <path
            d="M21.5833 14.4154L22.75 15.5904L17.3083 21.082L14.4167 18.1654L15.5833 16.9904L17.3083 18.7237L21.5833 14.4154ZM13.1667 7.33203C14.0507 7.33203 14.8986 7.68322 15.5237 8.30834C16.1488 8.93346 16.5 9.78131 16.5 10.6654C16.5 11.5494 16.1488 12.3973 15.5237 13.0224C14.8986 13.6475 14.0507 13.9987 13.1667 13.9987C12.2826 13.9987 11.4348 13.6475 10.8096 13.0224C10.1845 12.3973 9.83333 11.5494 9.83333 10.6654C9.83333 9.78131 10.1845 8.93346 10.8096 8.30834C11.4348 7.68322 12.2826 7.33203 13.1667 7.33203ZM13.1667 8.9987C12.7246 8.9987 12.3007 9.17429 11.9882 9.48685C11.6756 9.79941 11.5 10.2233 11.5 10.6654C11.5 11.1074 11.6756 11.5313 11.9882 11.8439C12.3007 12.1564 12.7246 12.332 13.1667 12.332C13.6087 12.332 14.0326 12.1564 14.3452 11.8439C14.6577 11.5313 14.8333 11.1074 14.8333 10.6654C14.8333 10.2233 14.6577 9.79941 14.3452 9.48685C14.0326 9.17429 13.6087 8.9987 13.1667 8.9987ZM13.1667 14.832C13.7333 14.832 14.4167 14.907 15.175 15.0487L13.7833 16.4404L13.1667 16.4154C10.6917 16.4154 8.08333 17.632 8.08333 18.1654V19.082H13.25L14.8333 20.6654H6.5V18.1654C6.5 15.9487 10.9417 14.832 13.1667 14.832Z"
            fill="#25005A"
          />
        </svg>
      ),
      path: "/kyc/demat-registration/i/basic-details",
      title: "Basic Details",
    },
    {
      id: 2,
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="3.5"
            fill="#EADDFF"
          />
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="3.5"
            stroke="#25005A"
          />
          <path
            d="M15.6641 6.5V9.83333C15.6641 10.0543 15.7519 10.2663 15.9081 10.4226C16.0644 10.5789 16.2764 10.6667 16.4974 10.6667H19.8307"
            stroke="#25005A"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9974 13.1667V18.1667M18.1641 21.5H9.83073C9.3887 21.5 8.96478 21.3244 8.65222 21.0118C8.33966 20.6993 8.16406 20.2754 8.16406 19.8333V8.16667C8.16406 7.72464 8.33966 7.30072 8.65222 6.98816C8.96478 6.67559 9.3887 6.5 9.83073 6.5H15.6641L19.8307 10.6667V19.8333C19.8307 20.2754 19.6551 20.6993 19.3426 21.0118C19.03 21.3244 18.6061 21.5 18.1641 21.5Z"
            stroke="#25005A"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9141 15.2513L13.9974 13.168L16.0807 15.2513"
            stroke="#25005A"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      path: "/kyc/demat-registration/i/document-details",
      title: "Document Upload",
    },
    {
      id: 3,
      path: "/kyc/demat-registration/i/address-details",
      title: "Address Details",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="3.5"
            fill="#EADDFF"
          />
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="3.5"
            stroke="#25005A"
          />
          <path
            d="M15.6641 6.5V9.83333C15.6641 10.0543 15.7519 10.2663 15.9081 10.4226C16.0644 10.5789 16.2764 10.6667 16.4974 10.6667H19.8307"
            stroke="#25005A"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9974 13.1667V18.1667M18.1641 21.5H9.83073C9.3887 21.5 8.96478 21.3244 8.65222 21.0118C8.33966 20.6993 8.16406 20.2754 8.16406 19.8333V8.16667C8.16406 7.72464 8.33966 7.30072 8.65222 6.98816C8.96478 6.67559 9.3887 6.5 9.83073 6.5H15.6641L19.8307 10.6667V19.8333C19.8307 20.2754 19.6551 20.6993 19.3426 21.0118C19.03 21.3244 18.6061 21.5 18.1641 21.5Z"
            stroke="#25005A"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9141 15.2513L13.9974 13.168L16.0807 15.2513"
            stroke="#25005A"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      // path: "/kyc/demat-registration/i/bank-details",
      // title: "Bank Details",
    },
    {
      id: 4,
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="3.5"
            fill="#EADDFF"
          />
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="3.5"
            stroke="#25005A"
          />
          <path
            d="M15.6641 6.5V9.83333C15.6641 10.0543 15.7519 10.2663 15.9081 10.4226C16.0644 10.5789 16.2764 10.6667 16.4974 10.6667H19.8307"
            stroke="#25005A"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9974 13.1667V18.1667M18.1641 21.5H9.83073C9.3887 21.5 8.96478 21.3244 8.65222 21.0118C8.33966 20.6993 8.16406 20.2754 8.16406 19.8333V8.16667C8.16406 7.72464 8.33966 7.30072 8.65222 6.98816C8.96478 6.67559 9.3887 6.5 9.83073 6.5H15.6641L19.8307 10.6667V19.8333C19.8307 20.2754 19.6551 20.6993 19.3426 21.0118C19.03 21.3244 18.6061 21.5 18.1641 21.5Z"
            stroke="#25005A"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9141 15.2513L13.9974 13.168L16.0807 15.2513"
            stroke="#25005A"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      path: "/kyc/demat-registration/i/detail-verification",
      title: "Detail Verification",
    },
  ];
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
            gridTemplateColumns: !isSm ? "2fr 10fr" : "1fr",
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
              <Grid
                display="flex"
                color={theme.palette.text.main}
                bgcolor={theme.palette.background.alt}
                alignItems="center"
                justifyContent="space-evenly"
                borderRadius="6px"
                position="relative"
                padding="16px"
              >
                img
              </Grid>
              <Grid
                p="12px"
                bgcolor={theme.palette.background.alt}
                display="flex"
                flexDirection="column"
                borderRadius="8px"
                width="100%"
              >
                <Grid display="flex" flexDirection="column">
                  {individualKycDematList.map((item, i) => {
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
