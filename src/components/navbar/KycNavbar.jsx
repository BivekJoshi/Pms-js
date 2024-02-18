import { useTheme } from "@emotion/react";
import { AppBar, Drawer, IconButton, Toolbar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import FlexBetween from "../flexBetween/FlexBetween";
import {
  SettingsOutlined,
  Menu as MenuIcon,
  MenuOpen,
} from "@mui/icons-material";
import DarkModeSetting from "../Setting/DarkModeSetting";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const KycNavbar = () => {
  const theme = useTheme();
  console.log("🚀 ~ KycNavbar ~ theme:", theme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, setState] = React.useState({
    right: false,
    drawerOpen: false,
  });
  const toggleMenu = () => {
    setIsMenuOpen((val) => !val);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
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
        />
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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{
              display: { sm: "block", md: "none", xs: "block" }, // Show on small screens
              color: theme.mode === "dark" ? "#fff" : "#0000008a",
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
    </AppBar>
  );
};

export default KycNavbar;
