import { AppBar, Avatar, Chip, Drawer, IconButton, Toolbar, Tooltip } from "@mui/material";
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
import { useSelector } from "react-redux";

const KycNavSubmitted = () => {
    const userDetails = useSelector((state) => state?.user);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [state, setState] = React.useState({
        right: false,
        drawerOpen: false,
    });
    const toggleMenu = () => {
        setIsMenuOpen((val) => !val);
    };
    const { pathname } = useLocation();
    const navigate = useNavigate({});

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
                color: "black",
                backgroundColor: "#F5F9FC",
                marginBottom:"1rem"
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
                        {/* <React.Fragment>
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
            </React.Fragment> */}
                    </div>
                    <IconButton>
                        <NotificationsNoneIcon sx={{ fontSize: "25px" }} />
                    </IconButton>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleMenu}

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

export default KycNavSubmitted;
