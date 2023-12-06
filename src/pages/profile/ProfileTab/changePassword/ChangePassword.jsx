import React from "react";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import { Button, Typography, Tooltip, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useChangePasswordForm } from "../../../../form/auth/change-password/useChangePasswordForm";

const ChangePassword = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const {
    formik,
    showValues,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useChangePasswordForm();

  const handleFormSubmit = () => {
    formik.handleSubmit();
  };
  const handleFormClear = () => {
    formik.resetForm();
  };

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <Typography variant="h4">{t("Change Password")}</Typography>
        <Typography variant="h7">
          {t("Enter a new password below to change your password")}
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
            id="oldPassword"
            name="oldPassword"
            label={t("Current Password")}
            placeholder={t("Enter your current password")}
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
            type={showOldPassword ? "text" : "password"}
            InputLabelProps={{
              shrink: true,
              style: { color: theme.palette.text.main },
            }}
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
        </Grid>
        <Grid>
          <TextField
            id="newPassword"
            name="newPassword"
            label={t("New Password")}
            placeholder={t("Enter your new password")}
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
            type={showValues.showPassword ? "text" : "password"}
            InputLabelProps={{
              shrink: true,
              style: { color: theme.palette.text.main },
            }}
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
        </Grid>
        <Grid>
          <TextField
            id="rePassword"
            name="rePassword"
            label={t("Confirm New Password")}
            placeholder={t("Confirm your new password")}
            fullWidth
            required
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            error={
              formik.touched.rePassword && Boolean(formik.errors.rePassword)
            }
            helperText={formik.touched.rePassword && formik.errors.rePassword}
            variant="outlined"
            type={showConfirmPassword ? "text" : "password"}
            InputLabelProps={{
              shrink: true,
              style: { color: theme.palette.text.main },
            }}
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

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              onClick={handleFormSubmit}
              // disabled={!formik.isValid}
              sx={{
                mt: 3,
                ml: 1,
                backgroundColor: theme.palette.background.btn,
                color: theme.palette.text.alt,
                textTransform: "none",
              }}
            >
              {t("Change Password")}
            </Button>
            <Button
              variant="contained"
              onClick={handleFormClear}
              color="error"
              sx={{
                mt: 3,
                ml: 1,
                textTransform: "none",
              }}
            >
              {t("Clear")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
