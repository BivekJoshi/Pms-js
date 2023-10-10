import React from 'react';
import {
  TextField,
  IconButton,
  Checkbox,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';
import { Grid, Box, MenuItem, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useSelector } from 'react-redux';
import { useLoginForm } from '../../form/auth/login/useLoginForm';
import { useNavigate } from 'react-router-dom';
import CheckStatus from '../../assets/checkStatus.png';
import Bear from '../../assets/bull--.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const brokerOption = useSelector((state) => state.brokerList.brokerOption);
  const isLoading = useSelector((state) => state.brokerList.processing);

  const {
    formik,
    showValues,
    loading,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useLoginForm();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <Box
      className='paddingOuter'
      padding={{ xs: '20px', sm: '96px 22px' }}
      boxShadow='0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)'
      width={{ xs: '90%', sm: '80%' }}
      bgcolor='#fdf8fd'
      borderRadius='32px'
      position='relative'
      alignSelf='center'
    >
      <img
        src={Bear}
        alt='bear--.png'
        style={{ position: 'absolute', left: '140px', top: '80px' }}
      />
      <Grid padding={{ sm: '2rem', xs: '0' }} className='paddingOuterLayer'>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='start'
          paddingBottom='2.5rem'
        >
          <div style={{ color: '#875923' }} className='displayLarge'>
            Log In
          </div>
          <div className='title1624'>your account to continue</div>
        </Grid>
        <Grid
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
            {isLoading ? (
              <MenuItem disabled>
                <CircularProgress size={24} />
                <Typography sx={{ ml: 2 }}>Loading Broker List</Typography>
              </MenuItem>
            ) : (
              brokerOption?.map((option) => (
                <MenuItem key={option?.id} value={option?.id}>
                  {option?.name}
                </MenuItem>
              ))
            )}
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
            InputLabelProps={{
              shrink: formik.values.email,
            }}
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
            sx={{ minWidth: '10vw', mt: 1 }}
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
          <Grid>
            <Grid
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              paddingBottom='.5rem'
            >
              <Grid
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Checkbox defaultChecked sx={{ padding: '0' }} />
                <div className='bodySmall ' fontSize='12px'>
                  Remember me
                </div>
              </Grid>
              <div
                className='bodySmall'
                onClick={() => navigate('/reset/password')}
                style={{ color: '#3838D0', cursor: 'pointer' }}
              >
                Forgot password?
              </div>
            </Grid>
            <Grid>
              <Button
                component='label'
                variant='outlined'
                color='info'
                sx={{ color: '#000000', textTransform: 'none' }}
                startIcon={<img src={CheckStatus} alt='CheckStatus' />}
                onClick={() => navigate('/application/status')}
              >
                Check Status
              </Button>
            </Grid>
          </Grid>
          <LoadingButton
            className='titleMedium '
            fullWidth
            onClick={() => formik.submitForm()}
            variant='contained'
            loading={loading}
            sx={{
              background: '#6750a4',
            }}
          >
            <div className='titleMedium ' style={{ margin: '.25rem 0' }}>
              Login
            </div>
          </LoadingButton>
        </Grid>
        <Grid sx={{ textAlign: 'center' }} marginTop='.5rem'>
          <div className='bodySmall '>
            Don't have an account?
            <span
              className='labelMedium'
              style={{ color: '#3838d0', cursor: 'pointer' }}
              onClick={handleClick}
            >
              Sign Up
            </span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
