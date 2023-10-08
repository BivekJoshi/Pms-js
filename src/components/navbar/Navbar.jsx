import React, { useState } from 'react';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import FlexBetween from '../flexBetween/FlexBetween';
import { useDispatch } from 'react-redux';
// import { TOGGLE_THEME } from '../../redux/reducers/themeReducer';
const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleToggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius='9px'
          gap='3rem'
          p='0.1rem 1.5rem'
        >
          <InputBase placeholder='Search...' />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap='1.5rem'>
          <IconButton onClick={() => handleToggleTheme()}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textTransform: 'none',
                gap: '1rem',
              }}
            >
              {/* <Box
                component='img'
                alt='profile'
                src={profileImage}
                height='32px'
                width='32px'
                borderRadius='50%'
                sx={{ objectFit: 'cover' }}
              /> */}
              <Box textAlign='left'>
                <Typography
                  fontWeight='bold'
                  fontSize='0.85rem'
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  User
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
