import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, useTheme, Stack } from "@mui/material";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { nanoid } from "nanoid";
import { FieldArray, FormikProvider } from "formik";
import { useKycFamilyForm } from "./usekycFamilyForm";

const referalFields = [
  {
    type: "dropDownWithValue",
    name: "relation",
    options: [{ label: "Referral Person", value: "referralPerson" }],
    isDisabled: true,
    col: 12,
    xs: 12,
    sm: 6,
    id: nanoid(),
  },
  {
    type: "text",
    name: "memberName",
    label: "Referral Name",
    col: 12,
    xs: 12,
    sm: 6,
    id: nanoid(),
  },
  {
    type: "text",
    name: "email",
    label: "Referral Email",
    col: 12,
    xs: 12,
    sm: 6,
    id: nanoid(),
  },
  {
    type: "text",
    name: "mobileNumber",
    label: "Referral Mobile Number",
    col: 12,
    xs: 12,
    sm: 6,
    id: nanoid(),
  },
];

const staticFields = [
  {
    type: "dropDown",
    name: "relation",
    label: "Relation",
    col: 12,
    xs: 12,
    sm: 6,
    id: nanoid(),
  },
  {
    type: "text",
    name: "memberName",
    label: "Enter Name",
    col: 12,
    xs: 12,
    sm: 6,
    id: nanoid(),
  },
];

const FamilyIndividualDpForms = () => {
  const theme = useTheme();
  const { formik } = useKycFamilyForm();
  console.log("hiiii", formik);

  return (
    <div data-aos="zoom-in-right">
      <Grid container>
        <Grid
          item
          sm={12}
          md={12}
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
            Family Members
          </Typography>
        </Grid>
      </Grid>

      <RenderInput inputField={referalFields} formik={formik} />

      <FormikProvider value={formik} {...formik}>
        <FieldArray name="familyDetails">
          {({ push, remove }) => {
            return (
              formik.values.familyDetails &&
              formik.values?.familyDetails.map((address, index) => {
                const field = staticFields.map((d) => {
                  if (d.name === "relation") {
                    return {
                      ...d,
                      options:
                        index <= 2
                          ? [
                              { value: "father", label: "Father" },
                              { value: "mother", label: "Mother" },
                              { value: "grandFather", label: "Grand Father" },
                            ]
                          : [
                              { value: "spouse", label: "Spouse" },
                              { value: "motherInLaw", label: "Mother In Law" },
                              { value: "fatherInLaw", label: "Father In Law" },
                              { value: "son", label: "Son" },
                              { value: "daughter", label: "Daughter" },
                            ],
                      isDisabled: index <= 2,
                      name: `familyDetails.${index}.${d.name}`,
                    };
                  } else {
                    // Keep other fields as they are
                    return {
                      ...d,
                      name: `familyDetails.${index}.${d.name}`,
                    };
                  }
                });
                return (
                  <>
                    <Grid mt={2}>
                      <RenderInput
                        inputField={field}
                        formik={formik}
                        index={index}
                        isFieldArray={true}
                        fieldArrayName="familyDetails"
                        pushArray={() => push({})}
                        removeArray={() => remove()}
                      />
                    </Grid>
                    {index >= 1 &&
                      index === formik.values.familyDetails.length - 1 && (
                        <Button
                          variant="outlined"
                          color="primary"
                          style={{
                            border: "1px solid #6C49B4",
                            margin: "1rem 1rem 1rem 0",
                          }}
                          onClick={() =>
                            push({
                              relation: "",
                              memberName: "",
                            })
                          }
                        >
                          <Typography color={"#6C49B4"} fontWeight={600}>
                            + Add
                          </Typography>
                        </Button>
                      )}
                    {index >= 3 && formik.values.familyDetails.length > 3 && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        style={{
                          border: "1px solid #B4271F",
                          margin: "1rem 0",
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

        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
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

export default FamilyIndividualDpForms;
