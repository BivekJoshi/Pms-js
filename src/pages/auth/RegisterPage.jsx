import React from 'react';
import TextField from '@mui/material/TextField';
import {
  Box,
  MenuItem,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { LoadingButton } from '@mui/lab';
import { useSelector } from 'react-redux';
import { useRegisterForm } from '../../form/auth/register/useRegisterForm';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const RegisterPage = () => {
  const brokerOption = useSelector((state) => state.brokerList.brokerOption);

  const { formik, loading } = useRegisterForm();

  const handleClick = () => {
    history('/register');
  };

  return (
    <>
      <Box
        sx={{
          padding: '2rem 2rem',
        }}
      >
        <Box
          className='mb-2'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            color='#875923'
            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700' }}
            variant='h6'
          >
            Sign Up
          </Typography>
          <Typography variant='p'>your account to continue</Typography>
        </Box>
        <Box
          component='form'
          noValidate
          sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <TextField
            id='brokerNo'
            select
            name='brokerNo'
            label='Select Broker'
            placeholder='Choose Broker No.'
            fullWidth
            value={formik.values.brokerNo}
            onChange={formik.handleChange}
            error={formik.touched.brokerNo && Boolean(formik.errors.brokerNo)}
            helperText={formik.touched.brokerNo && formik.errors.brokerNo}
            variant='outlined'
          >
            {brokerOption?.map((option) => (
              <MenuItem key={option?.id} value={option?.id}>
                {option?.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            value={formik.values.nepseCode}
            onChange={formik.handleChange}
            error={formik.touched.nepseCode && Boolean(formik.errors.nepseCode)}
            helperText={formik.touched.nepseCode && formik.errors.nepseCode}
            name='nepseCode'
            label='Enter NEPSE Code'
            fullWidth
            variant='outlined'
            type='text'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <PermIdentityOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            name='email'
            autoComplete='username'
            label='E-mail'
            fullWidth
            variant='outlined'
            type='text'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            value={formik.values.mobileNo}
            onChange={formik.handleChange}
            error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
            helperText={formik.touched.mobileNo && formik.errors.mobileNo}
            name='mobileNo'
            label='Enter your number'
            fullWidth
            variant='outlined'
            type='number'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <CallOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

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
            Sign Up
          </LoadingButton>
        </Box>
        <Box style={{ textAlign: 'center' }}>
          <Typography variant='p'>
            Already have an account?{' '}
            <span
              style={{ color: '#3838d0', cursor: 'pointer' }}
              onClick={handleClick}
            >
              Sign In
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default RegisterPage;
