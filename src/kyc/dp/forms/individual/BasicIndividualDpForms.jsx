import React, { useEffect, useState } from "react";
import { Button, Grid, Stack } from "@mui/material";
import { basicData, minorData, nrnData } from "./basicInputData";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useBasicIndividualDpForms } from "./useBasicIndividualDpForms";

const BasicIndividualDpForms = () => {
  const { formik } = useBasicIndividualDpForms();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const determineFields = () => {
      switch (formik.values.fieldType) {
        case "isMinor":
          setFields([...basicData, ...minorData]);
          break;
        case "isNrn":
          setFields([...basicData, ...nrnData]);
          break;
        default:
          setFields([...basicData]);
          break;
      }
    };
    determineFields();
  }, [formik.values.fieldType]);

  return (
    <div style={{ margin: "2rem" }}>
      <Stack sx={{ textAlign: "center", fontSize: "1.2rem" }}>
        Basic Information
      </Stack>
      <Grid container>
        <Grid item>
          <RenderInput inputField={fields} formik={formik} />
        </Grid>
      </Grid>
      <Grid>
        <Button onClick={() => formik.submitForm()}>Submit</Button>
      </Grid>
    </div>
  );
};

export default BasicIndividualDpForms;
