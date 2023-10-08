import React, { useState } from 'react';
import {
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import DarkModeSetting from '../Setting/DarkModeSetting';
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
  List,
  ListItem,
  Drawer,
} from '@mui/material';
import FlexBetween from '../flexBetween/FlexBetween';
import { useDispatch } from 'react-redux';
// import { TOGGLE_THEME } from '../../redux/reducers/themeReducer';
import logo from '../../assets/logo.png';
import { logout } from '../../utility/logout';
import { useNavigate } from 'react-router';

const navItems = [
  {
    id: 1,
    item: 'Home',
  },
  {
    id: 2,
    item: 'Portfolio',
  },
  {
    id: 3,
    item: 'Watchlist',
  },
  {
    id: 4,
    item: 'Alert',
  },
  {
    id: 5,
    item: 'Research',
  },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [isActive, setIsActive] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch({ type: 'LOGOUT' });
    logout();
    navigate('/login');
  };
  const handleToggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  const handleActiveClick = (id) => {
    setIsActive(id);
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* RIGHT side */}
        <img src={logo} alt='Logo' style={{ width: '104px', height: '36px' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '6rem' }}>
          {/* Middle SIDE */}
          <FlexBetween>
            {navItems.map((items) => (
              <List key={items?.id} sx={{ position: 'relative' }}>
                <ListItem sx={{ position: 'relative' }}>
                  <Typography
                    onClick={() => handleActiveClick(items?.id)}
                    sx={{
                      cursor: 'pointer',
                      color: isActive === items.id ? 'blue' : 'black',
                      fontWeight: isActive === items.id ? 'bold' : 'normal',
                    }}
                    variant='h6'
                  >
                    {items?.item}
                    {isActive === items.id && (
                      <div
                        style={{
                          position: 'absolute',
                          width: '50%',
                          height: '0.1rem',
                          background: 'blue',
                        }}
                      ></div>
                    )}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </FlexBetween>

          {/* RIGHT SIDE */}
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

          <FlexBetween gap='1.5rem'>
            {/* <IconButton onClick={() => handleToggleTheme()}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ fontSize: "25px" }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: '25px' }} />
              )}
            </IconButton> */}

            <div>
              <React.Fragment>
                <IconButton onClick={toggleDrawer('right', true)}>
                  <SettingsOutlined sx={{ fontSize: '25px' }} />
                </IconButton>
                <Drawer
                  anchor='right'
                  open={state['right']}
                  onClose={toggleDrawer('right', false)}
                >
                  <DarkModeSetting onClose={toggleDrawer('right', false)} />
                </Drawer>
              </React.Fragment>
            </div>

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
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              >
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </FlexBetween>
          </FlexBetween>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
