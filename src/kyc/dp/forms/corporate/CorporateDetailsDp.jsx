import React from "react";
import {
  FormControlLabel,
  Grid,
  MenuItem,
  Switch,
  TextField,
} from "@mui/material";
import { nanoid } from "nanoid";
import {
  BUSINESS_OPTIONS,
  COMPANY_TYPE,
  CORPORATE_ACCOUNT_TYPE,
} from "../../../../utility/kycData";
import RenderInput from "../../../../components/renderInput/RenderInput";

const CorporateDetailsDp = () => {
  const CorporateField = [
    {
      name: "corporateAccountType",
      label: "Account Type (खाताको प्रकार)",
      disabled: true,
      type: "select",
      required: "Please select account type",
      options: CORPORATE_ACCOUNT_TYPE,
      id: nanoid(),
    },
    {
      name: "companyName",
      label: "Company Name (कम्पनीको नाम)",
      type: "text",
      required: "Please enter company name",
      id: nanoid(),
      maxLength: 100,
      able: true,
    },
    {
      name: "companyCeoName",
      label: "Company CEO Name (प्रमुख कार्यकारी अधिकृतको नाम)",
      type: "onlyText",
      required: "Please enter company CEO name",
      id: nanoid(),
      maxLength: 75,
    },
    {
      name: "companySecretaryName",
      label: "Company Secretary Name (कम्पनी सचिवको नाम)",
      type: "onlyText",
      required: "Please enter name of company secretary",
      id: nanoid(),
      maxLength: 75,
    },
    {
      name: "companyType",
      label: "Company Type (कम्पनीको प्रकार)",
      type: "select",
      options: COMPANY_TYPE,
      required: "Please select type of company (e.g. PUBLIC, PRIVATE, etc.)",
      id: nanoid(),
    },
    {
      name: "contactNumber",
      label: "Contact Number (सम्पर्क नम्बर)",
      type: "mobileNo",
      required: "Please enter company contact number",
      maxLength: 21,
      minLength: 10,
      id: nanoid(),
    },
    {
      name: "countryReg",
      label: "Country of Registration (दर्ताको देश)",
      type: "select",
      required: "Please select country of registration",
      options: [
        {
          value: "Nepal",
          label: "Nepal",
        },
      ],
      id: nanoid(),
    },
    {
      name: "incorporationDate",
      label: "Incorporation Date (समावेश मिति) (B.S.)",
      type: "date-picker-citizen",
      dualDate: true,
      engLabel: "Incorporation Date (समावेश मिति) (A.D.)",
      required: true,
      id: nanoid(),
    },
    {
      name: "registrationNo",
      label: "Registration Number (दर्ता नम्बर)",
      type: "text",
      required: "Please enter company registration number",
      id: nanoid(),
    },
    {
      name: "registrationOffice",
      label: "Registration Office (दर्ता कार्यालय)",
      type: "text",
      required: "Please enter office where company is registered",
      id: nanoid(),
      maxLength: 75,
    },
    {
      name: "registrationDate",
      label: "Registration Date (दर्ता मिति) (B.S.)",
      type: "date-picker-citizen",
      engLabel: "Registration Date (दर्ता मिति) (A.D.)",
      dualDate: true,
      required: true,
      id: nanoid(),
    },
    {
      name: "panNo",
      label: "PAN Number (प्यान नम्बर)",
      type: "text",
      required: "Please enter company PAN number",
      id: nanoid(),
      maxLength: 10,
    },
    {
      name: "businessType",
      label: "Business Type (व्यापार प्रकार)",
      type: "select",
      options: BUSINESS_OPTIONS,
      required:
        "Please select type of business company (e.g. MANUFACTURING, TRADING, etc.)",
      id: nanoid(),
    },
    {
      name: "workArea",
      label: "Work Area (कार्य क्षेत्र)",
      type: "text",
      required: "Please enter area of work",
      id: nanoid(),
      maxLength: 75,
    },
    {
      name: "vatRegistration",
      label: "VAT Registration No (मूल्य अभिबृद्धि कर दर्ता नं.)",
      type: "vatNo",
      id: nanoid(),
      maxLength: 15,
    },
    {
      name: "nrbRegistration",
      label:
        "NRB Registration No (नेपाल राष्ट्र बैंकमा दर्ता भएको भए दर्ता नं.)",
      type: "citizenship",
      id: nanoid(),
      maxLength: 15,
    },
    {
      name: "nrbApproval",
      label: "NRB Approval Date (नेपाल राष्ट्र बैंकको स्वीकृत मिति) (B.S.)",
      type: "date-picker-citizen",
      engLabel: "NRB Approval Date (नेपाल राष्ट्र बैंकको स्वीकृत मिति) (A.D.)",
      dualDate: true,
      id: nanoid(),
      maxLength: 75,
    },

    {
      name: "isMF",
      label: "Is Mutual Fund? (म्युचुअल फण्ड हो?)",
      type: "switch",
      required: "Please specify whether company is mutual fund or not",
      id: nanoid(),
    },
    {
      name: "isSubsidiary",
      label: "Is Subsidiary? (सहायक हो?)",
      type: "switch",
      required: "Please specify whether company is subsidiary or not",
      id: nanoid(),
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
    },
    {
      name: "isListed",
      label: "Is Company Listed? (कम्पनी सूचीबद्ध छ?)",
      type: "switch",

      required: "Please specify whether company is listed or not",
      id: nanoid(),
    },
    {
      name: "listingDate",
      label: "Listing Date (सूचीकरण मिति) (B.S.)",
      type: "date-picker-citizen",

      engLabel: "Listing Date (सूचीकरण मिति) (A.D.)",
      dualDate: true,

      required: true,
      id: nanoid(),
      watchFor: "isListed",
      dependentAction: {
        type: "HIDDEN",
        condition: false,
      },
    },
  ];
  // const [checkedOptions, setCheckedOptions] = React.useState({});

  // // Function to handle change in the checked status of options
  // const handleChange = (name) => (event) => {
  //   setCheckedOptions({
  //     ...checkedOptions,
  //     [name]: event.target.checked, // Update the checked status for the specific option
  //   });
  // };
  return (
    <div style={{ paddingBottom: "250px", padding: "5rem" }}>
      <form
      // onSubmit={handleSubmit(onSubmit)}
      >
        <Grid align="center">
          {CorporateField?.map((d, index) => {
            return (
              <RenderInput
                key={index}
                inputField={d}
                // register={register}
                // control={control}
                // errors={errors}
                // watch={watch}
                // setValue={setValue}
              />
            );
          })}
        </Grid>
      </form>
    </div>
  );
};

export default CorporateDetailsDp;
