import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { corporatBankDetailForm } from "../../../../form/auth/CorporateDp/CorporatBankDetail/corporatBankDetailForm";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import RenderInput from "../../../../components/renderInput/RenderInput";

const CorporatBankDetail = () => {
  const { formik, loading } = corporatBankDetailForm();
  const BankField = [
    {
      name: "bankName",
      label: "Bank Name (बैंकको नाम)",
      type: "dropDown",
      sm: 12,
      mapId: "bankName",
      options: [],
      id: nanoid(),
      // dependentAction: {
      //   fetch: true,
      //   api: "/utility/bank-master",
      //   method: "GET",
      // },
    },
    {
      name: "accountNumber",
      label: "Account Number (खाता नम्बर)",
      type: "text",
      placeholder: "Enter account number",
      required: "Please enter account number",
      sm: 12,
      maxLength: 30,
      minLength: 8,
      id: nanoid(),
    },
    {
      name: "accountType",
      label: "Account Type (खाताको प्रकार)",
      type: "dropDown",
      placeholder: "Select account type",
      required: "Please select account type",
      sm: 12,
      options: [
        {
          value: "S",
          label: "Saving",
        },
        {
          value: "C",
          label: "Current",
        },
      ],
      id: nanoid(),
    },
    {
      name: "branchAddress",
      label: "Branch Name (शाखाको नाम)",
      type: "text",
      placeholder: "Enter branch name",
      required: "Please enter branch name",
      sm: 12,
      maxLength: 30,
      minLength: 4,
      id: nanoid(),
    },
  ];
  const theme = useTheme();
  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderLeft: `4px solid ${theme.palette.background.btn}`,
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
          <RenderInput inputField={BankField} formik={formik} />
        </Grid>
        <button type="submit"> save</button>
      </form>
    </div>
  );
};

export default CorporatBankDetail;
