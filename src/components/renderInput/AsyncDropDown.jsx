import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AsyncDropDown = ({ element, formik }) => {
  const [asyncOptions, setAsyncOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(element.path);
        const data = response?.data;
        const options = data?.map((item) => {
          return {
            label: item[element.responseLabel],
            value: item[element.responseId],
          };
        });
        setAsyncOptions(options); // Assuming response.data is an array of options
      } catch (error) {
        console.error("Error fetching async dropdown options:", error);
      }
    };

    if (element.type === "asyncDropDown") {
      fetchData();
    }
  }, [element.path, element.type]);
  return (
    <Autocomplete
      id={element.name}
      name={element.name}
      options={asyncOptions}
      getOptionLabel={(option) => option?.label || ""}
      // value={formik.values[element.name]}

      value={asyncOptions?.find(
        (option) => option?.value === formik.values[element.name]
      )}
      onChange={(event, newValue) => {
        formik.setFieldValue(element.name, newValue?.value || "");
      }}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label={element.label}
          error={
            formik.touched[element.name] && Boolean(formik.errors[element.name])
          }
          helperText={
            formik.touched[element.name] && formik.errors[element.name]
          }
          variant="outlined"
        />
      )}
    />
  );
};

export default AsyncDropDown;
