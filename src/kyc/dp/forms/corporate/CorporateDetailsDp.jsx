import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import {
  BUSINESS_OPTIONS,
  COMPANY_TYPE,
  CORPORATE_ACCOUNT_TYPE,
} from "../../../../utility/kycData";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useTheme } from "@emotion/react";
import { BasicCorporateDpForm } from "../../../../form/auth/CorporateDp/BasicCorporateDpForm";
import { useGetBasicDpCorporate } from '../../../../hooks/Kyc/corporate/BasicCoporateDp/useBasicCoporateDp';

const CorporateDetailsDp = () => {
  const CorporateField = [
    {
      name: "corporateAccountType",
      label: "Account Type",
      disabled: true,
      type: "dropDown",
      options: CORPORATE_ACCOUNT_TYPE,
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      id: nanoid(),
      maxLength: 100,
      able: true,
      md: 4,
      sm: 12,
    },
    {
      name: "companyCeoName",
      label: "Company CEO Name",
      type: "text",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "companySecretaryName",
      label: "Company Secretary Name",
      type: "text",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "companyType",
      label: "Company Type",
      type: "dropDown",
      options: COMPANY_TYPE,
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "contactNumber",
      label: "Contact Number",
      type: "number",
      maxLength: 21,
      minLength: 10,
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "countryReg",
      label: "Country of Registration",
      type: "dropDown",
      options: [
        {
          value: "Nepal",
          label: "Nepal",
        },
      ],
      id: nanoid(),
      md: 4,
      sm: 12,
      customMarginBottom: "6px",
    },
    {
      name: "incorporationDate",
      nepaliLabel: "Incorporation Date (B.S.)",
      type: "dualDate",
      engLabel: "Incorporation Date (A.D.)",
      id: nanoid(),
      engMd: 6,
      engSm: 12,
      nepMd: 6,
      nepSm: 12,
      md: 8,
      sm: 12,
    },
    {
      name: "registrationNo",
      label: "Registration Number",
      type: "text",
      id: nanoid(),
      md: 4,
      sm: 12,
    },

    {
      name: "registrationDate",
      nepaliLabel: "Registration Date (B.S.)",
      type: "dualDate",
      engLabel: "Registration Date (A.D.)",
      required: true,
      id: nanoid(),
      engMd: 6,
      engSm: 12,
      nepMd: 6,
      nepSm: 12,
      md: 8,
      sm: 12,
    },
    {
      name: "registrationOffice",
      label: "Registration Office",
      type: "text",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "panNo",
      label: "PAN Number",
      type: "text",
      id: nanoid(),
      maxLength: 10,
      md: 4,
      sm: 12,
    },
    {
      name: "businessType",
      label: "Business Type",
      type: "dropDown",
      options: BUSINESS_OPTIONS,
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "workArea",
      label: "Work Area",
      type: "text",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "vatRegistration",
      label: "VAT Registration No",
      type: "number",
      id: nanoid(),
      maxLength: 15,
      md: 4,
      sm: 12,
    },
    {
      name: "nrbRegistration",
      label:
        "NRB Registration No",
      type: "number",
      id: nanoid(),
      maxLength: 15,
      md: 4,
      sm: 12,
    },
    {
      name: "nrbApproval",
      nepaliLabel:
        "NRB Approval Date (B.S.)",
      type: "dualDate",
      engLabel: "NRB Approval Date (A.D.)",
      id: nanoid(),
      maxLength: 75,
      engMd: 6,
      engSm: 12,
      nepMd: 6,
      nepSm: 12,
      md: 8,
      sm: 12,
    },
    {
      name: "isListed",
      label: "Is Company Listed?",
      type: "switchWithFields",
      id: nanoid(),
      display: "flex",
      direction: "column",
      align: "start",
      sm: 12,
      newFields: [
        {
          name: "listingDate",
          nepaliLabel: "Listing Date (B.S.)",
          type: "dualDate",
          engLabel: "Listing Date (A.D.)",
          required: true,
          id: nanoid(),
          engMd: 6,
          engSm: 12,
          nepMd: 6,
          nepSm: 12,
          md: 8,
          sm: 12,
        },
      ],
    },
    {
      name: "isSubsidiary",
      label: "Is Subsidiary?",
      type: "switchWithFields",
      id: nanoid(),
      sm: 12,
      display: "flex",
      direction: "column",
      align: "start",
      newFields: [
        {
          name: "mainCompanyName",
          label: "Main Company Name",
          type: "text",
          id: nanoid(),
          md: 12,
          sm: 12,
        },
      ],
    },
    {
      name: "isMF",
      label: "Is Mutual Fund?",
      type: "switch",
      display: "flex",
      direction: "column",
      justify: "start",  
      id: nanoid(),
      sm: 12,
    },
  ];
  
const {data: basicCorData} = useGetBasicDpCorporate();
const data = basicCorData && basicCorData?.data;
  const theme = useTheme();
  const { formik } = BasicCorporateDpForm(data);
  useEffect(() => {

  }, []);
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
          Corporate Details
        </Typography>
      </Box>
      <Grid>
        <RenderInput inputField={CorporateField} formik={formik} />
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            color="secondary"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CorporateDetailsDp;
