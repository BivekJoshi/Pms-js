import React from "react";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, TextField, IconButton, Box } from "@mui/material";
import { Button, Typography, Tooltip, Grid } from "@mui/material";
import { useChangePasswordForm } from "../../form/auth/change-password/useChangePasswordForm";
import ResetPaassword from "../../assets/reset-Paassword.png";
import { LoadingButton } from "@mui/lab";

const ChangePasswordPage = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    formik,
    showValues,
    handleClickShowPassword,
    handleMouseDownPassword,
    loading
  } = useChangePasswordForm();

  const handleFormSubmit = () => {
    formik.handleSubmit();
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
          className="paddingOuterLayer"
        >
          <div style={{ color: "#875923" }} className="displayLarge">
            Change Your Password
          </div>
          <div className="titleMedium">
            "Enter a new password below to change your password"
          </div>
        </Grid>

        <Grid
          component="form"
          noValidate
          sx={{ mt: 1, display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            id="oldPassword"
            name="oldPassword"
            label="Old Password"
            placeholder="Enter your current password"
            fullWidth
            required
            value={formik.values.oldPassword}
            onChange={(e) => {
              formik.handleChange(e);
            }}
            error={
              formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
            }
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            variant="outlined"
            autoFocus
            type={showOldPassword ? "text" : "password"}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={`Show ${
                      showOldPassword ? "Hidden" : "Visible"
                    } Old Password`}
                  >
                    <IconButton
                      aria-label="toggle old password visibility"
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showOldPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="newPassword"
            name="newPassword"
            label="New Password"
            placeholder="Enter your new password"
            fullWidth
            required
            value={formik.values.newPassword}
            onChange={(e) => {
              formik.handleChange(e);
            }}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            variant="outlined"
            autoFocus
            type={showValues.showPassword ? "text" : "password"}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Show Password">
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
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="rePassword"
            name="rePassword"
            label="Confirm New Password"
            placeholder="Confirm your new password"
            fullWidth
            required
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            error={
              formik.touched.rePassword && Boolean(formik.errors.rePassword)
            }
            helperText={formik.touched.rePassword && formik.errors.rePassword}
            variant="outlined"
            autoFocus
            type={showConfirmPassword ? "text" : "password"}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={`Show ${
                      showConfirmPassword ? "Hidden" : "Visible"
                    } Confirm Password`}
                  >
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
          <LoadingButton
            fullWidth
            onClick={handleFormSubmit}
            variant="contained"
            loading={loading}
            sx={{
              mt: 2,
              mb: 2,
              // textTransform: "none",
              fontWeight: 600,
              background: "#6750a4",
              textTransform: "uppercase",
            }}
          >
            Continue
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChangePasswordPage;
