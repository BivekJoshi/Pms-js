import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Dropzone from "react-dropzone";
import { fileResize } from "../../utility/image";
import Picture from "../../assets/Picture.png";
import { useAddVerificationDocument } from "../../hooks/Kyc/DocumentUpload/usePhotoUplaod";
import { useTranslation } from "react-i18next";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CircularUploadProgress from "../spinner/CircularUploadProgress";
import { useFinalSubmitApi } from "../../kyc/hooks/useMetaDataKyc";
import { LoadingButton } from "@mui/lab";
import { DOC_URL } from "../../utility/getBaseUrl";
import { useGetDocument } from "../../hooks/Kyc/DocumentUpload/useDocument";

const VerificationDropZone = ({ element, formik }) => {
  console.log("🚀 ~ VerificationDropZone ~ formik:", formik);
  const { data: docData, isLoading: docLoad } = useGetDocument();
  const { t } = useTranslation();
  const kycImage =
    docData.kycDocument !== null && DOC_URL + docData.kycDocument;
  const [file, setFile] = useState(docLoad ? null : kycImage);
  const [upProgress, setUpProgress] = useState("0");
  const title = element?.title;
  const documentName = element?.name;
  const { mutate: submitKYC, isLoading } = useFinalSubmitApi({});

  const { mutate } = useAddVerificationDocument({});

  const handleImage = async (acceptedFiles) => {
    const fileSize = acceptedFiles[0].size / 1024 / 1024;
    return fileSize <= 0.2
      ? acceptedFiles[0]
      : await fileResize(acceptedFiles[0]);
  };

  const handleUpload = async (acceptedFiles) => {
    const image = await handleImage(acceptedFiles);
    setFile(image);
    const onUploadProgress = (progressEvent) => {
      const { loaded, total } = progressEvent;
      const progress = Math.round((loaded * 100) / total);
      setUpProgress(progress);
    };

    mutate(
      {
        finalImage: image,
        file: documentName,
        onUploadProgress: onUploadProgress,
      },
      {
        // onUploadProgress, onUploadProgress
        onSuccess: (data) => {
          // setUpProgress("100")
          // formik.resetForm();
        },
      }
    );
  };

  const handleDelete = () => {
    setFile(null);
    formik.setFieldValue(element.name, null);
  };

  return (
    <Stack sx={{ margin: "0 1rem" }}>
      {file ? (
        <div
          style={{
            padding: "16px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <iframe
            src={
              kycImage
                ? encodeURIComponent(kycImage)
                : URL.createObjectURL(file)
            }
            alt="Uploaded file"
            style={{ width: "100%", height: "60vh" }}
          />
        </div>
      ) : (
        <Dropzone onDrop={handleUpload} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              style={{
                padding: "16px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  border: "1px dashed #b1bfd0",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                }}
              >
                <input {...getInputProps()} />
                <img
                  src={Picture}
                  alt="Image Here"
                  style={{ marginBottom: "8px" }}
                />
                <Typography variant="h5" sx={{ marginBottom: "8px" }}>
                  Drag your pdf here or{" "}
                  <span style={{ fontWeight: "bold", color: "#1F4690" }}>
                    Browse
                  </span>
                </Typography>
                <Typography color="textSecondary">
                  Supports: PDF up to 1MB accepted
                </Typography>
              </div>
            </div>
          )}
        </Dropzone>
      )}

      {file && (
        <Grid container sx={{ borderBottom: "1px solid grey" }}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <UploadFileIcon
              sx={{ fontSize: "2rem", color: "rgba(86.95, 38, 150.96, 1)" }}
            />
            <Typography>{title}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.6rem",
                alignItems: "center",
              }}
            >
              <Button onClick={handleDelete} variant="contained" color="error">
                Delete
              </Button>
              <CircularUploadProgress value={upProgress} />
            </Box>
          </Grid>
        </Grid>
      )}
      {kycImage && !file && (
        <Grid>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" mb={1}>
              KYC Documnt
            </Typography>
            <iframe
              title="PDF Document"
              src={kycImage}
              allowfullscreen
              style={{ height: "70vh", width: "100%" }}
            />
          </Box>
        </Grid>
      )}

      {(file || kycImage) && (
        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "8px" }}
        >
          <LoadingButton
            variant="contained"
            color="secondary"
            loading={isLoading}
            onClick={() => {
              submitKYC();
            }}
          >
            {t("Submit")}
          </LoadingButton>
        </div>
      )}
    </Stack>
  );
};

export default VerificationDropZone;
