import React, { useState } from 'react';
import { Box, Button, Grid, Tab, Typography } from '@mui/material';
import { Tabs, useTheme } from '@mui/material';
import profile from '../../assets/profilePicture.png';
import Camera from '../../assets/camera.png';
import UpdateProfile from '../../assets/UpdateProfile.png';
import Notification from '../../assets/Notification.png';
import Subscription from '../../assets/Subscription.png';
import Security from '../../assets/Security.png';
import Transaction from '../../assets/Transaction.png';
import Bills from '../../assets/Bill.png';
import Statements from '../../assets/Statement.png';
import Payment from '../../assets/Payment.png';
import Terms from '../../assets/Terms.png';
import Update from '../../assets/Update.png';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ProfileInfo from './ProfileTab/ProfileInfo';
import ForgetPassword from './ProfileTab/ForgetPassword';
import SubscriptionTab from './SubscriptionTab/SubscriptionTab';
import Research from '../research/Research';
import Transactions from './transaction/Transactions';
import Bill from './bill/Bill';
import ReceiptPayment from './receipt-payment/ReceiptPayment';
import Statement from './statement/Statement';
import { useSelector } from 'react-redux';

const Profile = () => {
  const theme = useTheme();
  const [value, setValue] = useState('1');

  const userDetail = useSelector((store) => store.user.details);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      display='grid'
      gridTemplateColumns='2fr 10fr'
      gap='1rem'
      mt='1.8rem'
      color={theme.palette.text.main}
    >
      <TabContext value={value}>
        <Grid display='flex' flexDirection='column' gap='24px' width='344px' >
          <Grid
            display='flex'
            flexDirection='row'
            color={theme.palette.text.main}
            bgcolor={theme.palette.background.alt}
            alignItems='center'
            gap='2rem'
            height='136px'
            justifyContent='space-evenly'
            borderRadius='4px'
            position='relative'
          >
            <img
              src={profile}
              alt='statusSuccess.png'
              height='135px'
              width='135px'
              style={{ borderRadius: '312.5px' }}
            />
            <img
              src={Camera}
              alt='Camera'
              style={{ position: 'absolute', bottom: '1rem', left: '3.7rem' }}
            />
            <Grid display='flex' flexDirection='column' gap='8px'>
              <Typography variant='h4'>{userDetail?.clientName}</Typography>
              <Typography variant='h7'>{userDetail?.email}</Typography>
              <Typography variant='h7'>{userDetail?.mobileNo}</Typography>
              <Button
                sx={{
                  bgcolor: '#FFDCBC',
                  border: '1px solid #7A757F',
                  borderRadius: '4px',
                  width: '60px',
                  height: '20px',
                  color: 'black',
                }}
              >
                Basic
              </Button>
            </Grid>
          </Grid>
          <Grid
            p='24px'
            bgcolor={theme.palette.background.alt}
            display='flex'
            flexDirection='column'
            gap='20px'
            borderRadius='8px'
            width='100%'
          >
            <Grid display='flex' flexDirection='column'>
              <Typography variant='h4' p='12px 0'>
                General
              </Typography>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label='lab API tabs example'
                sx={{ display: 'flex', flexDirection: 'column' }}
                orientation='vertical'
              >
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={UpdateProfile} alt='UpdateProfile' />
                      <Typography variant='h7'>Update Profile</Typography>
                    </Grid>
                  }
                  value='1'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    padding: '.2',
                    backgroundColor:
                      value === '1'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={Notification} alt='UpdateProfile' />
                      <Typography variant='h7'>
                        Notification Configuration
                      </Typography>
                    </Grid>
                  }
                  value='2'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    padding: '.2',
                    backgroundColor:
                      value === '2'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={Subscription} alt='UpdateProfile' />
                      <Typography variant='h7'>Subscription</Typography>
                    </Grid>
                  }
                  value='3'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    padding: '.2',
                    backgroundColor:
                      value === '3'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={Security} alt='UpdateProfile' />
                      <Typography variant='h7'>Change Password</Typography>
                    </Grid>
                  }
                  value='4'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    padding: '.2',
                    backgroundColor:
                      value === '4'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
              </Tabs>
            </Grid>
            <Grid display='flex' flexDirection='column'>
              <Typography variant='h4' p='12px 0'>
                Activities
              </Typography>
              <Tabs
                value={value}
                orientation='vertical'
                onChange={handleChange}
                aria-label='lab API tabs example'
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={Transaction} alt='UpdateProfile' />
                      <Typography variant='h7'>Transaction</Typography>
                    </Grid>
                  }
                  value='5'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    backgroundColor:
                      value === '5'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={Bills} alt='UpdateProfile' />
                      <Typography variant='h7'>Bill</Typography>
                    </Grid>
                  }
                  value='6'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    padding: '.2',
                    backgroundColor:
                      value === '6'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={Statements} alt='UpdateProfile' />
                      <Typography variant='h7'>Statement</Typography>
                    </Grid>
                  }
                  value='7'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    padding: '.2',
                    backgroundColor:
                      value === '7'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={Payment} alt='UpdateProfile' />
                      <Typography variant='h7'>Receipt/Payment</Typography>
                    </Grid>
                  }
                  value='8'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    padding: '.2',
                    backgroundColor:
                      value === '8'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
              </Tabs>
            </Grid>
            <Grid>
              <Typography variant='h4' p='12px 0'>
                More
              </Typography>
              <Tabs
                value={value}
                orientation='vertical'
                onChange={handleChange}
                aria-label='lab API tabs example'
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={Terms} alt='UpdateProfile' />
                      <Typography variant='h7'>Terms & Conditions</Typography>
                    </Grid>
                  }
                  value='9'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    padding: '.2',
                    backgroundColor:
                      value === '9'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
                <Tab
                  label={
                    <Grid className='profileIcon'>
                      <img src={Update} alt='UpdateProfile' />
                      <Typography variant='h7'>Privacy Policy</Typography>
                    </Grid>
                  }
                  value='10'
                  style={{
                    color: theme.palette.text.main,
                    height: '0',
                    alignItems: 'flex-start',
                    padding: '.2',
                    backgroundColor:
                      value === '10'
                        ? theme.palette.primary.main
                        : 'transparent',
                    borderRadius: '.5rem',
                  }}
                />
              </Tabs>
            </Grid>
          </Grid>
        </Grid>
        <TabPanel sx={{ p: 0 }} value='1'>
          <ProfileInfo />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='2'>
          Notification
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='3'>
          <SubscriptionTab />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='4'>
          <ForgetPassword />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='5'>
          <Transactions />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='6'>
          <Bill />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='7'>
          <Statement />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='8'>
          <ReceiptPayment />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='9'>
          Terms & Conditions
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='10'>
          Privacy & Policy
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Profile;
