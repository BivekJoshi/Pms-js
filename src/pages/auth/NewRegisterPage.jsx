import React, { useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import SignUpPage from "../../assets/signUpPage.png";
import { useNewRegisterForm } from "../../form/auth/register/useNewRegisterForm";
import { LoadingButton } from "@mui/lab";

import { useNavigate } from "react-router-dom";
import StepOne from "./registerSteps/StepOne";
import StepTwo from "./registerSteps/StepTwo";
import StepThree from "./registerSteps/StepThree";

const touchedField = (steps) => {
  switch (steps) {
    case 1:
      return {
        name: true,
        email: true,
        phoneNo: true,
        clientType: true,
        branchId: true,
      };
    case 2:
      return {
        nepseCode: true,
        nepseExist: true,
        dematExist: true,
      };
    case 3:
      return {
        dematNo: true,
        dpId: true,
        accountType: true,
      };
    default:
      return {
        name: true,
        email: true,
        phoneNo: true,
        clientType: true,
        branchId: true,
      };
  }
};

const NewRegisterPage = () => {
  const { formik, loading, handleStep, currentStep } = useNewRegisterForm();

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const handleNextStep = () => {
    formik.setTouched(touchedField(currentStep));
    handleStep(formik.values);
  };

  return (
    <Box
      className="paddingOuter overflowYY"
      position="relative"
      alignSelf="center"
      padding={{ xs: "0 20px 20px 20px", md: "50px 22px 96px 22px" }}
      boxShadow="0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)"
      width={{ xs: "90%", sm: "80%" }}
      bgcolor="#fdf8fd"
      borderRadius="32px"
      height="95%"
    >
      <Grid padding={{ sm: "0 2rem", xs: "0" }} className="paddingOuterLayer">
        <Grid
          className="paddingOuter"
          display="flex"
          justifyContent="center"
          paddingBottom={{ lg: "0", md: "1rem", xs: ".25rem" }}
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

          {formik.values.nepseExist === "true" ||
          formik.values.dematExist === "false" ||
          currentStep === 3 ? (
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
                Sign Up
              </div>
            </LoadingButton>
          ) : (
            <Button
              fullWidth
              variant="contained"
              onClick={handleNextStep}
              color="secondary"
            >
              Next
            </Button>
          )}
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
