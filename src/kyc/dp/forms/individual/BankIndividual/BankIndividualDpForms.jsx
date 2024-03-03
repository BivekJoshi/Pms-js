import React from "react";
import { Grid, Button, useTheme, Typography } from "@mui/material";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { useKycBankForm } from "./usekycBankForm";
import { Box } from "@mui/system";
import CustomTable from "../../../../../components/customTable/CustomTable";
import { useMemo } from "react";
import {
  useGetBankList,
  useGetKycBank,
} from "../../../../../hooks/Kyc/individual/kycBank/useKycBank";

const BankIndividualDpForms = () => {
  const theme = useTheme();
  const { data: bankListData } = useGetBankList();
  const { data: bankData } = useGetKycBank();
  const bankDataField = bankData && [bankData?.data];

  const { formik } = useKycBankForm();

  const BANKFIELDS = [
    // {
    //   type: "dropDown",
    //   name: "bankName",
    //   label: "Bank Name",
    //   required: true,
    //   options: bankListData?.data,
    //   xs: 12,
    //   sm: 6,
    //   md: 3,
    // },
    {
      type: "asyncDropDown",
      name: "bankName",
      label: "Bank Name",
      required: true,
      responseLabel: "name",
      responseId: "code",
      path: "http://172.16.16.46:8084/kyc/api/utility/bank-master",
      xs: 12,
      sm: 6,
      md: 3,
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
          value: "S",
          label: "Saving",
        },
        {
          value: "C",
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
        Cell: (cell) => {
          return cell?.row?.index + 1;
        },
        header: "SN",
        size: 50,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "bankName",
        header: "Bank Name",
        accessorFn: (row) => {
          const bankName = bankListData?.data?.find((code) => code?.code === row?.bankName)
          return <>{bankName?.name}</>;
        },
        size: 170,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "accountType",
        accessorFn: (row) => {
          return <>{row?.accountType === "S" ? "Saving" : "Current"}</>;
        },
        header: "Account Type",
        size: 100,
        sortable: false,
      },

      {
        id: 4,
        accessorKey: "branchAddress",
        header: "Branch",
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "accountNumber",
        header: "Account Number",
        size: 100,
        sortable: false,
      },
      {
        id: 6,
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
        <CustomTable
          title={"List of Bank"}
          columns={columns}
          data={bankDataField}
          headerBackgroundColor="#401686"
        />
      </Grid>
      <Grid
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}
      >
        <Button
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
