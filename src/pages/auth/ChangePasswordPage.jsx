import React, { useState } from 'react';
import { Grid, TextField, IconButton, Typography, Tooltip } from '@mui/material';
import { Box, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import ResetPaassword from '../../assets/reset-Paassword.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useVerifyResetPasswordForm } from '../../form/auth/reset-password/useResetPasswordForm';
import Checkbox from '@mui/material/Checkbox';
import passwordValidation from './validation/passwordValidation';
import { useTranslation } from 'react-i18next';
import { useNewPasswordValidation, useRePasswordValidation } from '../profile/ProfileTab/changePassword/validation';

function Validation(props) {
  return (
    <>
      <div className={props.validated ? 'validated' : 'not-validated'}>
        <Typography
          variant='body1'
          gutterBottom
          sx={{ color: props.validated ? 'green' : 'default' }}
        >
          <Checkbox
            checked={props?.validated}
            color={props.validated ? 'success' : 'error'}
          />
          {props.message}
        </Typography>
      </div>
    </>
  );
}

const ChangePasswordPage = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatched, setPasswordMatched] = useState(false);
  const { t } = useTranslation();
  const { id } = useParams();
  const history = useNavigate();

  const {
    formik,
    loading,
    showValues,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useVerifyResetPasswordForm(id);
  
  const handleFormSubmit = () => {
    formik.handleSubmit();

    if (formik.isValid && passwordMatched) {
      // toast.success("Password changed successfully");
    } else {
      toast.error("Please make sure you have filled the form correctly");
    }
  };

  const handleClick = () => {
    history('/login');
  };

  const {
    lowerValidated: lowerValidatedNew,
    upperValidated: upperValidatedNew,
    numberValidated: numberValidatedNew,
    specialValidated: specialValidatedNew,
    lengthValidated: lengthValidatedNew,
    validatePassword: validateNewPassword,
  } = useNewPasswordValidation();

  const {
    lowerValidated: lowerValidatedRe,
    upperValidated: upperValidatedRe,
    numberValidated: numberValidatedRe,
    specialValidated: specialValidatedRe,
    lengthValidated: lengthValidatedRe,
    validatePassword: validateRePassword,
  } = useRePasswordValidation();

  return (
    <Box
      className='paddingOuter'
      padding={{ xs: '0 20px 20px 20px', md: '50px 22px 96px 22px' }}
      boxShadow='0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)'
      width={{ xs: '90%', sm: '80%' }}
      bgcolor='#fdf8fd'
      borderRadius='32px'
      position='relative'
      alignSelf='center'
    >
      <Grid padding={{ sm: '2rem', xs: '0' }} className='paddingOuterLayer'>
        <Grid
          display='flex'
          justifyContent='center'
          paddingBottom={{ lg: '2rem', md: '1rem', xs: '.25rem' }}
          className='paddingOuterLayer'
        >
          <img
            src={ResetPaassword}
            alt='reset-Paassword.png'
            className='registerImg'
          />
        </Grid>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='start'
          paddingBottom='2.5rem'
          className='paddingOuterLayer'
          p
        >
          <div style={{ color: '#875923' }} className='displayLarge'>
            Set New Password
          </div>
          <div className='titleMedium'>Please provide the number & email</div>
        </Grid>
        <Grid
          component='form'
          noValidate
          sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <TextField
          id='newPassword'
          name='newPassword'
            required
            value={formik.values.newPassword}
            onChange={(e) => {
              formik.handleChange(e);
              validateNewPassword(e.target.value);
            }}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
           
            autoComplete='username'
            label='New password'
            fullWidth
            variant='outlined'
            type={showValues.showPassword ? 'text' : 'password'}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                     <Tooltip title="Show Password">
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
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
          <Grid display="flex" flexDirection="row" alignItems="center">
            <Typography pr="1rem">{t("Must have one")}: </Typography>
            <Validation
              validated={lowerValidatedNew}
              message={t("Lowercase")}
            />
            <Validation
              validated={upperValidatedNew}
              message={t("Uppercase")}
            />
            <Validation validated={numberValidatedNew} message={t("Number")} />
            <Validation
              validated={specialValidatedNew}
              message={t("Character")}
            />
            <Validation validated={lengthValidatedNew} message={t("Length")} />
          </Grid>
          <TextField
            required
            value={formik.values.confirmPassword}
            onChange={(e) => {
              formik.handleChange(e);
              validateRePassword(e.target.value);
              setPasswordMatched(e.target.value === formik.values.newPassword);
            }}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            name='confirmPassword'
            autoComplete='username'
            label='Re-enter password'
            fullWidth
            variant='outlined'
            type={showValues.showPassword ? 'text' : 'password'}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                   <Tooltip
                    title={`Show ${
                      showConfirmPassword ? "Hidden" : "Visible"
                    } Confirm Password`}
                  >
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    c
                  </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
           <Grid display="flex" flexDirection="row" alignItems="center">
            <Typography pr="1rem">{t("Must have one")}: </Typography>
            <Validation validated={lowerValidatedRe} message={t("Lowercase")} />
            <Validation validated={upperValidatedRe} message={t("Uppercase")} />
            <Validation validated={numberValidatedRe} message={t("Number")} />
            <Validation
              validated={specialValidatedRe}
              message={t("Character")}
            />
            <Validation validated={lengthValidatedRe} message={t("Length")} />
            <Validation
              validated={passwordMatched}
              message={t("Passwords matched")}
            />
          </Grid>

          <LoadingButton
            fullWidth
            onClick={handleFormSubmit}
            variant='contained'
            loading={loading}
            disabled={!formik.isValid}
            sx={{
              mt: 2,
              mb: 2,
              textTransform: 'none',
              fontWeight: 600,
              background: '#6750a4',
            }}
          >
            Continue
          </LoadingButton>
        </Grid>
        <Grid sx={{ textAlign: 'center' }} marginTop='.5rem'>
          <div className='bodySmall '>
            Already have an account?
            <span
              className='labelMedium'
              style={{ color: '#3838d0', cursor: 'pointer' }}
              onClick={handleClick}
            >
              Sign In
            </span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChangePasswordPage;
