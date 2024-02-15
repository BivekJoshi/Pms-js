import { Autocomplete, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import AsyncDropDown from "./AsyncDropDown";

const RenderInput = ({ inputField, formik }) => {
  const getComponentToRender = (element) => {
    switch (element.type) {
      case "text":
        return (
          <TextField
            name={element?.name}
            label={element?.label}
            value={formik.values[element.name]}
            onChange={formik.handleChange}
            fullWidth
            required={element.required}
            variant="outlined"
            error={
              formik.touched[element.name] &&
              Boolean(formik.errors[element.name])
            }
            helperText={
              formik.touched[element.name] && formik.errors[element.name]
            }
          />
        );
      case "dropDown":
        return (
          <Autocomplete
            id={element.name}
            name={element.name}
            options={element?.options}
            getOptionLabel={(option) => option?.label || ""}
            value={element?.options.find(
              (option) => option?.value === formik.values[element.name]
            )}
            onChange={(event, newValue) => {
              formik.setFieldValue(element.name, newValue?.value || ""); // Set value to newValue's value property or empty string if undefined
            }}
            fullWidth
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label={element.label}
                  error={
                    formik.touched[element.name] &&
                    Boolean(formik.errors[element.name])
                  }
                  helperText={
                    formik.touched[element.name] && formik.errors[element.name]
                  }
                  variant="outlined"
                />
              );
            }}
          />
        );
      case "number":
        return (
          <TextField
            name={element?.name}
            label={element?.label}
            value={formik.values[element.name]}
            onChange={formik.handleChange}
            fullWidth
            type="number"
            required={element.required}
            variant="outlined"
            error={
              formik.touched[element.name] &&
              Boolean(formik.errors[element.name])
            }
            helperText={
              formik.touched[element.name] && formik.errors[element.name]
            }
          />
        );
      case "asyncDropDown":
        return <AsyncDropDown element={element} formik={formik} />;

      default:
        return <TextField name={element?.name} label={element?.label} />;
    }
  };

  return (
    <div>
      <Grid container spacing={2} alignItems={"center"}>
        {inputField?.map((element, index) => {
          return (
            <Grid
              item
              sm={element?.sm}
              xs={element?.xs || element?.sm}
              md={element?.md}
              key={index}
            >
              {getComponentToRender(element)}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RenderInput;
