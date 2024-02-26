import { DatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import GlobalNepaliDatePicker from "./GlobalNepaliDatePicker";
import dateConverter from "../../utility/dateConverter";
import dayjs from "dayjs";
import { Grid } from "@mui/material";
import { useTranslation } from 'react-i18next';

export const DualDatePicker = ({ element, formik }) => {
  const { t } = useTranslation();
  const [nepaliDate, setNepaliDate] = useState(
    dateConverter(new Date(), "AD_BS")
  );
  const [englishDate, setEnglishDate] = useState(null);
  const handleNepaliDateChange = (e) => {
    const engDate = dateConverter(e, "BS_AD");
    setNepaliDate(e);
    formik.setFieldValue(element.name, engDate);
  };

  const handleEnglishDateChange = (e) => {
    const date = new Date(e);
    const adjustedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    const newDate = adjustedDate.toISOString().substring(0, 10);
    const nepDate = dateConverter(newDate, "AD_BS");
    setNepaliDate(nepDate);
    formik.setFieldValue(element.name, newDate);
  };

  useEffect(() => {
    if (nepaliDate) {
      const engDate = dateConverter(nepaliDate, "BS_AD");
      setEnglishDate(engDate);
    }
  }, [nepaliDate]);

  return (
    <Grid container spacing={2}>
      <Grid
        item
        style={{ marginTop: "12px", width: "100%" }}
        md={element.engMd}
        sm={element.engSm}
      >
        <DatePicker
          sx={{ width: "100%" }}
          name={element.name}
          label={t(element.engLabel)}
          onChange={handleEnglishDateChange}
          value={dayjs(englishDate) || ""}
          required={element?.required}
          slotProps={{
            textField: {
              error:
                formik.touched[element.name] && !!formik.errors[element.name],
              helperText:
                formik.touched[element.name] && formik.errors[element.name],
            },
          }}
        />
      </Grid>
      <GlobalNepaliDatePicker
        name={element.name}
        md={element.nepMd}
        sm={element.nepSm}
        label={t(element.nepaliLabel)}
        value={nepaliDate}
        handleChange={handleNepaliDateChange}
      />
    </Grid>
  );
};

export const PickDate = ({ element, formik }) => {
  const { t } = useTranslation();
  const handleChange = (e) => {
    const date = new Date(e);
    const adjustedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    const newDate = adjustedDate.toISOString().substring(0, 10);
    formik.setFieldValue(element.name, newDate);
  }
  return (
    <Grid display={"flex"} gap={2}>
      <DatePicker
        sx={{ width: "100%" }}
        name={element?.name}
        label={t(element.label)}
        value={formik.values[element.name] || null}
        onChange={handleChange}
        required={element.required}
        slotProps={{
          textField: {
            error:
              formik.touched[element.name] && !!formik.errors[element.name],
            helperText:
              formik.touched[element.name] && formik.errors[element.name],
          }}}/>
    </Grid>
  );
};
