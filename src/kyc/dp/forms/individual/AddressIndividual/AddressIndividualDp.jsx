import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FormikProvider } from "formik";
import { FieldArray } from "formik";
import { useAddressForm } from "./useAddressForm";
import { AddressField } from "./AddressField";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { Button } from "@mui/base";

const AddressIndividualDp = () => {
  const { formik } = useAddressForm();
  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <Typography
          sx={{ fontSize: "24px", lineHeight: "32px", fontWeight: "400" }}
        >
          Permanent Information
        </Typography>
      </div>
      <FormikProvider value={formik} {...formik}>
        <FieldArray name="addresses">
          {({ push, remove }) => {
            return (
              formik.values.addresses &&
              formik.values?.addresses.map((address, index) => {
                const fieldArray = AddressField.filter((d) => {
                  if (index === 0) {
                    return d;
                  } else return d.name !== "have_different_permanent_address";
                });

                const field = fieldArray.map((d) => {
                  return {
                    ...d,
                    name: `addresses.${index}.${d.name}`,
                  };
                });

                return (
                  <Grid
                    component="form"
                    noValidate
                    display="flex"
                    flexDirection="column"
                    gap={{ lg: "1.25rem", md: ".5rem", xs: "1.5rem" }}
                    key={index}
                  >
                    <RenderInput
                      inputField={field}
                      formik={formik}
                      index={index}
                      isFieldArray={true}
                      fieldArrayName="addresses"
                      pushArray={() => push({})}
                      removeArray={() => remove()}
                    />
                  </Grid>
                );
              })
            );
          }}
        </FieldArray>
        <Button onClick={formik.handleSubmit}>Submit</Button>
      </FormikProvider>
    </div>
  );
};

export default AddressIndividualDp;
