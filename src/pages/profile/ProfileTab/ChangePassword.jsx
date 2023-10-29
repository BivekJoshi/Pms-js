import { useTheme } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  InputAdornment,
  TextField,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { Button, Checkbox, Typography, Tooltip, Grid } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import { useChangePasswordForm } from "../../../form/auth/change-password/useChangePasswordForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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

    if (formik.isValid) {
    } else {
      toast.error("Please make sure you have filled the form correctly");
    }
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
        <Typography variant="h4">{t("Change Your Password")}</Typography>
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
          <Grid display="flex" flexDirection="row" alignItems="center">
            <Typography pr="1rem">{t("Must have one")}: </Typography>
            <FormControlLabel
              control={<Checkbox color="default" />}
              label={t("Uppercase")}
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label={t("Lowercase")}
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label={t("Character")}
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label={t("Number")}
            />
          </Grid>
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
          <Grid display="flex" flexDirection="row" alignItems="center">
            <Typography pr="1rem">{t("Must have one")}: </Typography>
            <FormControlLabel
              control={<Checkbox color="default" />}
              label={t("Uppercase")}
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label={t("Lowercase")}
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label={t("Character")}
            />
            <FormControlLabel
              control={<Checkbox color="default" />}
              label={t("Number")}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              onClick={handleFormSubmit}
              sx={{
                mt: 3,
                ml: 1,
                backgroundColor: theme.palette.background.btn,
                color: theme.palette.text.alt,
              }}
            >
              {t("CHANGE PASSWORD")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
