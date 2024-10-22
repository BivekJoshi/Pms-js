import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInterceptor";
import { useTranslation } from 'react-i18next';

const AsyncDropDown = ({ element, formik, formVaues }) => {
  const [asyncOptions, setAsyncOptions] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(element.path);
        const data = response?.data;
        const options = data?.map((item) => {
          return {
            label: item[element.responseLabel],
            value: item[element.responseId],
          };
        });
        setAsyncOptions(options);
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

      value={asyncOptions?.find((option) => option.value === formVaues.value)}
      onChange={(event, newValue) => {
        formik.setFieldValue(element.name, newValue.value);
      }}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label={t(element.label)}
          error={
            formik.touched[element.name] && Boolean(formik.errors[element.name])
          }
          required={element.required}
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
