import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import SignUpPage from "../../assets/signUpPage.png";
import { useNewRegisterForm } from "../../form/auth/register/useNewRegisterForm";
import { LoadingButton } from "@mui/lab";
import RenderInput from "../../components/renderInput/RenderInput";
import { kycClientType } from "./../../utility/kycData";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import StepOne from "./registerSteps/StepOne";
import StepTwo from "./registerSteps/StepTwo";
import StepThree from "./registerSteps/StepThree";
import StepFour from "./registerSteps/StepFour";

const NewRegisterPage = () => {
  const { formik, loading, handleStepOne } = useNewRegisterForm();
  console.log("🚀 ~ NewRegisterPage ~ formik:", formik);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (formik.values.nepseExist) {
      formik.setFieldValue("dematExist", false);
      formik.setFieldValue("dpId", "");
      formik.setFieldValue("dematNo", "");
    }
  }, [formik.values.nepseExist]);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      // handleStepOne(formik.values);
    }
    if (currentStep >= 4) return;

    setCurrentStep((previousValue) => previousValue + 1);
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
          <div className="title1624">Your account to continue</div>
        </Grid>
        <Grid
          component="form"
          noValidate
          display="flex"
          flexDirection="column"
          gap={{ lg: "1.25rem", md: ".5rem", xs: "1.5rem" }}
        >
          {currentStep === 1 && <StepOne formik={formik} />}

          {currentStep === 2 && <StepTwo formik={formik} />}
          {currentStep === 3 && <StepThree formik={formik} />}
          {currentStep === 4 && <StepFour formik={formik} />}
          <Button
            fullWidth
            variant="contained"
            onClick={handleNextStep}
            color="secondary"
          >
            Next
          </Button>
          {/* <LoadingButton
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
              Sign Up
            </div>
          </LoadingButton> */}
        </Grid>
        <Grid style={{ textAlign: "center" }} marginTop=".5rem">
          <div className="bodySmall ">
            Already have an account?{" "}
            <span
              className="labelMedium"
              style={{ color: "#3838d0", cursor: "pointer" }}
              onClick={navigateLogin}
            >
              Sign In
            </span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewRegisterPage;
