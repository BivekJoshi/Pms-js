import { DatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import GlobalNepaliDatePicker from "./GlobalNepaliDatePicker";
import dateConverter from "../../utility/dateConverter";
import dayjs from "dayjs";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

export const DualDatePicker = ({ element, formik }) => {
  const { t } = useTranslation();

  const initialNepaliDate = formik.values[element.nameNep]
    ? formik.values[element.nameNep]
    : dateConverter(new Date(), "AD_BS");
  const initialEnglishDate = formik.values[element.name]
    ? formik.values[element.name]
    : null;

  const [nepaliDate, setNepaliDate] = useState(initialNepaliDate);
  const [englishDate, setEnglishDate] = useState(initialEnglishDate);
  const handleNepaliDateChange = (e) => {
    const engDate = dateConverter(e, "BS_AD");
    setNepaliDate(e);
    formik.setFieldValue(element.name, engDate);
    formik.setFieldValue(element.nameNep, e);
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
    formik.setFieldValue(element.nameNep, nepDate);
  };

  useEffect(() => {
    if (nepaliDate) {
      const engDate = dateConverter(nepaliDate, "BS_AD");
      setEnglishDate(engDate);
    }
  }, [nepaliDate]);

  useEffect(() => {
    if (initialNepaliDate) {
      const engDate = dateConverter(initialNepaliDate, "BS_AD");
      setEnglishDate(engDate);
    }

    if (initialEnglishDate) {
      const nepDate = dateConverter(initialEnglishDate, "AD_BS");
      setNepaliDate(nepDate);
    }
  }, [initialNepaliDate, initialEnglishDate]);

  return (
    <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
      <Grid item md={element.nepMd} sm={element.nepSm}>
        <DatePicker
          sx={{ width: "100%" }}
          name={element.name}
          label={t(element.engLabel)}
          onChange={handleEnglishDateChange}
          value={dayjs(englishDate) || ""}
          required={element?.required}
          disableFuture={element?.disableFuture}
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
      <Grid item md={element.nepMd} sm={element.nepSm}>
        <GlobalNepaliDatePicker
          name={element.name}
          label={t(element.nepaliLabel)}
          value={nepaliDate}
          handleChange={handleNepaliDateChange}
          disableFuture={element?.disableFuture}
        />
      </Grid>
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
  };

  return (
    <Grid display={"flex"} gap={2}>
      <DatePicker
        sx={{ width: "100%" }}
        name={element?.name}
        label={t(element.label)}
        value={dayjs(formik.values[element.name]) || null}
        onChange={handleChange}
        required={element.required}
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
  );
};
