import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { corporatBankDetailForm } from "../../../../form/auth/CorporateDp/CorporatBankDetail/corporatBankDetailForm";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser, nextFormPath } from "../../../../utility/userHelper";
import { SET_FORM } from "../../../../redux/types/types";

const CorporatBankDetail = () => {
  const { formik, loading } = corporatBankDetailForm();
  const { H: clientType, I: formNature } = getUser()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const BANKFIELDS = [
    {
      type: "asyncDropDown",
      name: "bankName",
      label: "Bank Name",
      required: true,
      xs: 12,
      sm: 6,
      path: "/utility/bank-master",
      responseLabel: "name",
      responseId: "code",
    },
    {
      type: "text",
      name: "accountNumber",
      label: "Account Number",
      required: true,
      xs: 12,
      sm: 6,
    },
    {
      type: "dropDown",
      name: "accountType",
      label: "Account Type",
      required: true,
      xs: 12,
      sm: 6,
      options: [
        {
          value: "s",
          label: "Saving",
        },
        {
          value: "c",
          label: "Current",
        },
      ],
    },
    {
      type: "text",
      name: "branchAddress",
      label: "Branch Name",
      required: true,
      xs: 12,
      sm: 6,
    },
  ];

  const handleNext = () => {
    if (formNature === "TMS") {
      navigate(nextFormPath(7));
      dispatch({ type: SET_FORM, payload: 7 });
    } else {
      navigate(nextFormPath(6));
      dispatch({ type: SET_FORM, payload: 6 });
    }
  };

  
  const handleBack = () => {
    navigate(nextFormPath(4));
    dispatch({ type: SET_FORM, payload: 4 });
  }

  const theme = useTheme();
  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          Bank Details
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid align="center">
          <RenderInput inputField={BANKFIELDS} formik={formik} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Button
            onClick={handleBack}
            variant="outlined"
            color="secondary"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            variant="contained"
            color="secondary"
          >
            Next
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default CorporatBankDetail;
