import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import otpImage from "../../assets/otp.png";
import { useNavigate } from 'react-router-dom';

const Verification = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/application/status")
    }
  return (
    <Box
      className="paddingOuter"
      position="relative"
      alignSelf="center"
      padding={{ xs: "20px", sm: "96px 22px" }}
      boxShadow="0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)"
      width={{ xs: "90%", sm: "80%" }}
      bgcolor="#fdf8fd"
      borderRadius="32px"
    >
      <Grid padding={{ sm: "2rem", xs: "0" }} alignItems="center">
        <Grid sx={{ textAlign: "center" }}>
          <Typography variant="h4">OTP Verified</Typography>
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          paddingBottom={{ lg: "0rem", md: "1rem", xs: ".25rem" }}
        >
          <img src={otpImage} alt="Otp Image" width="220px" />
        </Grid>
        <Grid display="flex" flexDirection="column" alignItems="center">
          <div
            className="bodyMedium"
            style={{
              maxWidth: "350px",
              textAlign: "center",
            }}
          >
            <Typography variant='h6'> A temporary password will be sent to your registered email shortly. Please check your inbox (or spam).</Typography>
          </div>
        </Grid>
        <Grid display="flex" flexDirection="column" alignItems="center"  marginTop={{ lg: "2rem", md: "1rem", xs: ".25rem" }}>
          <div
            className="bodyMedium"
            style={{
              maxWidth: "450px",
              textAlign: "center",
            }}
          >
          
            <Typography variant='p'>You can check your application here ? <span onClick={handleClick} style={{ color: "blue", cursor: "pointer", fontWeight: "semi-bold" }}>Check Status</span></Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Verification;
