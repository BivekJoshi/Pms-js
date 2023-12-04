import React, { useEffect, useState } from 'react';
import {
  SettingsOutlined,
  Menu as MenuIcon,
  MenuOpen,
} from '@mui/icons-material';
import DarkModeSetting from '../Setting/DarkModeSetting';
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  useTheme,
  List,
  ListItem,
  Drawer,
  TextField,
  Autocomplete,
  Tooltip,
  Grid,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FlexBetween from '../flexBetween/FlexBetween';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router';
import ResponsiveNavMenu from './ResponsiveMenu';
import { useGetListedCompanies } from '../../hooks/watchList/useWatchList';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LiveIndicator from '../liveIndicator/LiveIndicator';
import { useGetUserChildDetail } from '../../hooks/portfolio/usePortfolio';
import { useSelector } from 'react-redux';
import CustomizedSwitches from '../switch/NotificationSwitch';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { t } from 'i18next';

const NavabarProfile = React.lazy(() => import('./NavabarProfile'));

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
    subLinks: [
      { id: 7, item: t('Markets'), path: '/research/markets' },
      { id: 8, item: t('Sectors'), path: '/research/sectors' },
      { id: 9, item: t('Company'), path: '/research/company' },
      {
        id: 10,
        item: t('Screener'),
        path: '/research/screener',
        subLinks: [
          {
            id: 11,
            item: t('Fundamental Screener'),
            path: '/research/screener/fundamental',
          },
          {
            id: 11,
            item: t('Technical Screener'),
            path: '/research/screener/technical',
          },
          {
            id: 11,
            item: t('End of the day Screener'),
            path: '/research/screener/end-of-day',
          },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scriptValue, setscriptValue] = useState({ companyInfo: '' });
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: listedCompanies } = useGetListedCompanies();
  const { data: childDetailData } = useGetUserChildDetail();
  const themeMode = useSelector((state) => state.theme?.mode);
  const { pathname = '' } = useLocation();
  console.log('🚀 ~ file: Navbar.jsx:106 ~ pathname:', pathname);
  const marketOpen = false;

  const [submenuAnchors, setSubmenuAnchors] = useState({});
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (isNavigating) {
      setSubmenuAnchors({});
      setIsMenuOpen(false);
      setIsNavigating(false);
    }
  }, [isNavigating]);
  const handleDropdownToggle = (event, itemId) => {
    if (submenuAnchors[itemId]) {
      setSubmenuAnchors((prevAnchors) => ({ ...prevAnchors, [itemId]: null }));
    } else {
      // Open the submenu
      setSubmenuAnchors((prevAnchors) => ({
        ...prevAnchors,
        [itemId]: event.currentTarget,
      }));
    }
  };

  const handleDropdownClose = () => {
    setSubmenuAnchors({});
  };

  const handleActiveClick = (path, child) => {
    if (!child) {
      setIsNavigating(true);
      navigate(`${path}`);
    }

    if (!path.includes('/company/')) setscriptValue({ companyInfo: '' });
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

  const renderSubmenu = (subLinks, parentId) => {
    return (
      <Menu
        anchorEl={submenuAnchors[parentId]}
        open={Boolean(submenuAnchors[parentId])}
        onClose={handleDropdownClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {subLinks.map((subLink, i) => (
          <MenuItem
            key={i}
            onClick={(e) => {
              if (subLink?.subLinks) {
                handleDropdownToggle(e, subLink.id);
              } else {
                handleActiveClick(subLink?.path, subLink?.subLinks);
              }
            }}
          >
            <Typography
              sx={{
                position: 'relative',
                cursor: 'pointer',
                color:
                  pathname.startsWith(subLink.path) ||
                  (subLink.subLinks &&
                    subLink.subLinks.some((childSubLink) =>
                      pathname.startsWith(childSubLink.path)
                    ))
                    ? theme.palette.text.main
                    : theme.palette.text.main,
                fontWeight:
                  pathname.startsWith(subLink.path) ||
                  (subLink.subLinks &&
                    subLink.subLinks.some((childSubLink) =>
                      pathname.startsWith(childSubLink.path)
                    ))
                    ? 'bold'
                    : 'normal',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  bottom: '10%',
                  left: '0%',
                  width: '70%',
                  height: '2px',
                  backgroundColor:
                    pathname.startsWith(subLink.path) ||
                    (subLink.subLinks &&
                      subLink.subLinks.some((childSubLink) =>
                        pathname.startsWith(childSubLink.path)
                      ))
                      ? 'blue'
                      : 'transparent',
                },
              }}
              variant='h6'
            >
              {t(subLink?.item)}
            </Typography>
            {subLink.subLinks && <KeyboardArrowRightIcon />}
            {subLink.subLinks && renderSubmenu(subLink.subLinks, subLink.id)}
          </MenuItem>
        ))}
      </Menu>
    );
  };

  return (
    <AppBar
      style={{
        position: 'sticky',
        top: 0,
        boxShadow:
          'rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset',
        background:
          theme.palette.mode === 'light'
            ? theme.palette.background.alt
            : theme.palette.primary[700],
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
                display: { sm: 'none', md: 'block', xs: 'none' },
                // Add additional styling as needed
              }}
            >
              <ListItem>
                <div style={{ display: 'flex' }}>
                  <List
                    onClick={(event) => {
                      handleDropdownToggle(event, items.id);
                      handleActiveClick(items?.path, items?.subLinks);
                    }}
                    sx={{
                      cursor: 'pointer',
                      color:
                        pathname.startsWith(items.path) || // Check if the path starts with the item path
                        (items.subLinks &&
                          items.subLinks.some((subLink) =>
                            pathname.startsWith(subLink.path)
                          )) // Check if any sublink path starts with the current path
                          ? theme.palette.text.main
                          : theme.palette.text.main,
                      fontWeight:
                        pathname.startsWith(items.path) ||
                        (items.subLinks &&
                          items.subLinks.some((subLink) =>
                            pathname.startsWith(subLink.path)
                          ))
                          ? 'bold'
                          : 'normal',
                      '&:hover': {
                        transform: 'scale(1.2)',
                        transition: 'transform 0.2s ease-in-out',
                        fontWeight: 'bold',
                      },
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        bottom: '10%',
                        left: '0%',
                        width: '70%',
                        height: '2px',
                        backgroundColor:
                          pathname.startsWith(items.path) ||
                          (items.subLinks &&
                            items.subLinks.some((subLink) =>
                              pathname.startsWith(subLink.path)
                            ))
                            ? 'blue'
                            : 'transparent',
                      },
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {t(items?.item)}
                    {items?.subLinks && (
                      <KeyboardArrowDownIcon
                        sx={{
                          color: theme.palette.primary.alt,
                          marginLeft: '0.1rem',
                        }}
                      />
                    )}
                  </List>
                  {items?.subLinks && renderSubmenu(items.subLinks, items.id)}
                </div>
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
            value={scriptValue ? scriptValue : null}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                placeholder={t('Company name or symbol')}
                variant='outlined'
                // autoFocus
                size='small'
                InputLabelProps={{ shrink: true }}
                style={{
                  minWidth: '150px',
                  // backgroundColor: theme.palette.background.default,
                }}
              />
            )}
            onChange={(event, value) => {
              if (value) {
                setscriptValue(value);
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
          <IconButton>
            <NotificationsNoneIcon sx={{ fontSize: '25px' }} />
          </IconButton>

          <NavabarProfile childDetailData={childDetailData} />

          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleMenu}
            sx={{
              display: { sm: 'block', md: 'none', xs: 'block' }, // Show on small screens
              color: themeMode === 'dark' ? '#fff' : '#0000008a',
            }}
          >
            {isMenuOpen ? (
              <MenuOpen sx={{ fontSize: '25px' }} />
            ) : (
              <MenuIcon sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
        </FlexBetween>
      </Toolbar>

      <ResponsiveNavMenu
        isMenuOpen={isMenuOpen}
        navItem={navItems}
        handleActiveClick={(id, path) => handleActiveClick(id, path)}
        handleToggle={(val) => setIsMenuOpen(val)}
        symbols={symbols}
        scriptValue={scriptValue}
        handelScriptChange={(val) => setscriptValue(val)}
      />
    </AppBar>
  );
};

export default Navbar;
