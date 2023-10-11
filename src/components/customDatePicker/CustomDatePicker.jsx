import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

function CustomDatePicker({ name, label }) {
  const [field] = useField(name);

  const handleDateChange = (event) => {
    field.onChange(event);
    field.onBlur(event);
  };

  return (
    <div key={name}>
      <TextField
        {...field}
        type='date'
        InputLabelProps={{ shrink: true }}
        required
        fullWidth
        label={label}
        onChange={handleDateChange}
        value={field.value || ''} // Ensure field.value is defined, or set a default value
      />
    </div>
  );
}

export default CustomDatePicker;
