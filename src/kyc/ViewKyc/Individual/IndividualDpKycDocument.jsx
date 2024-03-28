import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { nanoid } from "nanoid";
import React, { useEffect, useLayoutEffect } from "react";
import RenderInput from "../../../components/renderInput/RenderInput";
import { useDocumentVerification } from "../../dp/forms/individual/DocumentIndividual/useDocumentFieldForm";
import { useGetDocument } from "../../../hooks/Kyc/DocumentUpload/useDocument";
import { DOC_URL } from "../../../utility/getBaseUrl";
import { useTranslation } from "react-i18next";
import { useGetDocumentAll } from "../../../hooks/Kyc/DocumentUpload/usePhotoUplaod";
import { LoadingButton } from "@mui/lab";
import { useFinalSubmitApi } from "../../hooks/useMetaDataKyc";
import VerificationDropZone from "../../../components/dropZone/VerificationDropZone";

const docField = [
  {
    name: "documentType",
    label: "Select Document Type",
    md: 4,
    sm: 12,
    lg: 4,
    xs: 12,
    required: true,
    type: "dropDown",
    options: [{ value: "KYC", label: "KYC PDF" }],
  },
];
const field = [
  {
    name: "documentType",
    label: "Select Document Type",
    md: 4,
    sm: 12,
    lg: 4,
    xs: 12,
    required: true,
    type: "dropDown",
    options: [{ value: "KYC", label: "KYC PDF" }],
  },
  {
    md: 12,
    sm: 12,
    lg: 12,
    xs: 12,
    required: true,
    form: "pdf",
    type: "verificationDocumentUpload",
    title: "KYC PDF",
    name: "KYC",
  },
];

const IndividualDpKycDocument = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { data: docData, refetch } = useGetDocument();
  const imageKyc = docData && DOC_URL + docData?.kycDocument;
  const { formik } = useDocumentVerification({ imageKyc });
  const { mutate: submitKYC, isLoading } = useFinalSubmitApi({});

  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderRadius: "0 6px 6px 0",
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          {t("Detail Verification")}
        </Typography>
      </Box>
      <Grid>
        {!formik?.values?.documentType && (
          <RenderInput inputField={docField} formik={formik} />
        )}
        {formik?.values?.documentType === "KYC" && (
          <RenderInput inputField={field} formik={formik} />
        )}
      </Grid>

      {/* <Grid>
                {image && (
                    <Box sx={{textAlign: "center"}}>
                        <Typography variant='h4' mb={1}>KYC Documnt</Typography>
                        <iframe
                            title="PDF Document"
                            src={image}
                            allowfullscreen
                            style={{ height: "70vh", width: "100%" }}
                        />
                    </Box>
                )}
            </Grid>

            {image && (
                 <div
                 style={{ display: "flex", justifyContent: "end", marginTop: "8px" }}
               >
                 <LoadingButton
                   variant="contained"
                   color="secondary"
                //    loading={isLoading}
                   onClick={() => {
                     submitKYC();
                   }}
                 >
                   {t("Submit")}
                 </LoadingButton>
               </div>
            )} */}
    </div>
  );
};

export default IndividualDpKycDocument;
