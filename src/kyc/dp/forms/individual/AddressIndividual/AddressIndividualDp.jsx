import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
import React from "react";
import { FormikProvider } from "formik"
import { FieldArray } from "formik"
import { useAddressForm } from "./useAddressForm"
import { AddressField } from "./AddressField"
import RenderInput from "../../../../../components/renderInput/RenderInput"
import { useGetAddress } from "../../../../../hooks/kyc/address/useAddress"
import { useNavigate } from "react-router-dom";
import { SET_FORM } from "../../../../../redux/types/types";
import { nextFormPath } from "../../../../../utility/userHelper";
import { useDispatch } from "react-redux";

const AddressIndividualDp = () => {
  const { data: addressData } = useGetAddress()
  const data = addressData && addressData?.data
  const { formik } = useAddressForm(data)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme()


  const handleBack = () => {
    navigate(nextFormPath(2));
    dispatch({ type: SET_FORM, payload: 2 });
  }

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
                    return d
                  } else return d.name !== "perAndCurAddressSame"
                })

                const field = fieldArray.map((d) => {
                  return {
                    ...d,
                    name: `addresses.${index}.${d.name}`,
                    ...(d.dependentFieldValue && {
                      dependentFieldValue: `addresses.${index}.${d.dependentFieldValue}`,
                    }),
                    ...(d.clearField && {
                      clearField: d.clearField?.map(
                        (field) => `addresses.${index}.${field}`
                      ),
                    }),
                  }
                })
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
                          wordNo: "",
                          tole: "",
                          streetNo: "",
                          mobileNo: "",
                          telephoneNo: "",
                          email: "",
                          website: "",
                          longitude: "",
                          latitude: "",
                          houseNo: "",
                          perAndCurAddressSame: false,
                        })
                      }
                      removeArray={() => remove(1)}
                    />
                  </Grid>
                )
              })
            )
          }}
        </FieldArray>
        <Grid sx={{ display: "flex", justifyContent: "space-between", marginTop: '1rem' }}>
          <Button
            onClick={handleBack}
            variant="outlined"
            color="secondary"
          >
            Back
          </Button>
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
  )
}

export default AddressIndividualDp
