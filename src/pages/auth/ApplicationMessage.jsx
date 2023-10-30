import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StatusSuccess from '../../assets/statusSuccess.png';
import Success from '../../assets/success.png';
import Pending from '../../assets/pending.png';

const ApplicationMessage = () => {
  const history = useNavigate();
  const { status } = useParams();
  console.log(
    '🚀 ~ file: ApplicationMessage.jsx:11 ~ ApplicationMessage ~ status:',
    status
  );

  const handleClick = () => {
    history('/login');
  };
  return (
    <Box
      zIndex='1'
      bgcolor='#FCFCFC'
      boxShadow='0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)'
      padding='20px 50px'
      position='relative'
      display='flex'
      flexDirection='column'
      textAlign='center'
      borderRadius='32px'
    >
      <h3 className='headlineMedium' style={{ margin: '0' }}>
        Message Status
      </h3>

      {/* status verified */}
      {/* <Grid style={{ textAlign: "-webkit-center" }}>
        <img
          src={StatusSuccess}
          alt="Status Success"
          width="50%"
          style={{ alignSelf: "center" }}
        />
        <div className="bodyMedium">Your application is verified. </div>
        <div className="bodyMedium" fontSize="14px">
          Thank you.
        </div>
        <Box height="54px"></Box>
        <div className="bodySmall">
          Already have an account?
          <span
            className=" labelMedium"
            onClick={handleClick}
            style={{ color: "#3838d0", cursor: "pointer" }}
          >
            Sign In
          </span>
        </div>
      </Grid> */}

      {/* Approved State */}
      {/* <Grid style={{ textAlign: "-webkit-center" }}>
        <img
          src={Success}
          alt="Status Success"
          width="50%"
          style={{ alignSelf: "center" }}
        />
        <div className="bodyMedium">
          Your application is in "Successful State".{" "}
        </div>
        <div className="bodyMedium" fontSize="14px">
          Thank you.
        </div>
        <Box height="54px"></Box>
        <div className="bodySmall">
          Already have an account?
          <span
            className=" labelMedium"
            onClick={handleClick}
            style={{ color: "#3838d0", cursor: "pointer" }}
          >
            Sign In
          </span>
        </div>
      </Grid> */}

      {/* Pending State */}
      <Grid style={{ textAlign: '-webkit-center' }}>
        <img
          src={Pending}
          alt='Status Success'
          // width="50%"
          style={{ alignSelf: 'center' }}
        />
        <div className='bodyMedium'>
          Your application is in "Pending State".{' '}
        </div>
        <div className='bodyMedium' fontSize='14px'>
          Please wait shortly.
        </div>
        <Box height='54px'></Box>
        <div className='bodySmall'>
          Already have an account?
          <span
            className=' labelMedium'
            onClick={handleClick}
            style={{ color: '#3838d0', cursor: 'pointer' }}
          >
            Sign In
          </span>
        </div>
      </Grid>
    </Box>
  );
};

export default ApplicationMessage;
