import { useTheme } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
} from "@mui/material";
import { InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";

const ForgetPassword = () => {
  const theme = useTheme();

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
            // value={formik.values.currentPassword}
            // onChange={formik.handleChange}
            // error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
            // helperText={formik.touched.currentPassword && formik.errors.currentPassword}
            name="currentPassword "
            autoComplete="Current Password "
            label="Current Password "
            fullWidth
            variant="outlined"
            type="text"
            // InputLabelProps={{
            //   shrink: formik.values.email,
            // }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* {showValues.showPassword ? ( */}
                    <VisibilityOff />
                    {/* ) : (
              <Visibility /> 
            )}*/}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid>
          <TextField
            required
            // value={formik.values.currentPassword}
            // onChange={formik.handleChange}
            // error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
            // helperText={formik.touched.currentPassword && formik.errors.currentPassword}
            name="currentPassword "
            autoComplete="New Password "
            label="New Password "
            fullWidth
            variant="outlined"
            type="text"
            // InputLabelProps={{
            //   shrink: formik.values.email,
            // }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* {showValues.showPassword ? ( */}
                    <VisibilityOff />
                    {/* ) : (
              <Visibility /> 
            )} */}
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
            required
            // value={formik.values.currentPassword}
            // onChange={formik.handleChange}
            // error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
            // helperText={formik.touched.currentPassword && formik.errors.currentPassword}
            name="currentPassword "
            autoComplete="New Password "
            label="Re-Type New Password "
            fullWidth
            variant="outlined"
            type="text"
            // InputLabelProps={{
            //   shrink: formik.values.email,
            // }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* {showValues.showPassword ? ( */}
                    <VisibilityOff />
                    {/* ) : (
              <Visibility /> 
            )}*/}
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

export default ForgetPassword;
