import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Formik } from "formik";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useKycBankForm } from "../../../../hooks/kyc/individual/bank/usekycBankForm";

const BankIndividualDpForms = () => {
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
      options:[
        {
          value:"s",
          label:"Saving"
        },
        {
          value:"c",
          label:"Current"
        },
      ]
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
      <RenderInput inputField={FAMILYFIELDS} formik={formik} />
      <Button variant="contained" onClick={formik.handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default BankIndividualDpForms;
