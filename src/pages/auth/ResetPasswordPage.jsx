import React from "react";
import { Grid, TextField } from "@mui/material";
import { Box, MenuItem, InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ResetPaassword from "../../assets/reset-Paassword.png";
import { useNavigate } from "react-router-dom";
import { useResetPasswordForm } from "../../form/auth/reset-password/useResetPasswordForm";

const ResetPasswordPage = () => {
  const brokerOption = useSelector((state) => state.brokerList.brokerOption);
  const { formik, loading } = useResetPasswordForm();
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
          className="paddingOuterLayer"
        >
          <div style={{ color: "#875923" }} className="displayLarge">
            Reset Password
          </div>
          <div className="titleMedium">Please provide the nepse code & email</div>
        </Grid>
        <Grid
          component="form"
          noValidate
          sx={{ mt: 1, display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            id="brokerNo"
            select
            name="brokerNo"
            label="Select Broker"
            placeholder="Choose Broker No."
            fullWidth
            value={formik.values.brokerNo}
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
            value={formik.values.nepseCode}
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
            value={formik.values.email}
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

          <LoadingButton
            fullWidth
            onClick={() => formik.submitForm()}
            variant="contained"
            loading={loading}
            sx={{
              mt: 2,
              mb: 2,
              // textTransform: "none",
              fontWeight: 600,
              background: "#6750a4",
              textTransform: "uppercase"
            }}
          >
            Continue
          </LoadingButton>
        </Grid>
        <Grid sx={{ textAlign: "center" }} marginTop=".5rem">
          <div className="bodySmall ">
            Already have an account?
            {" "}
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

export default ResetPasswordPage;
