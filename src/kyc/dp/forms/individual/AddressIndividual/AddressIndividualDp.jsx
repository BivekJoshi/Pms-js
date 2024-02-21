import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { FormikProvider } from "formik";
import { FieldArray } from "formik";
import { useAddressForm } from "./useAddressForm";
import { AddressField } from "./AddressField";
import RenderInput from "../../../../../components/renderInput/RenderInput";

const AddressIndividualDp = () => {
  const { formik } = useAddressForm();
  const theme = useTheme();
  
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
          Address Details
        </Typography>
      </Box>
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
                      pushArray={() =>
                        push({
                          country: "",
                          province: "",
                          district: "",
                          municipality: "",
                          wardNo: "",
                          tole: "",
                          streetNo: "",
                          mobileNo: "",
                          telephoneNo: "",
                          email: "",
                          website: "",
                          longitude: "",
                          latitude: "",
                          houseNo: "",
                          have_different_permanent_address: false,
                        })
                      }
                      removeArray={() => remove()}
                    />
                  </Grid>
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

export default AddressIndividualDp;
