import React, { useState } from "react";
import { Grid, Button, useTheme, Typography } from "@mui/material";
import { Formik } from "formik";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { useKycBankForm } from "./usekycBankForm";
import { Box } from "@mui/system";

const BankIndividualDpForms = () => {
  const theme = useTheme();
  const { formik } = useKycBankForm();
  const FAMILYFIELDS = [
    {
      type: "asyncDropDown",
      name: "bankName",
      label: "Bank Name",
      required: true,
      xs: 12,
      sm: 6,
      // path:"http://103.94.159.144:8085/pms/api/app-user/user-portfolio",
      // responseLabel:"script"
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
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderRadius: "0 6px 6px 0",
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
      <RenderInput inputField={FAMILYFIELDS} formik={formik} />
      <Grid
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}
      >
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
        >
          Next
        </Button>
      </Grid>
    </form>
  );
};

export default BankIndividualDpForms;
