import React, { useEffect, useState } from 'react';
import {
  ListItem,
  Typography,
  useTheme,
  InputBase,
  IconButton,
  useMediaQuery,
  List,
  Collapse,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import FlexBetween from '../flexBetween/FlexBetween';
import { useTranslation } from 'react-i18next';

const ResponsiveNavMenu = (props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const {
    navItem = [],
    isActive,
    isMenuOpen,
    handleActiveClick,
    handleToggle,
  } = props;
  const [menuOpen, setmenuOpen] = useState(false);

  const isScreenSizeSM = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setmenuOpen(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setmenuOpen(false);
    handleToggle(false);
  }, [isScreenSizeSM]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Collapse in={menuOpen && isScreenSizeSM}>
      <div
        style={{
          display: 'flex',
          padding: '16px',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius='5px'
            gap='3rem'
            p='var(--borderRadius, 4px) 0px var(--borderRadius, 4px) 16px'
          >
            <InputBase placeholder='Company name or symbol...' fullWidth />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {navItem?.map((items) => (
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
                   {t(items?.item)}
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
        </div>
      </div>
    </Collapse>
  );
};

export default ResponsiveNavMenu;
