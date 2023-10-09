import React from "react";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, InputAdornment, Typography, Grid } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import { useRegisterForm } from "../../form/auth/register/useRegisterForm";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SignUpPage from "../../assets/signUpPage.png";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const brokerOption = useSelector((state) => state.brokerList.brokerOption);
  const history = useNavigate();
  const { formik, loading } = useRegisterForm();

  const handleClick = () => {
    history("/login");
  };

  return (
    <Box
      className="paddingOuter"
      position="relative"
      alignSelf="center"
      padding={{ xs: "0 20px 20px 20px", md: "50px 22px 96px 22px" }}
      boxShadow="0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)"
      width={{ xs: "90%", sm: "80%" }}
      bgcolor="#fdf8fd"
      borderRadius="32px"
    >
      <Grid padding={{ sm: "2rem", xs: "0" }} className="paddingOuterLayer">
        <Grid
          className="paddingOuter"
          display="flex"
          justifyContent="center"
          paddingBottom={{ lg: "2rem", md: "1rem", xs: ".25rem" }}
        >
          <img src={SignUpPage} alt="SignUpPage" className="registerImg" />
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="start"
          paddingBottom={{ lg: "2rem", md: ".75rem", xs: "2rem" }}
        >
          <div style={{ color: "#875923" }} className="displayLarge">
            Sign Up
          </div>
          <div className="title1624">your account to continue</div>
        </Grid>
        <Grid
          component="form"
          noValidate
          display="flex"
          flexDirection="column"
          gap={{ lg: "1.25rem", md: ".5rem", xs: "1.5rem" }}
        >
          <TextField
            id="brokerNo"
            select
            name="brokerNo"
            label="Select Broker"
            placeholder="Choose Broker No."
            fullWidth
            value={formik.values.brokerNo.trim()}
            onChange={formik.handleChange}
            error={formik.touched.brokerNo && Boolean(formik.errors.brokerNo)}
            helperText={formik.touched.brokerNo && formik.errors.brokerNo}
            variant="outlined"
          >
            {brokerOption?.map((option) => (
              <MenuItem key={option?.id} value={option?.id}>
                {option?.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            value={formik.values.nepseCode.trim()}
            onChange={formik.handleChange}
            error={formik.touched.nepseCode && Boolean(formik.errors.nepseCode)}
            helperText={formik.touched.nepseCode && formik.errors.nepseCode}
            name="nepseCode"
            label="Enter NEPSE Code"
            fullWidth
            variant="outlined"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PermIdentityOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            value={formik.values.email.trim()}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            name="email"
            autoComplete="username"
            label="E-mail"
            fullWidth
            variant="outlined"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            value={formik.values.mobileNo.trim()}
            onChange={formik.handleChange}
            error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
            helperText={formik.touched.mobileNo && formik.errors.mobileNo}
            name="mobileNo"
            label="Enter your number"
            fullWidth
            variant="outlined"
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CallOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            className="titleMedium  bg-purple-700"
            fullWidth
            onClick={() => formik.submitForm()}
            variant="contained"
            loading={loading}
            sx={{
              background: "#6750a4",
            }}
          >
            <div className="titleMedium" style={{ margin: ".25rem 0" }}>
              {" "}
              Sign Up
            </div>
          </LoadingButton>
        </Grid>
        <Grid style={{ textAlign: "center" }} marginTop=".5rem">
          <div className="bodySmall ">
            Already have an account?{" "}
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

export default RegisterPage;
