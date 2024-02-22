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
        {!formik?.values?.docType && (
          <RenderInput inputField={DocumentField} formik={formik} />
        )}
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
        <Grid sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <Button
            onClick={formik.handleSubmit}
            variant="outlined"
            color="secondary"
          >
            Reset
          </Button>
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            color="secondary"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DocumentFieldDp;
