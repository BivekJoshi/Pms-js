import React, { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const CustomDatePicker = ({
  name,
  label,
  min,
  max,
  enableFiscalYear,
  fiscalYearOptions,
}) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext();

  const [field] = useField(name);
  const [fiscalYearValidate, setFiscalYearValidate] = useState();
  useEffect(() => {
    if (enableFiscalYear) {
      const curentDate = fiscalYearOptions.filter(
        (item) => item?.id === values?.fy
      )[0];
      const startDate = curentDate?.startDate;
      const endDate = curentDate?.endDate;

      setFiscalYearValidate({
        startDate: startDate,
        endDate: endDate,
        fy: values?.fy,
      });
    }
    if (!isNaN(values?.fy) && fiscalYearValidate?.fy !== values.fy) {
      setFieldValue("dateFrom", "");

      setFieldValue("dateTo", "");
    }
  }, [values]);

  const handleDateChange = (date) => {
    setFieldTouched(name, true); // Mark the field as touched
    setFieldValue(name, date);
  };

  const errorMessage = errors[name] || ""; // Access the specific error for the field

  return (
    <div key={name}>
      <DatePicker
        name={name}
        sx={{ width: "100%" }}
        label={label}
        value={field.value || null}
        onChange={handleDateChange}
        maxDate={
          enableFiscalYear ? dayjs(fiscalYearValidate?.endDate) : dayjs(max)
        }
        minDate={
          enableFiscalYear
            ? dayjs(fiscalYearValidate?.startDate)
            : dayjs(min ? min : null)
        }
        slotProps={{
          textField: {
            error: touched[name] && !!errorMessage,
            helperText: touched[name] && errorMessage,
          },
        }}
      />
    </div>
  );
};

export default CustomDatePicker;
