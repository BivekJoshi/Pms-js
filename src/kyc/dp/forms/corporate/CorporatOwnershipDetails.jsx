import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { corporatOwnershipDetailsForm } from "../../../../form/auth/CorporateDp/CorporatOwnershipDetails/corporatOwnershipDetailsForm";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { FieldArray, FormikProvider } from "formik";

const CorporatOwnershipDetails = () => {
  const DETAILS = [
    {
      name: "designation",
      label: "Designation (पद)",
      type: "dropDown",
      sm: 12,
      options: [
        { value: "CEO", label: "CEO" },
        { value: "Secretary", label: "Secretary" },
      ],
      disabled: true,
      id: nanoid(),
    },
    {
      name: "firstName",
      label: "First Name (पहिलो नाम)",
      type: "text",
      placeholder: "Enter first name",
      required: "Please enter first name",
      md: 4,
      sm: 12,
      maxLength: 25,
      id: nanoid(),
    },
    {
      name: "lastName",
      label: "Last Name (थर)",
      type: "text",
      placeholder: "Enter last name",
      required: "Please enter last name",
      md: 4,
      sm: 12,
      maxLength: 25,
      id: nanoid(),
    },
    {
      name: "fatherName",
      label: "Father's Name (बुवाको नाम)",
      type: "text",
      placeholder: "Enter father's name",
      required: "Please enter father's name",
      md: 4,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "grandFather",
      label: "Grandfather's Name (हजुरबुबाको नाम)",
      type: "text",
      placeholder: "Enter grandfather's name",
      required: "Please enter grandfather's name",
      md: 4,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "spouseName",
      label: "Spouse Name (पति/पत्नीको नाम)",
      type: "text",
      placeholder: "Enter spouse name",
      md: 4,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "permanentAddress",
      label: "Permanent Address (स्थाई ठेगाना)",
      type: "text",
      placeholder: "Enter permanent address",
      required: "Please enter permanent address",
      md: 4,
      sm: 12,
      maxLength: 80,
      id: nanoid(),
    },
    {
      name: "currentAddress",
      label: "Current Address (हालको ठेगाना)",
      type: "text",
      placeholder: "Enter current address",
      required: "Please enter current address",
      md: 4,
      sm: 12,
      maxLength: 80,
      id: nanoid(),
    },
    {
      name: "telephoneNo",
      label: "Telephone Number (टेलिफोन नम्बर)",
      type: "number",
      placeholder: "Enter telephone number",
      md: 4,
      sm: 12,
      minLength: 7,
      maxLength: 9,
      id: nanoid(),
    },
    {
      name: "mobileNo",
      label: "Mobile Number (मोबाइल नम्बर)",
      type: "number",
      placeholder: "Enter mobile number",
      required: "Please enter mobile number",
      md: 4,
      sm: 12,
      maxLength: 21,
      minLength: 10,
      id: nanoid(),
    },
    {
      name: "email",
      label: "Email Address (इ-मेल ठेगाना)",
      type: "text",
      placeholder: "Enter email address",
      required: "Please enter email address",
      md: 4,
      sm: 12,
      maxLength: 254,
      id: nanoid(),
    },
    {
      name: "panNo",
      label: "PAN Number (प्यान नम्बर)",
      minLength: 9,
      maxLength: 10,
      type: "text",
      placeholder: "Enter PAN number",
      required: "Please enter PAN number",
      md: 4,
      sm: 12,
      id: nanoid(),
    },
  ];
  const OwnershipField = [
    {
      name: "designation",
      label: "Designation (पद)",
      type: "dropDown",
      placeholder: "Select designation",
      required: "Please select designation",
      sm: 12,
      options: [
        { value: "Director", label: "Director" },
        { value: "Chief Marketing Officer", label: "Chief Marketing Officer" },
        { value: "General Counsel", label: "General Counsel" },
      ],
      id: nanoid(),
    },
    {
      name: "firstName",
      label: "First Name (पहिलो नाम)",
      type: "text",
      placeholder: "Enter first name",
      required: "Please enter first name",
      md: 4,
      sm: 12,
      maxLength: 25,
      id: nanoid(),
    },
    {
      name: "lastName",
      label: "Last Name (थर)",
      type: "text",
      placeholder: "Enter last name",
      required: "Please enter last name",
      md: 4,
      sm: 12,
      maxLength: 25,
      id: nanoid(),
    },
    {
      name: "fatherName",
      label: "Father's Name (बुवाको नाम)",
      type: "text",
      placeholder: "Enter father's name",
      required: "Please enter father's name",
      md: 4,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "grandFather",
      label: "Grandfather's Name (हजुरबुबाको नाम)",
      type: "text",
      placeholder: "Enter grandfather's name",
      required: "Please enter grandfather's name",
      md: 4,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "spouseName",
      label: "Spouse Name (पति/पत्नीको नाम)",
      type: "text",
      placeholder: "Enter spouse name",
      md: 4,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "permanentAddress",
      label: "Permanent Address (स्थाई ठेगाना)",
      type: "text",
      placeholder: "Enter permanent address",
      required: "Please enter permanent address",
      md: 4,
      sm: 12,
      maxLength: 80,
      id: nanoid(),
    },
    {
      name: "currentAddress",
      label: "Current Address (हालको ठेगाना)",
      type: "text",
      placeholder: "Enter current address",
      required: "Please enter current address",
      md: 4,
      sm: 12,
      maxLength: 80,
      id: nanoid(),
    },
    {
      name: "telephoneNo",
      label: "Telephone Number (टेलिफोन नम्बर)",
      type: "number",
      placeholder: "Enter telephone number",
      md: 4,
      sm: 12,
      minLength: 7,
      maxLength: 9,
      id: nanoid(),
    },
    {
      name: "mobileNo",
      label: "Mobile Number (मोबाइल नम्बर)",
      type: "number",
      placeholder: "Enter mobile number",
      required: "Please enter mobile number",
      md: 4,
      sm: 12,
      maxLength: 21,
      minLength: 10,
      id: nanoid(),
    },
    {
      name: "email",
      label: "Email Address (इ-मेल ठेगाना)",
      type: "text",
      placeholder: "Enter email address",
      required: "Please enter email address",
      md: 4,
      sm: 12,
      maxLength: 254,
      id: nanoid(),
    },
    {
      name: "panNo",
      label: "PAN Number (प्यान नम्बर)",
      minLength: 9,
      maxLength: 10,
      type: "text",
      placeholder: "Enter PAN number",
      required: "Please enter PAN number",
      md: 4,
      sm: 12,
      id: nanoid(),
    },
  ];

  const theme = useTheme();

  const FirstContactField = [
    {
      name: "fcpName",
      label: "Full Name (पुरा नाम)",
      type: "text",
      placeholder: "Enter full name",
      required: "Please enter first contact person name",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "fcpDesignation",
      label: "Designation (पद)",
      type: "text",
      placeholder: "Enter designation",
      required: true,
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "fcpFatherName",
      label: "Father's Name (बुवाको नाम)",
      type: "text",
      placeholder: "Enter father's name",
      required: "Please enter first contact person father's name",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "fcpGrandFatherName",
      label: "Grandfather's Name (हजुरबुबाको नाम)",
      type: "text",
      placeholder: "Enter grandfather's name",
      required: "Please enter first contact person grandfather's name",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
  ];

  const SecondContactField = [
    {
      name: "scpName",
      label: "Full Name (पुरा नाम)",
      type: "text",
      placeholder: "Enter full name",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "scpDesignation",
      label: "Designation (पद)",
      type: "text",
      placeholder: "Enter designation",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "scpFatherName",
      label: "Father's Name (बुवाको नाम)",
      type: "text",
      placeholder: "Enter father's name ",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "scpGrandFatherName",
      label: "Grandfather's Name (हजुरबुबाको नाम)",
      type: "text",
      placeholder: "Enter grandfather's name",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
  ];

  const ThirdContactField = [
    {
      name: "trdName",
      label: "Full Name (पुरा नाम)",
      type: "text",
      placeholder: "Enter full name",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "trdDesignation",
      label: "Designation (पद)",
      type: "text",
      placeholder: "Enter designation",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "trdFatherName",
      label: "Father's Name (बुवाको नाम)",
      type: "text",
      placeholder: "Enter father's name ",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
    {
      name: "trdGrandFatherName",
      label: "Grandfather's Name (हजुरबुबाको नाम)",
      type: "text",
      placeholder: "Enter grandfather's name",
      md: 6,
      sm: 12,
      maxLength: 75,
      id: nanoid(),
    },
  ];
  const { formik, loading } = corporatOwnershipDetailsForm();

  const getAddButtonStatus = (index) => index === bodDetailsFields.length - 1;

  const getRemoveButtonStatus = (index) => {
    return index > 0 && index === bodDetailsFields.length - 1;
  };
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
          Ownership Details
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid>
          <>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              CEO Details
            </Typography>
            <RenderInput inputField={DETAILS} formik={formik} />
          </>
          <>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              {" "}
              Company Secretary Details
            </Typography>
            <RenderInput inputField={DETAILS} formik={formik} />
          </>
          <>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              BOD Details
            </Typography>
            <FormikProvider value={formik} {...formik}>
              <FieldArray name="bodDetails">
                {({ push, remove }) =>
                  formik.values.bodDetails &&
                  formik.values?.bodDetails.map((bodDetail, index) => {
                    const field = OwnershipField.map((d) => {
                      return {
                        ...d,
                        name: `addresses.${index}.${d.name}`,
                      };
                    });
                    // console.log(bodDetail);
                    // console.log("OwnershipField",OwnershipField);
                    return (
                      <div key={index}>
                        <RenderInput
                          inputField={field}
                          formik={formik}
                          index={index}
                          // isFieldArray={true}
                          fieldArrayName="bodDetails"
                        />
                        <Grid margin="1rem 0" display="flex" gap={2}>
                          <Button
                            variant="outlined"
                            color="primary"
                            style={{border:"1px solid #79747E"}}
                            disabled={
                              index !== formik.values.bodDetails.length - 1
                            }
                            onClick={() =>
                              push({
                                id: nanoid(),
                                ...OwnershipField.reduce((acc, field) => {
                                  acc[field.name] = ""; // Initialize all fields with an empty string
                                  return acc;
                                }, {}),
                              })
                            }
                          >
                            <Typography color="#6750A4">+ Add</Typography>
                            
                          </Button>
                          {index !== 0 && (
                            <Button
                              variant="outlined"
                              color="secondary"
                              style={{border:"1px solid #B4271F"}}
                              onClick={() => remove(index)}
                              disabled={index === 0}
                            >
                             <Typography color="#B4271F">Remove</Typography>  
                            </Button>
                          )}
                        </Grid>
                      </div>
                    );
                  })
                }
              </FieldArray>
            </FormikProvider>
          </>
          <>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              First Contact Person (पहिलो सम्पर्क व्यक्ति)
            </Typography>
            <RenderInput inputField={FirstContactField} formik={formik} />
          </>
          <>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              Second Contact Person (दोस्रो सम्पर्क व्यक्ति )
            </Typography>
            <RenderInput inputField={SecondContactField} formik={formik} />
          </>
          <>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              Third Contact Person (तेस्रो सम्पर्क व्यक्ति)
            </Typography>
            <RenderInput inputField={ThirdContactField} formik={formik} />
          </>
        </Grid>
        <button type="submit"> save</button>
      </form>
    </div>
  );
};

export default CorporatOwnershipDetails;
