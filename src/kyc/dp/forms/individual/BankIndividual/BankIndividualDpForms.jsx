import React, { useState } from "react";
import { Grid, Button, useTheme, Typography } from "@mui/material";
import { Formik } from "formik";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { useKycBankForm } from "./usekycBankForm";
import { Box } from "@mui/system";
import CustomTable from "../../../../../components/customTable/CustomTable";
import { useMemo } from "react";

const BankIndividualDpForms = () => {
  const theme = useTheme();
  const { formik } = useKycBankForm();
  const BANKFIELDS = [
    {
      type: "text",
      name: "bankName",
      label: "Bank Name",
      required: true,
      xs: 12,
      sm: 6,
      md: 3,
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
      md: 3,
    },
    {
      type: "dropDown",
      name: "accountType",
      label: "Account Type",
      required: true,
      xs: 12,
      sm: 6,
      md: 3,

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
      md: 3,
    },
  ];

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "accountType",
        header: "Account Type",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "bank",
        header: "Bank",
        size: 170,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "branch",
        header: "Branch",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "acNo",
        header: "Account Number",
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "primary",
        header: "Primary",
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "action",
        header: "Action",
        size: 100,
        sortable: false,
      },
    ],
    []
  );

  return (
    <form>
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
      <RenderInput inputField={BANKFIELDS} formik={formik} />
      <Grid
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}
      >
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
          sx={{ borderRadius: "20px", paddingInline: 2 }}
        >
          + Add
        </Button>
      
      </Grid>
      <Grid marginBlock={2}>
        <CustomTable columns={columns} headerBackgroundColor="#401686" />
      </Grid>
      <Grid
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}
      >
        <Button
          // onClick={formik.handleSubmit}
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
