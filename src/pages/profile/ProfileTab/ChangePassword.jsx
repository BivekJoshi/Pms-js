import { useTheme } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import changePasswordForm from "../../../form/auth/change-password/changePasswordForm";

const ChangePassword = () => {
  const theme = useTheme();
  const {
    formik,
    handleClickShowPassword,
    loading,
    handleMouseDownPassword,
    showValues,
  } = changePasswordForm();

  return (
    <Grid
      display="inline-flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="15px"
      width="100%"
    >
      <Grid
        display="flex"
        flexDirection="column"
        bgcolor={theme.palette.background.alt}
        width="100%"
        gap="16px"
        p="8px 16px"
      >
        <Typography variant="h4">Change Your Password</Typography>
        <Typography variant="h7">
          Enter a new password below to change your password
        </Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="column"
        bgcolor={theme.palette.background.alt}
        width="100%"
        p="24px"
        gap="30px"
      >
        <Grid>
          <TextField
            required
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
            }
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            name="oldPassword"
            autoComplete="old-Password"
            label="Old Password "
            fullWidth
            variant="outlined"
            type={showValues.showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
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
        </Grid>
        <Grid>
          <TextField
            variant="outlined"
            label="New Password"
            name="newPassword"
            autoComplete="new-Password "
            required
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            fullWidth
            type={showValues.showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
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
          <Grid display="flex" flexDirection="row" alignItems="center">
            <Typography pr="1rem">Must have one: </Typography>
            <FormControlLabel
              control={<Checkbox color="default" />}
              label="Uppercase"
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label="Lowercase"
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label="Character"
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label="Number"
            />
          </Grid>
        </Grid>
        <Grid>
          <TextField
            variant="outlined"
            label="Re-Type New Password "
            name="rePassword "
            autoComplete="retype-Password "
            fullWidth
            required
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            error={
              formik.touched.rePassword && Boolean(formik.errors.rePassword)
            }
            helperText={formik.touched.rePassword && formik.errors.rePassword}
            type={showValues.showPassword ? "text" : "Password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
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
          <Grid display="flex" flexDirection="row" alignItems="center">
            <Typography pr="1rem">Must have one: </Typography>
            <FormControlLabel
              control={<Checkbox color="default" />}
              label="Uppercase"
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label="Lowercase"
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label="Character"
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label="Number"
            />
          </Grid>
        </Grid>
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          gap="1rem"
        >
          <Button
            variant="outlined"
            // color="purple"
            sx={{
              bgcolor: "white",
              color:
                // theme.palette.mode === "dark"?
                "purple",
              // : theme.palette.text.main,
              fontWeight: "800",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => formik.submitForm()}
            sx={{
              bgcolor: "purple",
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.text.main
                  : "white",
            }}
          >
            save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
