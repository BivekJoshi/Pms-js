import React from "react";
import { useField, useFormikContext } from "formik";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function InputType({ name, label, required }) {
  const options = [
    {
      id: 1,
      option: "Receipt",
      value: "R",
    },
    {
      id: 2,
      option: "Payment",
      value: "P",
    },
  ];
  
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const handleInputChange = (value) => {
    setFieldValue(name, value);
  };

  return (
    <FormControl>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        sx={{ width: "200px" }}
        label={label}
        name={name}
        value={field.value}
        onChange={(e) => handleInputChange(e.target.value)}
        required={required}
      >
        {options.map((option) => (
          <MenuItem key={option?.id} value={option?.value}>
            {option?.option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default InputType;
