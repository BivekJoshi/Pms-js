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
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useSelector } from 'react-redux';
import { useLoginForm } from '../../form/auth/login/useLoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const history = useNavigate();
  const brokerOption = useSelector((state) => state.brokerList.brokerOption);

  const {
    formik,
    showValues,
    loading,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useLoginForm();

  const handleClick = () => {
    history('/register');
  };

  return (
    <>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '1.5rem',
            }}
            color='#875923'
          >
            Log In
          </Typography>
          <Typography variant='body2' color='#1e1e1e'>
            Your account to continue
          </Typography>
        </div>
        <Box
          component='form'
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
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
            sx={{ color: '#000' }}
          >
            {brokerOption?.map((option) => (
              <MenuItem key={option?.id} value={option?.id}>
                {option?.name}
              </MenuItem>
            ))}
          </TextField>
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
            variant='outlined'
            label='Password'
            name='password'
            autoComplete='current-password'
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                formik.handleSubmit();
                ev.preventDefault();
              }
            }}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            type={showValues.showPassword ? 'text' : 'password'}
            sx={{ minWidth: '10vw' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showValues.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
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
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Login
          </LoadingButton>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='body2'>
            Don't have an account?{' '}
            <span style={{ cursor: 'pointer' }} onClick={handleClick}>
              Sign Up
            </span>
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default LoginPage;
