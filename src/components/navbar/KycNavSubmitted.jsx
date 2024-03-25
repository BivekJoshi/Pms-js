import { AppBar, Avatar, Chip, Drawer, IconButton, ListItemAvatar, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip } from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../utility/logout";

const KycNavSubmitted = () => {
    const userDetails = useSelector((state) => state?.user);
    const [anchorEl, setAnchorEl] = useState(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { pathname } = useLocation();
    const navigate = useNavigate({});
    const dispatch = useDispatch();
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
        setAnchorEl(false);
        dispatch({ type: "LOGOUT" });
        logout();
        navigate("/login");
        setIsMenuOpen(true)
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
                marginBottom: "1rem"
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
                    </div>
                    <IconButton>
                        <NotificationsNoneIcon sx={{ fontSize: "25px" }} />
                    </IconButton>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}

                    >
                        {isMenuOpen ? (
                            <MenuOpen sx={{ fontSize: "25px" }} />
                        ) : (
                            <MenuIcon sx={{ fontSize: "25px" }} />
                        )}
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        // onClose={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 5.5,
                                ml: 0,
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                },
                                "&:before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: "background.paper",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: "right", vertical: "top" }}
                        anchorOrigin={{ horizontal: "right", vertical: "top" }}
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

export default KycNavSubmitted;
