import { useTheme } from "@emotion/react";
import { AppBar, Avatar, Chip, Drawer, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip } from "@mui/material";
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
import { useLocation, useNavigate } from "react-router-dom";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BallotIcon from '@mui/icons-material/Ballot';
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../utility/logout";
import { useDispatch } from "react-redux";

const KycNavbar = ({ userDetails }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = React.useState({
    right: false,
    drawerOpen: false,
  });

  const { pathname } = useLocation();
  const navigate = useNavigate({});
  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    logout();
    navigate("/login");
    setAnchorEl(null);
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

          {userDetails &&
            userDetails?.status === 'SUBMITTED' &&
            (pathname !== '/kyc/video-kyc' ? (
              <Chip
                // color="primary"
                style={{ background: "#6C49B4", color: "white" }}
                icon={<ContactPhoneIcon style={{ color: "white" }} />}
                label="Self Verification"
                clickable
                variant='filled'
                onClick={() => navigate('/kyc/video-kyc')}
              />
            ) : (
              <Chip
                clickable
                style={{ background: "#6C49B4", color: "white" }}
                icon={<BallotIcon style={{ color: "white" }} />}
                color="primary"
                // avatar={<Avatar src={Vector} alt={Vector} style={{padding:".3 rem"}}/>} 
                label="View KYC"
                variant='filled'
                onClick={() => navigate('/kyc/tms-registration/i/detail-verification')}
              />
            ))
          }
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
            aria-label="menu"
            onClick={handleClick}
          >
            {anchorEl ? (
              <MenuOpen sx={{ fontSize: "25px" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default KycNavbar;
