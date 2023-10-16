import React from 'react';
import ErrorPhoto from '../../assets/ErrorPage.jpg';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ErrorPage = () => {
  const navigate = useNavigate();
  const brokerOption = useSelector((state) => state.brokerList.brokerOption);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        // backgroundColor:"#EBEDEF"
      }}
    >
      <img
        style={{ height: '500px', width: '500px' }}
        src={ErrorPhoto}
        alt='Error page'
      />
      {brokerOption !== null && (
        <Button
          variant='contained'
          style={{ backgroundColor: '#6C49B4' }}
          onClick={() => navigate('/login')}
        >
          Go to Home
        </Button>
      )}
      <br />
      <Typography variant='h5' color='grey'>
        Page Not Found
      </Typography>
      <Typography variant='h6' color='grey'>
        The Page you are looking for doesnot exist or an other error occurred.
      </Typography>
    </div>
  );
};

export default ErrorPage;
