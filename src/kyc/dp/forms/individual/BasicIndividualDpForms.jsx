import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { basicData } from "./basicInputData";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useBasicIndividualDpForms } from "./useBasicIndividualDpForms";
import TestRenderInput from "../../../../components/renderInput/TestRenderInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import dateConverter from '../../../../utility/dateConverter';

const BasicIndividualDpForms = () => {
  const [ageModal, setAgeModal] = useState(false);
  const [value, setValue] = useState(null);
  // const { dispatch, state } = CurrentFormState();
  const { formik } = useBasicIndividualDpForms();

  const age1 = formik.values.dob;
  useEffect(() => {
    const adDate = age1 && dateConverter(age1, "BS_AD");
    const ageInMs = Date.now() - new Date(adDate).getTime();
    const ageInDate = new Date(ageInMs);
    const age = Math.abs(ageInDate.getUTCFullYear() - 1970);
    if (age < 16) {
      setValue("isMinor", true);
    } else {
      setValue("isMinor", false);
    }
  }, [age1]);

  const renderMinorDetail = (details) => {
    console.log("detail", details);
    {
      return details.map((d, index) => {
        return (
          <TestRenderInput
            key={d.id}
            input={d}
            register={register}
            control={control}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        );
      });
    }
  };

  return (
    <div>
      <Typography
        sx={{
          borderLeft: "2px solid blue",
          paddingLeft: "4px",
          marginBottom: "0.8rem",
        }}
        variant="h4"
      >
        Basic Information
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <TestRenderInput inputField={basicData} formik={formik} />

          {
            basicData.name === "isMinor" &&
            renderMinorDetail(basicData)}
        </Grid>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default BasicIndividualDpForms;
