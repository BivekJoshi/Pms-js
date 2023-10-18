import React from 'react';
import { useField, useFormikContext } from 'formik';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function CustomDatePicker({ name, label, min, max, required }) {
  const { setFieldValue, setFieldTouched, errors } = useFormikContext();

  const [field] = useField(name);

  const handleDateChange = (date) => {
    setFieldTouched(name, true); // Mark the field as touched
    setFieldValue(name, date);
  };

  const errorMessage = errors[name] || ''; // Access the specific error for the field

  return (
    <div key={name}>
      <DatePicker
        name={name}
        sx={{ width: '100%' }}
        label={label}
        value={field.value || null}
        onChange={handleDateChange}
        maxDate={dayjs(max)}
        slotProps={{
          textField: {
            error: !!errorMessage,
            helperText: errorMessage,
          },
        }}
      />
    </div>
  );
}

export default CustomDatePicker;
