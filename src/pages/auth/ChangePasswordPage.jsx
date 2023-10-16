import React from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import { Box, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from "@mui/lab";
import ResetPaassword from "../../assets/reset-Paassword.png";
import { useNavigate, useParams } from "react-router-dom";
import { useChangePasswordForm } from "../../form/auth/reset-password/useResetPasswordForm";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ChangePasswordPage = () => {
  const { id } = useParams();
  const { formik, loading, showValues, handleClickShowPassword, handleMouseDownPassword } = useChangePasswordForm(id);
  const history = useNavigate();

  const handleClick = () => {
    history("/login");
  };

  return (
    <Box
      className="paddingOuter"
      padding={{ xs: "0 20px 20px 20px", md: "50px 22px 96px 22px" }}
      boxShadow="0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)"
      width={{ xs: "90%", sm: "80%" }}
      bgcolor="#fdf8fd"
      borderRadius="32px"
      position="relative"
      alignSelf="center"
    >
      <Grid padding={{ sm: "2rem", xs: "0" }} className="paddingOuterLayer">
        <Grid
          display="flex"
          justifyContent="center"
          paddingBottom={{ lg: "2rem", md: "1rem", xs: ".25rem" }}
          className="paddingOuterLayer"
        >
          <img
            src={ResetPaassword}
            alt="reset-Paassword.png"
            className="registerImg"
          />
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="start"
          paddingBottom="2.5rem"
          className="paddingOuterLayer"p
        >
          <div style={{ color: "#875923" }} className="displayLarge">
            Set New Password
          </div>
          <div className="titleMedium">Please provide the number & email</div>
        </Grid>
        <Grid
          component="form"
          noValidate
          sx={{ mt: 1, display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            required
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            name="newPassword"
            autoComplete="username"
            label="New password"
            fullWidth
            variant="outlined"
            type={showValues.showPassword ? 'text' : 'password'}
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
          <Grid container>
            Must have one: 
          <Checkbox {...label} /> Uppercase
          <Checkbox {...label} /> Lowecase
          <Checkbox {...label} /> Character
          <Checkbox {...label} /> Number

          </Grid>
          <TextField
            required
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            name="confirmPassword"
            autoComplete="username"
            label="Re-enter password"
            fullWidth
            variant="outlined"
            type={showValues.showPassword ? 'text' : 'password'}
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
            variant="contained"
            loading={loading}
            sx={{
              mt: 2,
              mb: 2,
              textTransform: "none",
              fontWeight: 600,
              background: "#6750a4",
            }}
          >
            Continue
          </LoadingButton>
        </Grid>
        <Grid sx={{ textAlign: "center" }} marginTop=".5rem">
          <div className="bodySmall ">
            Already have an account?
            <span
              className="labelMedium"
              style={{ color: "#3838d0", cursor: "pointer" }}
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
