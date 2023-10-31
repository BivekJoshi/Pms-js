import React, { useState } from 'react';
import {
  Search,
  SettingsOutlined,
  Menu as MenuIcon,
} from '@mui/icons-material';
import DarkModeSetting from '../Setting/DarkModeSetting';
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
  Tooltip,
  Grid,
} from '@mui/material';

import FlexBetween from '../flexBetween/FlexBetween';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router';
import NavabarProfile from './NavabarProfile';
import ResponsiveNavMenu from './ResponsiveMenu';
import { useGetListedCompanies } from '../../hooks/watchList/useWatchList';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LiveIndicator from '../liveIndicator/LiveIndicator';

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
    path: '/research',
  },
];

const Navbar = () => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: listedCompanies } = useGetListedCompanies();
  const { pathname = '' } = useLocation();
  const marketOpen = false;
  const handleActiveClick = (path) => {
    navigate(`${path}`);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const [state, setState] = React.useState({
    right: false,
    drawerOpen: false,
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

  // const textFieldStyle = {
  //   width: "320px",
  // };

  // if (theme.breakpoints.down("xs")) {
  //   textFieldStyle.width = "100px"; // Extra small screens
  // } else if (theme.breakpoints.down("sm")) {
  //   textFieldStyle.width = "200px"; // Small screens
  // } else if (theme.breakpoints.down("md")) {
  //   textFieldStyle.width = "250px"; // Medium screens
  // } else if (theme.breakpoints.down("lg")) {
  //   textFieldStyle.width = "300px"; // Large screens
  // }

  return (
    <AppBar
      style={{
        position: 'sticky',
        top: 0,
        boxShadow:
          'rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset',
        background: theme.palette.background.alt,
        color: 'black',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img
          src={logo}
          alt='Logo'
          width='104px'
          height='36px'
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/dashboard')}
        />

        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Middle SIDE */}
        <FlexBetween>
          {navItems.map((items) => (
            <List
              key={items?.id}
              sx={{
                position: 'relative',
                display: { sm: 'none', md: 'block', xs: 'none' }, // Hide on small screens
              }}
            >
              <ListItem sx={{ position: 'relative' }}>
                <Typography
                  onClick={() => handleActiveClick(items?.path)}
                  sx={{
                    cursor: 'pointer',
                    color:
                      pathname === items.path
                        ? theme.palette.text.main
                        : theme.palette.text.main,
                    fontWeight: pathname === items.path ? 'bold' : 'normal',
                    '&:hover': {
                      backgroundColor: theme.palette.background.hover,
                      borderRadius: '.5rem',
                      padding: '4px',
                    },
                  }}
                  variant='h6'
                >
                  {t(items?.item)}
                  {pathname === items.path && (
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

        <Grid
          sx={{
            width: '100%',
            maxWidth: '300px',
            display: { md: 'block', xs: 'none' },
            margin: { md: '0 32px', sm: '0px' },
          }}
        >
          <Autocomplete
            name='script'
            fullWidth
            options={symbols}
            getOptionLabel={(option) => option?.companyInfo}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                placeholder={t('Company name or symbol')}
                variant='outlined'
                autoFocus
                size='small'
                InputLabelProps={{ shrink: true }}
                style={{ minWidth: '150px' }}
              />
            )}
            onChange={(event, value) => {
              if (value) {
                navigate(`/company/${value?.symbol}`);
              }
            }}
          />
        </Grid>

        <Tooltip title={'Market ' + (marketOpen ? 'Open' : 'Closed')}>
          <div>
            <LiveIndicator open={marketOpen} />
          </div>
        </Tooltip>

        <FlexBetween gap='12px'>
          <div>
            <React.Fragment>
              <Tooltip title='App settings'>
                <IconButton onClick={toggleDrawer('right', true)}>
                  <SettingsOutlined sx={{ fontSize: '25px' }} />
                </IconButton>
              </Tooltip>
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

          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleMenu}
            sx={{
              display: { sm: 'block', md: 'none', xs: 'block' }, // Show on small screens
            }}
          >
            <MenuIcon />
          </IconButton>
        </FlexBetween>
      </Toolbar>

      <ResponsiveNavMenu
        isMenuOpen={isMenuOpen}
        navItem={navItems}
        handleActiveClick={(id, path) => handleActiveClick(id, path)}
        handleToggle={(val) => setIsMenuOpen(val)}
      />
    </AppBar>
  );
};

export default Navbar;
