import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { nanoid } from 'nanoid';
import React from 'react';
import RenderInput from '../../../components/renderInput/RenderInput';
import { useDocumentVerification } from '../../dp/forms/individual/DocumentIndividual/useDocumentFieldForm';
import { useGetDocument } from '../../../hooks/Kyc/DocumentUpload/useDocument';
import { DOC_URL } from '../../../utility/getBaseUrl';
import { useTranslation } from 'react-i18next';

const docField = [
    {
        name: "docType",
        label: "Select Document Type",
        md: 4,
        sm: 12,
        lg: 4,
        xs: 12,
        required: true,
        type: "dropDown",
        options: [
            { value: "kycpdf", label: "KYC PDF" },
        ],
    },
];
const field = [
    {
        name: "docType",
        label: "Select Document Type",
        md: 4,
        sm: 12,
        lg: 4,
        xs: 12,
        required: true,
        type: "dropDown",
        options: [
            { value: "kycpdf", label: "KYC PDF" },
        ],
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
        name: "kycDocument",
    },
];

const IndividualDpKycDocument = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { data: docData } = useGetDocument();
    const { formik } = useDocumentVerification();
    const image = docData && DOC_URL + docData?.kycDocument;

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
                {!formik?.values?.docType && (
                    <RenderInput inputField={docField} formik={formik} />
                )}
                {formik?.values?.docType === "kycpdf" && (
                    <RenderInput inputField={field} formik={formik} />
                )}
            </Grid>

            {/* {
                image && (
                    <iframe
                        title="PDF Document"
                        src={image}
                        width="fit-content"
                        height="70vh"
                    />
                )
            } */}
        </div>
    );
};

export default IndividualDpKycDocument;


