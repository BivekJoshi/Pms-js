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
import { useApplicationForm } from '../../form/auth/application/useApplicationForm';

const ApplicationPage = () => {
  const { formik, loading } = useApplicationForm();

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
            Application Status
          </Typography>
          <Typography variant='p'>view your status</Typography>
        </Box>
        <Box
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
              formik.touched.submissionNo &&
              Boolean(formik.errors.submissionNo)
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
            loading={loading}
            sx={{
              mt: 2,
              mb: 2,
              textTransform: 'none',
              fontWeight: 600,
              background: '#6750a4',
            }}
          >
            Check Now
          </LoadingButton>
        </Box>
        <Box style={{ textAlign: 'center' }}>
          <Typography variant='p'>
            Already have an account?
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

export default ApplicationPage;
