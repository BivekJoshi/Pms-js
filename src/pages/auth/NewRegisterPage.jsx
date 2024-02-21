import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import SignUpPage from "../../assets/signUpPage.png";
import { useNewRegisterForm } from "../../form/auth/register/useNewRegisterForm";
import { LoadingButton } from "@mui/lab";
import RenderInput from "../../components/renderInput/RenderInput";
import { createAccountFor, kycClientType } from "./../../utility/kycData";
import { nanoid } from "nanoid";

const NewRegisterPage = () => {
  const { formik, loading } = useNewRegisterForm();
  const inputFields = [
    {
      name: "name",
      label: "Full Name",
      md: 12,
      sm: 12,
      required: true,
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      md: 12,
      sm: 12,
      required: true,
      type: "text",
    },
    {
      name: "phoneNo",
      label: "Mobile Number",
      md: 12,
      sm: 12,
      required: true,
      type: "text",
    },
    {
      name: "branchId",
      label: "Branch",
      md: 12,
      sm: 12,
      path: "http://103.94.159.144:8084/kyc/api/utility/branch",
      type: "asyncDropDown",
      required: true,
      responseLabel: "branchName",
      responseId: "id",
    },
    {
      name: "nepseExist",
      label: "Do you have Trading account?",
      type: "switchWithFields",
      md: 12,
      sm: 12,
      newFields: [
        {
          name: "dpId",
          label: "Depository Participant",
          md: 12,
          sm: 12,
          path: "http://103.94.159.144:8084/kyc/api/utility/dp-details",
          type: "asyncDropDown",
          required: true,
          responseLabel: "dpName",
          responseId: "id",
        },
        {
          name: "nepseCode",
          type: "text",
          label: "NEPSE Code",
          required: true,
          id: nanoid(),
          md: 12,
          sm: 12,
        },
      ],
    },
    {
      name: "dematExist",
      label: "Do you have Demat account?",
      type: "switchWithFields",
      md: 12,
      sm: 12,
      newFields: [
        {
          name: "dematNo",
          type: "number",
          label: "Demat No",
          required: true,
          id: nanoid(),
          md: 12,
          sm: 12,
        },
      ],
    },
  ];

  const clientTypeField = {
    name: "clientType",
    label: "Client type",
    md: 12,
    sm: 12,
    type: "dropDown",
    required: true,
    options: kycClientType,
  };
  const [fields, setFields] = useState(inputFields);

  useEffect(() => {
    if (formik.values.dematExist || formik.values.nepseExist) {
      setFields([...inputFields, clientTypeField]);
    } else {
      setFields(inputFields);
    }
  }, [formik.values.nepseExist, formik.values.dematExist]);

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
          <RenderInput inputField={fields} formik={formik} />
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewRegisterPage;
