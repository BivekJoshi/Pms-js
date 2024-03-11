import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { axiosInstance } from '../../api/axiosInterceptor';

const AsyncDropDown = ({ element, formik, formVaues }) => {
  // console.log(formik.values.addresses[0]?.province, "province");
  // console.log(formik.values.addresses[0]?.district, "districtllllll");
  console.log(formVaues,"formValuesss");
  
  const [asyncOptions, setAsyncOptions] = useState([]);
  

  const replaceBy = formik?.values?.addresses[0]?.province;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (element.path) {
          const response = await axiosInstance.get(element.path);
          const data = response?.data;
          const options = data?.map((item) => {
            return {
              label: item[element.responseLabel],
              value: item[element.responseId],
            };
          });
          setAsyncOptions(options);// Assuming response.data is an array of options
        }
      } catch (error) {
        console.error("Error fetching async dropdown options:", error);
      }
    };

    if (element.type === "asyncDropDown" && !element?.dependentAction?.fetch) {
      fetchData();
    }
  }, [element.path, element.type]);

  useEffect(() => {
    const fetchDataDistrict = async (replaceBy) => {
      try {
        if (replaceBy) {
          const apiPath = element.dependentAction.depApi.replace("#", replaceBy);
          const response = await axiosInstance.get(apiPath);
          const data = response?.data;
          const options = data?.map((item) => {
            return {
              label: item[element.responseLabel],
              value: item[element.responseId],
            };
          });
          setAsyncOptions(options);
          return response;
        }

      } catch (error) {
        console.error("Error fetching async dropdown options:", error);
      }
    }

    if (element.type === "asyncDropDown" && element?.dependentAction?.fetch) {
      fetchDataDistrict(replaceBy);
    }
  }, [element.path, element.type, replaceBy]);

  return (
    <Autocomplete
      id={element.name}
      name={element.name}
      options={asyncOptions}
      getOptionLabel={(option) => option?.label || ""}
      // value={formik.values[element.name]}

      value={(asyncOptions?.find(
        (option) => {
          // console.log(option,"option");
          option?.value === formik.values[element.name]
        }
      )) || ""}
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
