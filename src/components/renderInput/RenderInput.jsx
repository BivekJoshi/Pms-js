import {
  Autocomplete,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
import AsyncDropDown from "./AsyncDropDown";
import { DatePicker } from "@mui/x-date-pickers";

const RenderInput = ({ inputField, formik, checkedOptions }) => {
  console.log(inputField);
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
                  fullWidth
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
      case "switch":
        return (
          <FormControlLabel
            sx={{ textAlign: "left" }}
            control={
              <Switch
                sx={{ textAlign: "left" }}
                checked={checkedOptions[element?.name]}
                onChange={formik.handleChange}
                name={element?.name}
              />
            }
            label={element?.label}
          />
        );

      case "datePicker":
        // Convert the string date to a Date object
        const dateObject = new Date(formik.values[element.name]);

        // Format the date object
        const formattedDate = dateObject
          .toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })
          .replace(",", "");
        return (
          <Grid display={"flex"} gap={2}>
            <DatePicker
              sx={{ width: "100%" }}
              label={formattedDate}
              value={formik.values || ""}
              onChange={formik.handleChange}
            />
            <DatePicker
              sx={{ width: "100%" }}
              label={element?.engLabel}
              value={formik.values || ""}
              onChange={formik.handleChange}
            />{" "}
          </Grid>
        );

      case "asyncDropDown":
        return <AsyncDropDown element={element} formik={formik} />;

      default:
        return <TextField name={element?.name} label={element?.label} />;
    }
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="flex-end">
        {inputField?.map((element, index) => {
          return (
            <Grid
              item
              sm={element?.sm}
              xs={element?.xs || element?.sm}
              md={element?.md}
              key={index}
              sx={{ textAlign: "left" }}
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
