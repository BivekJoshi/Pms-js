import React, { useState } from "react";
import {
  SettingsOutlined,
  Menu as MenuIcon,
  MenuOpen,
} from "@mui/icons-material";
import DarkModeSetting from "../Setting/DarkModeSetting";
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  useTheme,
  List,
  ListItem,
  Drawer,
  TextField,
  Autocomplete,
  Tooltip,
  Grid,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FlexBetween from "../flexBetween/FlexBetween";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import NavabarProfile from "./NavabarProfile";
import ResponsiveNavMenu from "./ResponsiveMenu";
import { useGetListedCompanies } from "../../hooks/watchList/useWatchList";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import LiveIndicator from "../liveIndicator/LiveIndicator";
import { useGetUserChildDetail } from "../../hooks/portfolio/usePortfolio";
import { useSelector } from "react-redux";
import CustomizedSwitches from "../switch/NotificationSwitch";

const navItems = [
  {
    id: 1,
    item: "Home",
    path: "/dashboard",
  },
  {
    id: 2,
    item: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 3,
    item: "Watchlist",
    path: "/watchlist",
  },
  {
    id: 4,
    item: "Alert",
    path: "/alert",
  },
  {
    id: 5,
    item: "Research",
    path: "/research",
  },
];

const Navbar = () => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scriptValue, setscriptValue] = useState({ companyInfo: "" });
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: listedCompanies } = useGetListedCompanies();
  const { data: childDetailData } = useGetUserChildDetail();
  const themeMode = useSelector((state) => state.theme?.mode);
  const { pathname = "" } = useLocation();
  const marketOpen = false;

  const handleActiveClick = (path) => {
    console.log(path,"path ma chai");
    navigate(`${path}`);
    if (isMenuOpen) setIsMenuOpen(false);
    if (!path.includes("/company/")) setscriptValue({ companyInfo: "" }); // Set to an empty object
  };

  const [state, setState] = React.useState({
    right: false,
    drawerOpen: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleMenu = () => {
    setIsMenuOpen((val) => !val);
  };

  const symbolsArray = [];
  for (const key in listedCompanies) {
    if (Object.hasOwnProperty.call(listedCompanies, key)) {
      symbolsArray.push({ index: key, ...listedCompanies[key] });
    }
  }
  const symbols = symbolsArray.map((item) => ({
    symbol: item?.symbol,
    companyInfo: item?.companyInfo,
    id: item?.id,
  }));

  return (
    <AppBar
      style={{
        position: "sticky",
        top: 0,
        boxShadow:
          "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
        background:
          theme.palette.mode === "light"
            ? theme.palette.background.alt
            : theme.palette.primary[700],
        color: "black",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={logo}
          alt="Logo"
          width="104px"
          height="36px"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        />

        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Middle SIDE */}
        <FlexBetween>
          {navItems.map((items) => (
            <List
              key={items?.id}
              sx={{
                position: "relative",
                display: { sm: "none", md: "block", xs: "none" }, // Hide on small screens
              }}
            >
              <ListItem sx={{ position: "relative" }}>
                <Typography
                  onClick={() => handleActiveClick(items?.path)}
                  sx={{
                    cursor: "pointer",
                    color:
                      pathname === items.path
                        ? theme.palette.text.main
                        : theme.palette.text.main,
                    fontWeight: pathname === items.path ? "bold" : "normal",
                    borderBottom:
                      pathname === items.path ? "2px solid blue" : "none",
                    "&:hover": {
                      backgroundColor: theme.palette.background.hover,
                      borderRadius: ".5rem",
                      padding: "4px",
                    },
                  }}
                  variant="h6"
                >
                  {t(items?.item)}
                  {pathname === items.path}
                </Typography>
                
              </ListItem>
            </List>
          ))}
          
        </FlexBetween>

        <Grid
          sx={{
            width: "100%",
            maxWidth: "300px",
            display: { md: "block", xs: "none" },
            margin: { md: "0 32px", sm: "0px" },
          }}
        >
          <Autocomplete
            name="script"
            fullWidth
            options={symbols}
            getOptionLabel={(option) => option?.companyInfo}
            value={scriptValue ? scriptValue : null}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                placeholder={t("Company name or symbol")}
                variant="outlined"
                autoFocus
                size="small"
                InputLabelProps={{ shrink: true }}
                style={{ minWidth: "150px" }}
              />
            )}
            onChange={(event, value) => {
              if (value) {
                setscriptValue(value);
                navigate(`/company/${value?.symbol}`);
              }
            }}
          />
        </Grid>

        <Tooltip title={"Market " + (marketOpen ? "Open" : "Closed")}>
          <div>
            <LiveIndicator open={marketOpen} />
          </div>
        </Tooltip>

        <FlexBetween gap="12px">
          <div>
            <React.Fragment>
              <Tooltip title="App settings">
                <IconButton onClick={toggleDrawer("right", true)}>
                  <SettingsOutlined sx={{ fontSize: "25px" }} />
                </IconButton>
              </Tooltip>
              <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                <DarkModeSetting onClose={toggleDrawer("right", false)} />
              </Drawer>
            </React.Fragment>
          </div>
          <IconButton>
            <NotificationsNoneIcon sx={{ fontSize: "25px" }} />
          </IconButton>

          <NavabarProfile childDetailData={childDetailData} />

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{
              display: { sm: "block", md: "none", xs: "block" }, // Show on small screens
              color: themeMode === "dark" ? "#fff" : "#0000008a",
            }}
          >
            {isMenuOpen ? (
              <MenuOpen sx={{ fontSize: "25px" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
        </FlexBetween>
      </Toolbar>

      <ResponsiveNavMenu
        isMenuOpen={isMenuOpen}
        navItem={navItems}
        handleActiveClick={(id, path) => handleActiveClick(id, path)}
        handleToggle={(val) => setIsMenuOpen(val)}
        symbols={symbols}
        scriptValue={scriptValue}
        handelScriptChange={(val) => setscriptValue(val)}
      />
    </AppBar>
  );
};

export default Navbar;
