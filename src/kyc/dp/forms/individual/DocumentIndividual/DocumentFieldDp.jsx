import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import DropZoneUploadFile from "../../../../../components/dropZone/DropZoneUploadFile";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import {
  BirthCertificateFiled,
  CitizenshipFiled,
  DocumentField,
  PanCardFiled,
  PassportFiled,
} from "./DocumentField";
import { useDocumentForm } from "./useDocumentForm";

const DocumentFieldDp = () => {
  const { formik } = useDocumentForm();
  console.log(formik?.values?.docType, "Firld");

  return (
    <Grid container>
      <Grid item xs={12}>
        <RenderInput inputField={DocumentField} formik={formik} />
        {formik?.values?.docType === "citizenship" && (
          <RenderInput inputField={CitizenshipFiled} formik={formik} />
        )}
        {formik?.values?.docType === "passport" && (
          <RenderInput inputField={PassportFiled} formik={formik} />
        )}
        {formik?.values?.docType === "birthCertificate" && (
          <RenderInput inputField={BirthCertificateFiled} formik={formik} />
        )}
        {formik?.values?.docType === "panCard" && (
          <RenderInput inputField={PanCardFiled} formik={formik} />
        )}
        <Button variant="contained" onClick={formik.handleSubmit}>Submit</Button>
      </Grid>
    </Grid>
  );
};

export default DocumentFieldDp;
