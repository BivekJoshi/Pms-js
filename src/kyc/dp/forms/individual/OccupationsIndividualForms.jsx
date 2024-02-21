import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useOccupationsIndividualForm } from './useOccupationsIndividualForm';
import { nanoid } from 'nanoid';

const occupationData = [
  {
    name: "occupation",
    label: "Occupation (पेशा)",
    placeholder: "Enter occupation",
    type: "dropDown",
    options: [
        {label: "Public Sector", value: "PUBLIC_SECTOR"},
        {label: "Student", value: "STUDENT"},
        {label: "Salary", value: "SALARY"},
        {label: "Others", value: "OTHERS"},
    ],
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "orgName",
    label: "Organization Name (संस्थाकाे नाम)",
    placeholder: "Enter Organization Name",
    type: "text",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "address",
    label: "Address (ठेगाना)",
    placeholder: "Enter address",
    type: "text",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
  name: "employeeId",
  label: "Employee ID (कर्मचारी आईडी)",
  placeholder: "Enter Employee Id",
  type: "text",
  sm: 12,
  md: 4,
  id: nanoid(),
},
{
    name: "designation",
    label: "Designation (पद)",
    placeholder: "Enter designation",
    type: "text",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "designation",
    label: "Designation (पद)",
    placeholder: "Enter designation",
    type: "text",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "effectiveFrom",
    label: "Effective From (सुरु मिति) (A.D.)",
    placeholder: "Enter effective from",
    type: "text",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "financialDetails",
    label: "Financial Details (आर्थिक विवरण)",
    placeholder: "Enter financial details",
    options: [
        {label: 'Upto Rs.5,00,000', value: '500000'},
        {label: 'From Rs.5,00,001 to Rs.10,00,000', value: '100001'},
        {label: 'Above Rs.10,00,000', value: '1000001'},
    ],
    type: "dropDown",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "sourceOfIncome",
    label: "Income Source (आय स्रोत)",
    options: [
        {label: 'Business Income', value: 'business income'},
        {label: 'Salary', value: 'salary'},
        {label: 'house Rent', value: 'house rent'},
        {label: 'Remittance', value: 'remittance'},
        {label: 'Interest', value: 'interest'},
    ],
    placeholder: "Enter effective from",
    type: "dropDown",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "involvementInOtherCompany",
    label: "Are you involved in other Company? (के तपाई अन्य कम्पनीमा संलग्न हुनुहुन्छ?)",
    placeholder: "Enter designation",
    type: "switchWithFields",
    newFields: [
        {
            name: "companyName",
            label: "Company name (कम्पनीको नाम)",
            type: "text",
            id: nanoid(),
            md: 6,
            sm: 12,
          },
          {
              name: "tradingDesignation",
              label: "Designation (पद)",
              type: "text",
              id: nanoid(),  
              md: 6,
              sm: 12,
            },
      ],
    sm: 12,
    md: 12,
    id: nanoid(),
  },
  {
    name: "tradingAccount",
    label: "Do you have any other trading account? (के तपाई संग अरुकारोबार खाता छ ?)",
    placeholder: "Enter designation",
    type: "switchWithFields",
    newFields: [
        {
          name: "tradingAccountCompanyName",
          label: "Trading company name (कारोबार गर्ने कम्पनीको नाम)",
          type: "text",
          id: nanoid(),
          md: 6,
          sm: 12,
        },
        {
            name: "clientCode",
            label: "Client code (ग्राहक कोड)",
            type: "text",
            id: nanoid(),  
            md: 6,
            sm: 12,
          },
      ],
    sm: 12,
    md: 12,
    id: nanoid(),
  },
  {
    name: "blackListed",
    label: "Are you blacklisted? (तपाईं कालोसूचीमा हुनुहुन्छ?)",
    placeholder: "Enter designation",
    type: "switch",
    sm: 12,
    md: 12,
    id: nanoid(),
  },
];

const OccupationsIndividualForms = () => {
  const theme = useTheme();
  const {formik} = useOccupationsIndividualForm();

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
          Occupations
        </Typography>
      </Box>
      <Grid>
        <RenderInput inputField={occupationData} formik={formik} />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
        >
          Next
        </Button>
      </Grid>
    </div>
  );
};

export default OccupationsIndividualForms;
