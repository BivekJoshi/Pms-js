import { Button, Grid } from "@mui/material"
import RenderInput from "../../../../../components/renderInput/RenderInput"
import {
  BirthCertificateField,
  CitizenshipField,
  DocumentField,
  PanCardField,
} from "./DocumentField"
import { useDocumentFieldForm } from "./useDocumentFieldForm"

const DocumentFieldDp = () => {
  const { formik } = useDocumentFieldForm()

  return (
    <Grid container>
      <Grid item xs={12}>
        {!formik?.values?.docType && (
          <RenderInput inputField={DocumentField} formik={formik} />
        )}
        {formik?.values?.docType === "citizenship" && (
          <RenderInput inputField={CitizenshipField} formik={formik} />
        )}
        {formik?.values?.docType === "passport" && (
          <RenderInput inputField={PanCardField} formik={formik} />
        )}
        {formik?.values?.docType === "birthCertificate" && (
          <RenderInput inputField={BirthCertificateField} formik={formik} />
        )}
        {formik?.values?.docType === "panCard" && (
          <RenderInput inputField={PanCardField} formik={formik} />
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
  )
}

export default DocumentFieldDp
