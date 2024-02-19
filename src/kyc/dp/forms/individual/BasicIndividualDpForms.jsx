import React, { useEffect, useState } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { basicData } from "./basicInputData";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useBasicIndividualDpForms } from "./useBasicIndividualDpForms";

const BasicIndividualDpForms = () => {
  const { formik } = useBasicIndividualDpForms();

  return (
    <div>
      <Typography sx={{borderLeft: "2px solid blue", paddingLeft: "4px", marginBottom: "0.8rem"}} variant='h4'>Basic Information</Typography>

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
