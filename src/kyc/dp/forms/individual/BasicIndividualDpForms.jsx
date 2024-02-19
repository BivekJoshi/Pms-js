import React, { useEffect, useState } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { basicData, minorData, nrnData } from "./basicInputData";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useBasicIndividualDpForms } from "./useBasicIndividualDpForms";

const BasicIndividualDpForms = () => {
  const { formik } = useBasicIndividualDpForms();

  return (
    <div>
      <Typography>Basic Information</Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid>
          <RenderInput inputField={basicData} formik={formik} />
        </Grid>

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default BasicIndividualDpForms;
