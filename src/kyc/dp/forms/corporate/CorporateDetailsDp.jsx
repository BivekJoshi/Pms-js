import React from "react";
import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import {
  BUSINESS_OPTIONS,
  COMPANY_TYPE,
  CORPORATE_ACCOUNT_TYPE,
} from "../../../../utility/kycData";
import RenderInput from "../../../../components/renderInput/RenderInput";
import useCorporateDetailsForm from "./../../hooks/useCorporateDetailsForm";

const CorporateDetailsDp = () => {
  const CorporateField = [
    {
      name: "corporateAccountType",
      label: "Account Type (खाताको प्रकार)",
      disabled: true,
      type: "dropDown",
      required: "Please dropDown account type",
      options: CORPORATE_ACCOUNT_TYPE,
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "companyName",
      label: "Company Name (कम्पनीको नाम)",
      type: "text",
      required: "Please enter company name",
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
      required: "Please enter company CEO name",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "companySecretaryName",
      label: "Company Secretary Name (कम्पनी सचिवको नाम)",
      type: "text",
      required: "Please enter name of company secretary",
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
      required: "Please select type of company (e.g. PUBLIC, PRIVATE, etc.)",
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "contactNumber",
      label: "Contact Number (सम्पर्क नम्बर)",
      type: "number",
      required: "Please enter company contact number",
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
      required: "Please select country of registration",
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
      dualDate: true,
      engLabel: "Incorporation Date (समावेश मिति) (A.D.)",
      required: true,
      id: nanoid(),
      md: 8,
      sm: 12,
    },
    {
      name: "registrationNo",
      label: "Registration Number (दर्ता नम्बर)",
      type: "text",
      required: "Please enter company registration number",
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "registrationOffice",
      label: "Registration Office (दर्ता कार्यालय)",
      type: "text",
      required: "Please enter office where company is registered",
      id: nanoid(),
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "registrationDate",
      label: "Registration Date (दर्ता मिति) (B.S.)",
      type: "datePicker",
      engLabel: "Registration Date (दर्ता मिति) (A.D.)",
      dualDate: true,
      required: true,
      id: nanoid(),
      md: 8,
      sm: 12,
    },
    {
      name: "panNo",
      label: "PAN Number (प्यान नम्बर)",
      type: "text",
      required: "Please enter company PAN number",
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
      required:
        "Please select type of business company (e.g. MANUFACTURING, TRADING, etc.)",
      id: nanoid(),
      md: 4,
      sm: 12,
    },
    {
      name: "workArea",
      label: "Work Area (कार्य क्षेत्र)",
      type: "text",
      required: "Please enter area of work",
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
      label: "NRB Approval Date (नेपाल राष्ट्र बैंकको स्वीकृत मिति) (B.S.)",
      type: "datePicker",
      engLabel: "NRB Approval Date (नेपाल राष्ट्र बैंकको स्वीकृत मिति) (A.D.)",
      dualDate: true,
      id: nanoid(),
      maxLength: 75,
      md: 8,
      sm: 12,
    },

    {
      name: "isMF",
      label: "Is Mutual Fund? (म्युचुअल फण्ड हो?)",
      type: "switch",
      required: "Please specify whether company is mutual fund or not",
      id: nanoid(),
      sm: 12,
    },
    {
      name: "isSubsidiary",
      label: "Is Subsidiary? (सहायक हो?)",
      type: "switch",
      required: "Please specify whether company is subsidiary or not",
      id: nanoid(),
      sm: 12,
    },
    {
      name: "mainCompanyName",
      label: "Main Company Name (मुख्य कम्पनी नाम)",
      type: "text",
      required: "Please enter main company name",
      id: nanoid(),
      watchFor: "isSubsidiary",
      dependentAction: {
        type: "HIDDEN",
        condition: false,
      },
      maxLength: 75,
      md: 4,
      sm: 12,
    },
    {
      name: "isListed",
      label: "Is Company Listed? (कम्पनी सूचीबद्ध छ?)",
      type: "switch",
      required: "Please specify whether company is listed or not",
      id: nanoid(),
      sm: 12,
    },
    {
      name: "listingDate",
      label: "Listing Date (सूचीकरण मिति) (B.S.)",
      type: "datePicker",
      engLabel: "Listing Date (सूचीकरण मिति) (A.D.)",
      dualDate: true,
      required: true,
      id: nanoid(),
      md: 8,
      sm: 12,
      watchFor: "isListed",
      dependentAction: {
        type: "HIDDEN",
        condition: false,
      },
    },
  ];

  const { formik } = useCorporateDetailsForm();

  return (
    <div style={{ paddingBottom: "250px", padding: "5rem" }}>
      {/*  <form onSubmit={formik.handleSubmit}>
         <Grid align="center">
           <RenderInput
             inputField={CorporateField}
             formik={formik}
           />
         </Grid>
         <button type="submit"> save</button>
       </form> */}
      <Grid align="center">
        <RenderInput inputField={CorporateField} formik={formik} />
      </Grid>
    </div>
  );
};

export default CorporateDetailsDp;
