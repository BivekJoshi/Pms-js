import { useTheme } from '@emotion/react';
import { Box, Button, Grid, List, ListItem } from '@mui/material';
import { Switch, Typography } from '@mui/material';
import React from 'react';

const ProfileNotification = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start'>
      <List
        sx={{
          width: '100%',
          bgcolor: theme.palette.background.alt,
          paddingTop: '0',
        }}
        // color={theme.palette.text.main}
      >
        <ListItem className='notificationBg'>
          <Typography color='white' pr='16px'>
            Website
          </Typography>
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            <Typography>IPO/FPO</Typography>(Announce, Opening date and Closing
            Date)
          </Grid>
          <Switch defaultChecked />
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            <Typography>Right Share</Typography>(Declare, a day before Book
            Close Date)
          </Grid>
          <Switch defaultChecked />
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            <Typography>Dividend</Typography>(Declare and a day before Book
            Close date)
          </Grid>
          <Switch />
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            <Typography>Auction </Typography>(Declare and Opening Date)
          </Grid>
          <Switch />
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            <Typography>Bond/Debenture </Typography>(Opening date and Closing
            Date){' '}
          </Grid>
          <Switch defaultChecked />
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            <Typography>AGM/SGM </Typography>(Announce and Joint Transaction
            date){' '}
          </Grid>{' '}
          <Switch defaultChecked />
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            <Typography>Merger/ Acquisition </Typography>(Announce and Joint
            Transaction date)
          </Grid>
          <Switch defaultChecked />
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            Financial Reports{' '}
          </Grid>
          <Switch defaultChecked />
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            Newsletter
          </Grid>
          <Switch defaultChecked />
        </ListItem>
        <ListItem className='notificationSwitch'>
          <Grid display='flex' flexDirection='column'>
            <Typography>General </Typography>(New feature/ updates)
          </Grid>
          <Switch defaultChecked />
        </ListItem>
      </List>
      <Grid
        display='flex'
        flexDirection='row'
        justifyContent='right'
        p='32px 6px'
        gap='16px'
        alignSelf='end'
      >
        <Button
          variant='outlined'
          style={{
            color: mode === 'light' ? theme.palette.text.main : 'white',
            border: mode === 'light' ? '1px solid black' : '1px solid White',
          }}
        >
          Reset
        </Button>
        <Button
          style={{
            background: '#6C49B4',
            color: mode === 'light' ? 'white' : theme.palette.text.main,
          }}
        >
          Set Notification
        </Button>
      </Grid>
    </Box>
  );
};

export default ProfileNotification;
