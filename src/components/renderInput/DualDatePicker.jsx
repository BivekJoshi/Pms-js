import { DatePicker } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import GlobalNepaliDatePicker from "./GlobalNepaliDatePicker";
import dateConverter from "../../utility/dateConverter";
import dayjs from "dayjs";
import { Grid } from "@mui/material";

const DualDatePicker = ({ element, formik }) => {
  console.log("🚀 ~ DualDatePicker ~ formik:", formik);
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
          label={element.engLabel}
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
        label={element.nepaliLabel}
        value={nepaliDate}
        handleChange={handleNepaliDateChange}
      />
    </Grid>
  );
};

export default DualDatePicker;
