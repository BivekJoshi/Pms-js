import { AppBar, Chip, IconButton, ListItemIcon, Menu, MenuItem, Toolbar } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import FlexBetween from "../flexBetween/FlexBetween";
import { Menu as MenuIcon, MenuOpen } from "@mui/icons-material";
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

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
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
                        userDetails.status === 'SUBMITTED' &&
                        (pathname !== '/kyc/video-kyc' ? (
                            <Chip
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
                                label="View KYC"
                                variant='filled'
                                onClick={() => navigate('/kyc/tms-registration/i/detail-verification')}
                            />
                        ))
                    }
                    <IconButton>
                        <NotificationsNoneIcon sx={{ fontSize: "25px" }} />
                    </IconButton>
                    <IconButton
                        edge="start"
                        color="inherit"
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

export default KycNavSubmitted;
