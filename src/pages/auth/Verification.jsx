import Timer from "../../components/timer/Timer";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import OtpInput from "react-otp-input";
import { LoadingButton } from "@mui/lab";
// import {
//   useResendVerificationForm,
//   useVerificationForm,
// } from "../../form/auth/verification/useVerificationForm";
import { useParams } from "react-router";
import Varification from "../../assets/varification.png";

const Verification = () => {
  // const [otp, setOtp] = useState('');
  // const { id } = useParams();

  // const {handleVerification, loading} = useVerificationForm();
  // const {handleResendVerification} = useResendVerificationForm();
  // const handleSubmit = () => {handleVerification({ id, otp })};
  // const handleClick = () => {handleResendVerification({ id })};
  return (
    <Box
      position="relative"
      alignSelf="center"
      padding={{ xs: "20px", sm: "96px 22px" }}
      boxShadow="0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)"
      width={{ xs: "90%", sm: "80%" }}
      bgcolor="#fdf8fd"
      borderRadius="32px"
    >
      <Grid padding={{ sm: "2rem", xs: "0" }} alignItems="center">
        <Grid
          display="flex"
          justifyContent="center"
          paddingBottom={{ lg: "2rem", md: "1rem", xs: ".25rem" }}
        >
          <img src={Varification} alt="varification.png" />
        </Grid>
        <Grid display="flex" flexDirection="column" alignItems="center">
          <div className="displayLarge">Verification Code</div>
          <div
            className="bodyMedium"
            style={{
              maxWidth: "283px",
              textAlign: "center",
              paddingBottom: "24px",
            }}
          >
            We have sent the 6 digit Verification code to your mobile number and
            E-mail. Please check.
          </div>
          <Grid maxWidth="320px">
            <OtpInput
              // value={otp}
              // onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                border: "1px solid transparent",
                borderRadius: "8px",
                width: "40px",
                height: "40px",
                fontSize: "12px",
                color: "#000",
                fontWeight: "400",
                caretColor: "blue",
                background: "#d4d4de",
              }}
              focusStyle={{
                border: "1px solid #CFD3DB",
                outline: "none",
              }}
            />
            <Grid
              display="flex"
              justifyContent="end"
              paddingTop=".25rem"
              alignItems="center"
            >
              <TimerOutlinedIcon sx={{ width: "18px" }} />
              <Timer />
            </Grid>
          </Grid>
        </Grid>

        <LoadingButton
          fullWidth
          // onClick={handleSubmit}
          variant="contained"
          // loading={loading}
          sx={{
            mt: 2,
            mb: 2,
            textTransform: "none",
            fontWeight: 600,
            background: "#6750a4",
          }}
        >
          <div className="titleMedium " style={{ margin: ".25rem 0" }}>
            Verify Code
          </div>
        </LoadingButton>
        <Grid sx={{ textAlign: "center" }}>
          <div className="bodySmall ">
            Not received your code?
            <span
              style={{ color: "#3838d0", cursor: "pointer" }}
              // onClick={handleClick}
            >
              Resend Code
            </span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Verification;
