import Timer from '../../components/timer/Timer';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { useVerificationForm } from '../../form/auth/verification/useVerificationForm';
import OtpInput from 'react-otp-input';
import { LoadingButton } from '@mui/lab';
import { useParams } from 'react-router-dom';

const Verification = () => {
  const [otp, setOtp] = useState('');
  const { id } = useParams();
  console.log(id);
  
  const {
    formik,
    loading,
  } = useVerificationForm(id);

  const handleClick = () => {
    console.log("resend code")
  };
  
  return (
    <div>
      <Typography variant='h4' className='text-light-primary'>Verification Code</Typography>
      <Typography variant='p'>We have sent the 6 digit Verification code to your mobile number and E-mail. Please check.</Typography>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>&nbsp; &nbsp;</span>}
      renderInput={(props) => (<input {...props} className='bg-light-verification ' />)}
      isInputNum={true}
    />
      <TimerOutlinedIcon /><Timer />
      <LoadingButton
            fullWidth
            onClick={() => formik.submitForm()}
            variant='contained'
            loading={loading}
            sx={{
              mt: 2,
              mb: 2,
              textTransform: 'none',
              fontWeight: 600,
              background: '#6750a4',
            }}
          >
            Verify Code
          </LoadingButton>
          <Box sx={{ textAlign: 'center' }}>
          <Typography variant='p'>
            Not received your code?
            <span
              style={{ color: '#3838d0', cursor: 'pointer' }}
              onClick={handleClick}
            >
              Resend Code
            </span>
          </Typography>
        </Box>
    </div>
  );
};

export default Verification;