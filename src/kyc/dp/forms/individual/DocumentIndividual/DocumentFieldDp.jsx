import { Button, Grid } from "@mui/material";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import {
  birthCertificateField,
  citizenshipField,
  documentField,
  panCardField,
  passportField,
} from "./DocumentField";
import { useDocumentFieldForm } from './useDocumentFieldForm';

const DocumentFieldDp = () => {
  const { formik } = useDocumentFieldForm();

  return (
    <Grid container>
      <Grid item xs={12}>
        {!formik?.values?.docType && (
          <RenderInput inputField={documentField} formik={formik} />
        )}
        {formik?.values?.docType === "citizenship" && (
          <RenderInput inputField={citizenshipField} formik={formik} />
        )}
        {formik?.values?.docType === "passport" && (
          <RenderInput inputField={passportField} formik={formik} />
        )}
        {formik?.values?.docType === "birthCertificate" && (
          <RenderInput inputField={birthCertificateField} formik={formik} />
        )}
        {formik?.values?.docType === "panCard" && (
          <RenderInput inputField={panCardField} formik={formik} />
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
