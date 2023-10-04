import Timer from '../../components/timer/Timer';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import OtpInput from 'react-otp-input';

const Verification = () => {
  const [otp, setOtp] = useState('');
  
  return (
    <div>
      <Typography variant='h4' className='text-light-primary'>Verification Code</Typography>
      <Typography variant='p'>We have sent the 6 digit Verification code to your mobile number and E-mail. Please check.</Typography>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
      <TimerOutlinedIcon /><Timer />
    </div>
  );
};

export default Verification;