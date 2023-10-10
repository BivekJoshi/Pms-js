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
import NavabarProfile from './NavabarProfile';

const navItems = [
  {
    id: 1,
    item: 'Home',
    path: '/dashboard',
  },
  {
    id: 2,
    item: 'Portfolio',
    path: '/portfolio',
  },
  {
    id: 3,
    item: 'Watchlist',
    path: '/watchlist',
  },
  {
    id: 4,
    item: 'Alert',
    path: '/alert',
  },
  {
    id: 5,
    item: 'Research',
    path: 'research',
  },
];

const Navbar = () => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(null);
  const navigate = useNavigate();

  const handleActiveClick = (id, path) => {
    setIsActive(id);
    navigate(`${path}`);
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
        background: theme.palette.background.light,
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* RIGHT side */}
        <img src={logo} alt='Logo' style={{ width: '104px', height: '36px' }} />

        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Middle SIDE */}
          <FlexBetween>
            {navItems.map((items) => (
              <List key={items?.id} sx={{ position: 'relative' }}>
                <ListItem sx={{ position: 'relative' }}>
                  <Typography
                    onClick={() => handleActiveClick(items?.id, items?.path)}
                    sx={{
                      cursor: 'pointer',
                      color:
                        isActive === items.id
                          ? theme.palette.text.main
                          : theme.palette.text.main,
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
            backgroundColor={theme.palette.background.light}
            borderRadius='9px'
            gap='3rem'
            p='0.1rem 1.5rem'
          >
            <InputBase placeholder='Company name or symbol...' />
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

            <NavabarProfile />
          </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
