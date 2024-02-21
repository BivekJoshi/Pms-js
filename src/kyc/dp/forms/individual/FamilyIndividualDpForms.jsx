import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, useTheme, Stack } from "@mui/material";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useKycFamilyForm } from "../../../../hooks/kyc/individual/family/usekycFamilyForm";
import { nanoid } from "nanoid";
import { FieldArray, FormikProvider } from "formik";

const FamilyIndividualDpForms = () => {
  const theme = useTheme();
  const { formik } = useKycFamilyForm();

  const referalFields = [
    {
      type: "dropDown",
      name: "relation",
      options: [
        {id: nanoid(), label: "Referral Person", value: "referralPerson"}
      ],
      disabled: true,
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
  const fatherDetails = [
    {
      type: "text",
      label: "Father",
      name: "relation",
      required: true,
      disabled: true,
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
    {
      type: "text",
      name: "memberName",
      label: "Father's Name",
      required: true,
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
  ]

  const staticFields = [
    {
      type: "textWithValue",
      name: "relation",
      label: "Fathers Name",
      disabled: true,
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
    {
      type: "text",
      name: "relation",
      label: "Fathers Name",
      disabled: true,
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
  ]

  const handleAddMore = () => {
    formik.setValues({
      ...formik.values,
      familyDetails: [...formik.values.familyDetails, { ...staticFields }],
    });
  };

  const handleRemove = () => {
  };

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
      <FormikProvider value={formik} {...formik}>
        <FieldArray name="familyDetails">
          {({ push, remove }) => {
            return (
              formik.values.familyDetails &&
              formik.values?.familyDetails.map((address, index) => {
                const fieldArray = referalFields.map((d) => {
                  if (index === 0) {
                    return d;
                  }
                })
                const field = fieldArray.map((d) => {
                  return {
                    ...d,
                    name: `familyDetails.${index}.${d.name}`,
                  }
                })

                return (
                <RenderInput
                  inputField={field}
                  formik={formik}
                  index={index}
                  isFieldArray={true}
                  fieldArrayName="familyDetails"
                  pushArray={() => push({})}
                  removeArray={() => remove()}
                />
                )
              })
            );
          }}
        </FieldArray>
      </FormikProvider>
      <Stack
        mt={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid>
          <Button onClick={handleAddMore} variant="contained" color="primary">
            Add More
          </Button>
          <Button onClick={handleRemove} variant="contained" color="primary">
            Remove
          </Button>
        </Grid>
        <Grid>
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            color="secondary"
          >
            Next
          </Button>
        </Grid>
      </Stack>
    </div>
  );
};

export default FamilyIndividualDpForms;
