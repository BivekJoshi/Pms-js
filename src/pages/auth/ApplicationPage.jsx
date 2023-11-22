import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Grid, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { LoadingButton } from '@mui/lab';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useApplicationForm } from '../../form/auth/application/useApplicationForm';
import AppStatus from '../../assets/appstatus.png';
import { useNavigate } from 'react-router';

const ApplicationPage = () => {
  const { formik, loading } = useApplicationForm();
  const history = useNavigate();

  const handleClick = () => {
    history('/login');
  };

  return (
    <Box
      className='paddingOuter'
      position='relative'
      alignSelf='center'
      padding={{ xs: '0 20px 20px 20px', md: '50px 22px 96px 22px' }}
      boxShadow='0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)'
      width={{ xs: '90%', sm: '80%' }}
      bgcolor='#fdf8fd'
      borderRadius='32px'
    >
      <Grid padding={{ sm: '2rem', xs: '0' }} className='paddingOuterLayer'>
        <Grid
          display='flex'
          justifyContent='center'
          paddingBottom={{ lg: '2rem', md: '1rem', xs: '.25rem' }}
        >
          <img src={AppStatus} alt='appstatus.png' className='registerImg' />
        </Grid>

        <Grid
          display='flex'
          flexDirection='column'
          alignItems='start'
          paddingBottom='2.5rem'
        >
          <div style={{ color: '#875923' }} className='displayLarge'>
            Application Status
          </div>
          <div className='title1624'>view your status</div>
        </Grid>
        <Grid
          component='form'
          noValidate
          sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
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
            value={formik.values.submissionNo}
            onChange={formik.handleChange}
            error={
              formik.touched.submissionNo && Boolean(formik.errors.submissionNo)
            }
            helperText={
              formik.touched.submissionNo && formik.errors.submissionNo
            }
            name='submissionNo'
            label='Enter your Submission number'
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
            disabled={!formik.isValid}
            loading={loading}
            sx={{
              mt: 2,
              mb: 2,
              textTransform: 'none',
              fontWeight: 600,
              background: '#6750a4',
            }}
          >
            <div className='titleMedium ' style={{ margin: '.25rem 0' }}>
              CHECK NOW
            </div>
          </LoadingButton>
        </Grid>
        <Box style={{ textAlign: 'center' }} marginTop='.5rem'>
          <div className='bodySmall '>
            Already have an account?{' '}
            <span
              className='labelMedium '
              style={{ color: '#3838d0', cursor: 'pointer' }}
              onClick={handleClick}
            >
              Sign In
            </span>
          </div>
        </Box>
      </Grid>
    </Box>
  );
};

export default ApplicationPage;
