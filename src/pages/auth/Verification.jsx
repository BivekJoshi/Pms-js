import Timer from "../../components/timer/Timer";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import OtpInput from "react-otp-input";
import { LoadingButton } from "@mui/lab";
import {
  useResendVerificationForm,
  useVerificationForm,
} from "../../form/auth/verification/useVerificationForm";
import { useParams } from "react-router";
import Varification from "../../assets/varification.png";

const Verification = () => {
  const [otp, setOtp] = useState("");
  const [required, setRequired] = useState(false);
  const { id } = useParams();

  const { handleVerification, loading } = useVerificationForm();
  const { handleResendVerification, resetTimer } = useResendVerificationForm();

  const handleSubmit = () => {
    if (otp?.length === 6) {
      handleVerification({ id, otp });
    } else {
      setRequired(true);
    }
  };
  const handleClick = () => {
    if (id) {
      handleResendVerification({ id });
    }
  };

  useEffect(() => {
    if (otp?.length === 0) {
      setRequired(false);
    } else if (otp?.length === 6) {
      console.log({ otp: otp });
      handleSubmit();
    }
  }, [otp]);

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
            We have sent the 6 digit Verification code to your E-mail. Please
            check.
          </div>
          <Grid maxWidth="320px">
            <OtpInput
              value={otp}
              onChange={(otp) => {
                const normalizedOtp = otp.replace(/[^0-9]/g, "");
                setOtp(normalizedOtp);
              }}
              shouldAutoFocus
              numInputs={6}
              renderSeparator={<span>&nbsp; &nbsp;</span>}
              renderInput={(props) => {
                const value = props.value;
                const isEmpty = required ? !value : false;
                return (
                  <input
                    {...props}
                    className={`bg-light-verification  ${
                      isEmpty ? "otpRequiredBorder" : ""
                    } `}
                  />
                );
              }}
              isInputNum={true}
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
              <Timer reset={resetTimer} />
            </Grid>
          </Grid>
        </Grid>

        <LoadingButton
          fullWidth
          onClick={handleSubmit}
          variant="contained"
          disabled={loading}
          loading={loading}
          sx={{
            mt: 2,
            mb: 2,
            textTransform: "none",
            fontWeight: 600,
            background: "#6750a4",
          }}
        >
          <div className="titleMedium " style={{ margin: ".25rem 0" }}>
            VERIFY CODE
          </div>
        </LoadingButton>
        <Grid sx={{ textAlign: "center" }}>
          <div className="bodySmall">
            Not received your code?
            <span
              style={{ color: "#3838d0", cursor: "pointer", marginLeft: "5px" }}
              onClick={handleClick}
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
