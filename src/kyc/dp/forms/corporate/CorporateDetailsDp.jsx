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
      label: "Account Type (खाताको प्रकार)",
      disabled: true,
      type: "dropDown",
      options: CORPORATE_ACCOUNT_TYPE,
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "companyName",
      label: "Company Name (कम्पनीको नाम)",
      type: "text",
      id: nanoid(),
      maxLength: 100,
      able: true,
      md: 4,
      sm: 12,
    },
    {
      name: "companyCeoName",
      label: "Company CEO Name (प्रमुख कार्यकारी अधिकृतको नाम)",
      type: "text",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "companySecretaryName",
      label: "Company Secretary Name (कम्पनी सचिवको नाम)",
      type: "text",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "companyType",
      label: "Company Type (कम्पनीको प्रकार)",
      type: "dropDown",
      options: COMPANY_TYPE,
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "contactNumber",
      label: "Contact Number (सम्पर्क नम्बर)",
      type: "number",
      maxLength: 21,
      minLength: 10,
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "countryReg",
      label: "Country of Registration (दर्ताको देश)",
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
      nepaliLabel: "Incorporation Date (समावेश मिति) (B.S.)",
      type: "dualDate",
      engLabel: "Incorporation Date (समावेश मिति) (A.D.)",
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
      label: "Registration Number (दर्ता नम्बर)",
      type: "text",
      id: nanoid(),
      md: 4,
      sm: 12,
    },

    {
      name: "registrationDate",
      nepaliLabel: "Registration Date (दर्ता मिति) (B.S.)",
      type: "dualDate",
      engLabel: "Registration Date (दर्ता मिति) (A.D.)",
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
      label: "Registration Office (दर्ता कार्यालय)",
      type: "text",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "panNo",
      label: "PAN Number (प्यान नम्बर)",
      type: "text",
      id: nanoid(),
      maxLength: 10,
      md: 4,
      sm: 12,
    },
    {
      name: "businessType",
      label: "Business Type (व्यापार प्रकार)",
      type: "dropDown",
      options: BUSINESS_OPTIONS,
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "workArea",
      label: "Work Area (कार्य क्षेत्र)",
      type: "text",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "vatRegistration",
      label: "VAT Registration No (मूल्य अभिबृद्धि कर दर्ता नं.)",
      type: "number",
      id: nanoid(),
      maxLength: 15,
      md: 4,
      sm: 12,
    },
    {
      name: "nrbRegistration",
      label:
        "NRB Registration No (नेपाल राष्ट्र बैंकमा दर्ता भएको भए दर्ता नं.)",
      type: "number",
      id: nanoid(),
      maxLength: 15,
      md: 4,
      sm: 12,
    },
    {
      name: "nrbApproval",
      nepaliLabel:
        "NRB Approval Date (नेपाल राष्ट्र बैंकको स्वीकृत मिति) (B.S.)",
      type: "dualDate",
      engLabel: "NRB Approval Date (नेपाल राष्ट्र बैंकको स्वीकृत मिति) (A.D.)",
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
      label: "Is Company Listed? (कम्पनी सूचीबद्ध छ?)",
      type: "switchWithFields",
      id: nanoid(),
      display: "flex",
      direction: "column",
      align: "start",
      sm: 12,
      newFields: [
        {
          name: "listingDate",
          nepaliLabel: "Listing Date (सूचीकरण मिति) (B.S.)",
          type: "dualDate",
          engLabel: "Listing Date (सूचीकरण मिति) (A.D.)",
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
      id: nanoid(),
      sm: 12,
    },
  ];
const {data: basicCorData} = useGetBasicDpCorporate();
const data = basicCorData && basicCorData?.data;
  const theme = useTheme();
  const { formik } = BasicCorporateDpForm(data);
  // useEffect(() => {

  // }, [formik.values.isListed, formik.values.isSubsidiary, formik.values.isMF]);
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
