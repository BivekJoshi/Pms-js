import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { corporatBankDetailForm } from "../../../../form/auth/CorporateDp/CorporatBankDetail/corporatBankDetailForm";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import RenderInput from "../../../../components/renderInput/RenderInput";

const CorporatBankDetail = () => {
  const { formik, loading } = corporatBankDetailForm();

  const BANKFIELDS = [
    {
      type: "asyncDropDown",
      name: "bankName",
      label: "Bank Name",
      required: true,
      xs: 12,
      sm: 6,
      path: "http://103.94.159.144:8084/kyc/api/utility/bank-master",
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
            justifyContent: "flex-end",
            marginTop: "12px",
          }}
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
    </div>
  );
};

export default CorporatBankDetail;
