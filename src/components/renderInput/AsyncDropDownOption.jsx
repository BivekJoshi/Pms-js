import React, { useEffect, useState, useMemo } from "react";
import { axiosInstance } from "../../api/axiosInterceptor";
import { Autocomplete, TextField } from "@mui/material";
import { getIn } from "formik";
import { useTranslation } from 'react-i18next';

const AsyncDropDownOption = ({ element, formik, isFieldArray }) => {
  const { t } = useTranslation();
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const formValues = isFieldArray
    ? getIn(formik.values, element.name)
    : formik.values[element.name];

  const formError = isFieldArray
    ? getIn(formik.errors, element.name)
    : formik.errors[element.name];

  const formTouched = isFieldArray
    ? getIn(formik.touched, element.name)
    : formik.touched[element.name];

  const getDependentValue = (dependent) => {
    return getIn(formik.values, dependent);
  };

  const referenceValue = getDependentValue(element.dependentFieldValue);

  const memoizedFetchData = useMemo(
    () => async () => {
      try {
        if (!element.path || !element.reference) return "";
        if (referenceValue) {
          const path = element.reference
            ? `${element.path}?${element.reference}=${referenceValue || "0"}`
            : element.path;
          const response = await axiosInstance.get(path);

          const data = response.data;

          const optionsData = data?.map((item) => ({
            label: item.name,
            value: item.name,
          }));
          setOptions(optionsData);
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    [element.path, element.reference, referenceValue]
  ); // Memoize the fetchData function

  useEffect(() => {
    memoizedFetchData(); // Call the memoized function to fetch data
  }, [memoizedFetchData]);

  useEffect(() => {
    if (selectedValue && formik.values[element.name] !== selectedValue.value) {
      formik.setFieldValue(element.name, selectedValue.value || "");
    }
  }, [selectedValue, element.name]); //eslint-disable-line

  useEffect(() => {
    setSelectedValue({
      label: formValues,
      value: formValues,
    });
  }, [formValues]);

  const handleOnChange = (event, newValue) => {
    setSelectedValue(newValue);
    if (element?.clearField) {
      for (let i = 0; i < element.clearField.length; i++) {
        formik.setFieldValue(element.clearField[i], "");
      }
    }
  };

  return (
    <div>
      <Autocomplete
        id={element.name}
        name={element.name}
        options={options}
        getOptionLabel={(option) => option?.label || ""}
        value={selectedValue || { label: formValues, name: formValues } || ""}
        onChange={handleOnChange}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label={t(element.label)}
            error={formTouched && Boolean(formError)}
            helperText={formTouched && formError}
            variant="outlined"
          />
        )}
      />
    </div>
  );
};

export default AsyncDropDownOption;
