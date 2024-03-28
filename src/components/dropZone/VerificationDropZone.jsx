import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
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
import { axiosInstance } from "../../api/axiosInterceptor";
import { Document, Page } from "@react-pdf/renderer";

const fetchPdfAsBlob = async (url) => {
  try {
    const response = await axiosInstance.get(url, {
      responseType: "blob", // Set responseType to 'blob' to receive the response as a Blob
    });
    return response.data; // Axios already parses the response as a Blob
  } catch (error) {
    console.error("Error fetching PDF:", error);
    return null;
  }
};

const VerificationDropZone = ({ element, formik }) => {
  const { data: docData, isLoading: docLoad } = useGetDocument();
  const { t } = useTranslation();
  const kycImage =
    docData.kycDocument !== null && DOC_URL + docData.kycDocument;
  const [file, setFile] = useState();
  const [upProgress, setUpProgress] = useState("0");
  const title = element?.title;
  const documentName = element?.name;
  const { mutate: submitKYC, isLoading } = useFinalSubmitApi({});
  // const [kycURL, setKycURL] = useState();
  const { mutate } = useAddVerificationDocument({});

  // useEffect(() => {
  //   if (kycImage) {
  //     fetchPdfAsBlob(kycImage)
  //       .then((blob) => {
  //         if (blob) {
  //           const blobUrl = URL.createObjectURL(blob);
  //           setKycURL(blobUrl);
  //         } else {
  //           console.log("Failed to fetch PDF as Blob.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }
  // }, [kycImage]);

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
        onSuccess: (data) => {},
      }
    );
  };

  const handleDelete = () => {
    setFile(null);
    formik.setFieldValue(element.name, null);
  };
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <Stack sx={{ margin: "0 1rem" }}>
      {file && (
        <div
          style={{
            padding: "16px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <iframe
            src={URL.createObjectURL(file)}
            alt="Uploaded file"
            style={{ width: "100%", height: "60vh" }}
          />
        </div>
      )}

      <object
        style={{
          height: "600px",
        }}
        data={kycImage}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          View Uploaded Kyc Document <a href={kycImage}>to the PDF!</a>
        </p>
      </object>
      {!kycImage && (
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

      {kycImage && (
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
            <IconButton onClick={() => window.open(kycImage, "_blank")}>
              <UploadFileIcon
                onclick={() => {}}
                sx={{ fontSize: "2rem", color: "rgba(86.95, 38, 150.96, 1)" }}
              />
            </IconButton>

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

      <Document file={kycImage} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>

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
