import React, { useState } from "react";
import {
  Search,
  SettingsOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import DarkModeSetting from "../Setting/DarkModeSetting";
import {
  AppBar,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
  List,
  ListItem,
  Drawer,
  TextField,
  Autocomplete,
} from "@mui/material";
import FlexBetween from "../flexBetween/FlexBetween";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import NavabarProfile from "./NavabarProfile";
import ResponsiveNavMenu from "./ResponsiveMenu";
import { useGetListedCompanies } from "../../hooks/watchList/useWatchList";

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
    path: "research",
  },
];

const Navbar = () => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { data: listedCompanies } = useGetListedCompanies();

  const handleActiveClick = (id, path) => {
    setIsActive(id);
    navigate(`${path}`);
    if (isMenuOpen) setIsMenuOpen(false);
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
  const symbols = symbolsArray.map((item) => item.symbol);

  return (
    <AppBar
      style={{
        position: "static",
        background: theme.palette.background.alt,
        boxShadow: "none",
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
                  onClick={() => handleActiveClick(items?.id, items?.path)}
                  sx={{
                    cursor: "pointer",
                    color:
                      isActive === items.id
                        ? theme.palette.text.main
                        : theme.palette.text.main,
                    fontWeight: isActive === items.id ? "bold" : "normal",
                  }}
                  variant="h6"
                >
                  {items?.item}
                  {isActive === items.id && (
                    <div
                      style={{
                        position: "absolute",
                        width: "50%",
                        height: "0.1rem",
                        background: "blue",
                      }}
                    ></div>
                  )}
                </Typography>
              </ListItem>
            </List>
          ))}
        </FlexBetween>

        <Autocomplete
          name="script"
          options={symbols}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Company name or symbol"
              variant="outlined"
              autoFocus
              size="small"
              InputLabelProps={{ shrink: true }}
              sx={{width:"300px"}}
            />
          )}
        />

        <FlexBetween gap="1.5rem">
          <div>
            <React.Fragment>
              <IconButton onClick={toggleDrawer("right", true)}>
                <SettingsOutlined sx={{ fontSize: "25px" }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                <DarkModeSetting onClose={toggleDrawer("right", false)} />
              </Drawer>
            </React.Fragment>
          </div>

          <NavabarProfile />

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{
              display: { sm: "block", md: "none", xs: "block" }, // Show on small screens
            }}
          >
            <MenuIcon />
          </IconButton>
        </FlexBetween>
      </Toolbar>

      <ResponsiveNavMenu
        isActive={isActive}
        isMenuOpen={isMenuOpen}
        navItem={navItems}
        handleActiveClick={(id, path) => handleActiveClick(id, path)}
        handleToggle={(val) => setIsMenuOpen(val)}
      />
    </AppBar>
  );
};

export default Navbar;
