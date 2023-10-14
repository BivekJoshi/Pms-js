import React from 'react';
import { useField, useFormikContext } from 'formik';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function CustomDatePicker({ name, label, min, max, required }) {
  console.log(
    '🚀 ~ file: CustomDatePicker.jsx:7 ~ CustomDatePicker ~ max:',
    max
  );
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const handleDateChange = (date) => {
    setFieldValue(name, date);
  };

  return (
    <div key={name}>
      <DatePicker
        name={name}
        sx={{ width: '100%' }}
        label={label}
        value={field.value || null}
        onChange={handleDateChange}
        // minDate={dayjs(min)}
        maxDate={dayjs(max)}
        required={required}
      />
    </div>
  );
}

export default CustomDatePicker;
