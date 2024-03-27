import { Button, Grid } from "@mui/material";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import {
  birthCertificateField,
  citizenshipField,
  panField,
  passportField,
  thumbField,
  signatureField,
  passportPicField,
} from "./DocumentField"
import { useDocumentFieldForm } from "./useDocumentFieldForm"
import { useGetDocumentTypes } from '../../../../../hooks/Kyc/DocumentUpload/usePhotoUplaod'


const DocumentFieldDp = () => {
  const { data: DocTypesData } = useGetDocumentTypes();
  const { formik } = useDocumentFieldForm();

  const getLabel = (value) => {
    const valueLabels = {
      'BC': 'Birth Certificate',
      "GCZ": 'Guardian Citizenship',
      "CZ": 'Citizenship',
      "PAN": "Pan Card",
      "PT": "Passport",
      "PP": "Passport Size Picture",
      "TP": "Thumb Print",
      "SG": "signature",
      "TP": "Thumb Print",
    };
    return valueLabels[value] || value;
  };

  const matchedOptions = Array.isArray(DocTypesData) 
  ? DocTypesData.map((value, index) => ({
      id: index + 1,
      value: value,
      label: getLabel(value)
    }))
  : [];

  const DocumentField = [
    {
      name: "documentType",
      label: "Select Document Type",
      md: 3,
      sm: 6,
      lg: 4,
      xs: 12,
      required: true,
      type: "dropDown",
      options: matchedOptions,
    },
  ]

  const fieldOptions = {
    birthCertificateField,
    citizenshipField,
    panField,
    passportField,
    thumbField,
    signatureField,
    passportPicField,
  };

  Object.keys(fieldOptions).forEach((fieldName) => {
    fieldOptions[fieldName].forEach((field) => {
      if (field.type === "dropDown" && field.name === "documentType") {
        field.options = matchedOptions;
      }
    });
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        {!formik?.values?.documentType && (
          <RenderInput inputField={DocumentField} formik={formik} />
        )}
        {(formik?.values?.documentType === "GCZ" || formik?.values?.documentType === "CZ") && (
          <RenderInput inputField={citizenshipField} formik={formik} />
        )}
        {formik?.values?.documentType === "PT" && (
          <RenderInput inputField={passportField} formik={formik} />
        )}
        {formik?.values?.documentType === "BC" && (
          <RenderInput inputField={birthCertificateField} formik={formik} />
        )}
        {formik?.values?.documentType === "PAN" && (
          <RenderInput inputField={panField} formik={formik} />
        )}
         {formik?.values?.documentType === "TP" && (
          <RenderInput inputField={thumbField} formik={formik} />
        )}
         {formik?.values?.documentType === "SG" && (
          <RenderInput inputField={signatureField} formik={formik} />
        )}
         {formik?.values?.documentType === "PP" && (
          <RenderInput inputField={passportPicField} formik={formik} />
        )}
        <Grid sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <Button
            onClick={formik.resetForm}
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
