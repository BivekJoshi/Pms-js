import { nanoid } from "@reduxjs/toolkit";
import React, { useContext } from "react";
import { corporatOwnershipDetailsForm } from "../../../../form/auth/CorporateDp/CorporatOwnershipDetails/corporatOwnershipDetailsForm";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { FieldArray, FormikProvider } from "formik";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CorporatOwnershipDetails = () => {
  const theme = useTheme();
  const DETAILS = [
    {
      name: "designation",
      label: "Designation (पद)",
      type: "dropDown",
      sm: 12,
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
  const titles = [
    {
      initialvalue: FirstContactField,
      name1: "First Contact Person (पहिलो सम्पर्क व्यक्ति)",
    },
    {
      initialvalue: SecondContactField,
      name1: "Second Contact Person (दोस्रो सम्पर्क व्यक्ति )",
    },
    {
      initialvalue: ThirdContactField,
      name1: "Third Contact Person (तेस्रो सम्पर्क व्यक्ति)",
    },
  ];
  const { formik } = corporatOwnershipDetailsForm();
  console.log(formik.values, "hi");
  return (
    <div style={{ paddingBottom: "250px", padding: "5rem" }}>
      <FormikProvider value={formik} {...formik}>
        <FieldArray name="details">
          {({ push, remove }) => {
            return (
              formik.values.details &&
              formik.values?.details.map((item, index) => {
                const field = DETAILS.map((d, i) => {
                  return {
                    ...d,
                    options:
                      index <= 1
                        ? [
                            { value: "Secretary", label: "Secretary" },
                            { value: "CEO", label: "CEO" },
                          ]
                        : [
                            { value: "Director", label: "Director" },

                            {
                              value: "Chief Marketing Officer",
                              label: "Chief Marketing Officer",
                            },
                            {
                              value: "General Counsel",
                              label: "General Counsel",
                            },
                          ],
                    isDisabled: index <= 1,
                    name: `details.${index}.${d.name}`,
                  };
                });
                console.log(
                  formik?.touched &&
                    formik?.errors?.details &&
                    formik?.errors?.details[index] !== undefined
                );
                return (
                  <>
                    <Grid
                      component="form"
                      noValidate
                      display="flex"
                      flexDirection="column"
                      gap={{ lg: "1.25rem", md: ".5rem", xs: "1.5rem" }}
                      key={index}
                      marginBottom="1rem"
                    >
                      <Accordion
                        expanded={
                          (
                            formik?.errors?.details &&
                            formik?.errors?.details[index] !== undefined) ===
                          true
                          //   ? true
                          //   : false
                        }
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel${index}-content`}
                          id={`panel${index}-header`}
                        >
                          <Typography variant="h5">
                            {index === 0
                              ? "CEO Details"
                              : index === 1
                              ? "Company Secretary Details"
                              : "BOD Details"}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <RenderInput
                            inputField={field}
                            formik={formik}
                            index={index}
                            isFieldArray={true}
                            fieldArrayName="details"
                            pushArray={() => push({})}
                            removeArray={() => remove()}
                          />
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                    {index >= 2 &&
                      index === formik.values.details.length - 1 && (
                        <Button
                          variant="outlined"
                          color="primary"
                          style={{
                            border: "1px solid #6C49B4",
                            margin: "0  0 1rem 0",
                          }}
                          onClick={() =>
                            push({
                              designation: "",
                              firstName: "",
                              lastName: "",
                              fatherName: "",
                              grandFather: "",
                              spouseName: "",
                              permanentAddress: "",
                              currentAddress: "",
                              telephoneNo: "",
                              mobileNo: "",
                              email: "",
                            })
                          }
                          disabled={index < formik.values.details.length - 1}
                        >
                          <Typography
                            color={
                              index < formik.values?.details.length - 1
                                ? theme.palette.info
                                : "#6C49B4"
                            }
                            fontWeight={600}
                          >
                            + Add
                          </Typography>
                        </Button>
                      )}{" "}
                    {index >= 2 && formik.values.details.length > 3 && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        style={{
                          border: "1px solid #B4271F",
                          margin: "0 0 1rem",
                        }}
                        onClick={() => {
                          remove(index);
                          console.log(index);
                        }}
                      >
                        <Typography color="#B4271F" fontWeight={600}>
                          Remove
                        </Typography>
                      </Button>
                    )}
                  </>
                );
              })
            );
          }}
        </FieldArray>
        {titles.map((title, index) => (
          <Accordion key={index} style={{ margin: "1rem 0 0" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 12}-content`}
              id={`panel${index + 12}-header`}
            >
              <Typography variant="h5">{title.name1}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RenderInput inputField={title.initialvalue} formik={formik} />
            </AccordionDetails>
          </Accordion>
        ))}
        <Grid
          sx={{ display: "flex", justifyContent: "flex-end", margin: "1rem 0" }}
        >
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            color="secondary"
          >
            Next
          </Button>
        </Grid>
      </FormikProvider>
    </div>
  );
};

export default CorporatOwnershipDetails;
