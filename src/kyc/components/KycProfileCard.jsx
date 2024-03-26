import { useTheme } from "@emotion/react";
import {
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FormModal from "../../components/formModal/FormModal";
import CloseIcon from "@mui/icons-material/Close";
import CustomImageUpload from "./CustomImageUpload";
import "./imageupload.css";
import { DOC_URL } from "../../utility/getBaseUrl";
import { useGetDocument } from "../../hooks/Kyc/DocumentUpload/useDocument";

const KycProfileCard = ({
  clientType,
  nature,
  clientName,
  isHomePage,
  formStatus,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [stream, setStream] = useState(null);

  const { data: documentData, isLoading } = useGetDocument();

  const imgUrl = documentData?.ppSizePhoto;

  const videoRef = useRef();
  const accountType =
    clientType === "I" ? "Individual" : clientType === "C" ? "Corporate" : "";
  const accountNature = nature === "DP" ? "Demat" : "TMS";
  const [capturedImage, setCapturedImage] = useState(null);

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      videoRef.current.srcObject = mediaStream;
    } catch (error) {
      console.error("Error accessing camera: ", error);
    }
  };

  const capturePicture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const imageUrl = canvas.toDataURL("image/png");

    setCapturedImage(imageUrl);
    if (stream) {
      stream?.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    return () => {
      setCapturedImage(null);
    };
  }, [open]);

  const handleCloseModal = () => {
    setOpen(false);
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <Grid
      display="flex"
      color={theme.palette.text.main}
      bgcolor={theme.palette.background.alt}
      padding="16px"
      sx={{
        borderRadius: "6px 0px 0px 6px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <span
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {imgUrl ? (
            <div style={{ width: 101, height: 100 }}>
              <img
                src={`${DOC_URL}${imgUrl}?t=${new Date()}`}
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </div>
          ) : (
            <svg
              width="101"
              height="100"
              viewBox="0 0 101 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="100" height="100" rx="50" fill="#CAC5CA" />
              <path
                d="M37.2578 57.8516C41.8672 55.9766 46.2812 55.0391 50.5 55.0391C54.7188 55.0391 59.0938 55.9766 63.625 57.8516C68.2344 59.6484 70.5391 62.0312 70.5391 65V70.0391H30.4609V65C30.4609 62.0312 32.7266 59.6484 37.2578 57.8516ZM57.5312 47.0703C55.5781 49.0234 53.2344 50 50.5 50C47.7656 50 45.4219 49.0234 43.4688 47.0703C41.5156 45.1172 40.5391 42.7734 40.5391 40.0391C40.5391 37.3047 41.5156 34.9609 43.4688 33.0078C45.4219 30.9766 47.7656 29.9609 50.5 29.9609C53.2344 29.9609 55.5781 30.9766 57.5312 33.0078C59.4844 34.9609 60.4609 37.3047 60.4609 40.0391C60.4609 42.7734 59.4844 45.1172 57.5312 47.0703Z"
                fill="white"
              />
            </svg>
          )}

          {!isHomePage && (
            <span style={{ position: "absolute", bottom: 0, right: 0 }}>
              <IconButton onClick={() => setOpen(true)}>
                <Tooltip arrow placement="right-end" title="Upload Image">
                  {imgUrl ?
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="26" height="26" rx="13" fill="#EADDFF" />
                      <path d="M7.75 18.25H8.8L15.2688 11.7812L14.2188 10.7313L7.75 17.2V18.25ZM18.475 10.6938L15.2875 7.54375L16.3375 6.49375C16.625 6.20625 16.9783 6.0625 17.3973 6.0625C17.8163 6.0625 18.1693 6.20625 18.4563 6.49375L19.5063 7.54375C19.7938 7.83125 19.9438 8.17825 19.9563 8.58475C19.9688 8.99125 19.8313 9.338 19.5438 9.625L18.475 10.6938ZM7 19.75C6.7875 19.75 6.60925 19.678 6.46525 19.534C6.32125 19.39 6.2495 19.212 6.25 19V16.8812C6.25 16.7812 6.26875 16.6843 6.30625 16.5903C6.34375 16.4963 6.4 16.412 6.475 16.3375L14.2 8.6125L17.3875 11.8L9.6625 19.525C9.5875 19.6 9.50325 19.6562 9.40975 19.6937C9.31625 19.7312 9.21925 19.75 9.11875 19.75H7ZM14.7438 11.2563L14.2188 10.7313L15.2688 11.7812L14.7438 11.2563Z" fill="#25005A" />
                    </svg>
                    : <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.5"
                        y="1"
                        width="22"
                        height="22"
                        rx="11"
                        fill="#088720"
                      />
                      <path
                        d="M18.5 13H13.5V18C13.5 18.55 13.05 19 12.5 19C11.95 19 11.5 18.55 11.5 18V13H6.5C5.95 13 5.5 12.55 5.5 12C5.5 11.45 5.95 11 6.5 11H11.5V6C11.5 5.45 11.95 5 12.5 5C13.05 5 13.5 5.45 13.5 6V11H18.5C19.05 11 19.5 11.45 19.5 12C19.5 12.55 19.05 13 18.5 13Z"
                        fill="white"
                      />
                    </svg>}




                </Tooltip>
              </IconButton>
            </span>
          )}
        </span>
        <Chip
          sx={{ marginTop: "8px" }}
          label={formStatus}
          color={
            formStatus === "PENDING"
              ? "warning"
              : formStatus === "SUBMITTED"
                ? "info"
                : formStatus === "APPROVED"
                  ? "success"
                  : "error"
          }
        ></Chip>
        <Typography variant="h6" mt="8px" textAlign="center">
          {clientName}
        </Typography>
        <Typography variant="h6" textAlign={"center"}>
          {accountType + " " + accountNature + " Account"}
        </Typography>
      </div>
      {open && (
        <FormModal
          open={open}
          setOpen={() => setOpen(false)}
          onClose={() => {
            setOpen(false);
            if (stream) {
              stream.getTracks().forEach((track) => track.stop());
            }
          }}
          width="378px"
          header={imgUrl ? "Edit Profile Picture" : "Upload Profile Picture"}
          formComponent={
            <div>
              {imgUrl && !stream?.active &&
                <div style={{ width: "100%", height: "190px", marginBottom: "1rem" }}>
                  <img
                    src={`${DOC_URL}${imgUrl}?t=${new Date()}`}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              }

              <CustomImageUpload
                imgPreview={capturedImage}
                handleCloseModal={handleCloseModal}
                imgUrl={imgUrl}
              />

              {!capturedImage && (
                <>
                  {/* <Typography variant="p">OR</Typography> */}
                  <Divider>OR</Divider>
                  <div className="separator">
                    {!stream?.active ? (
                      <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        onClick={openCamera}
                        sx={{ display: "flex", gap: "1rem" }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 3H11.0188L9.875 1.75H6.125L4.98125 3H3C2.66848 3 2.35054 3.1317 2.11612 3.36612C1.8817 3.60054 1.75 3.91848 1.75 4.25V11.75C1.75 12.0815 1.8817 12.3995 2.11612 12.6339C2.35054 12.8683 2.66848 13 3 13H13C13.3315 13 13.6495 12.8683 13.8839 12.6339C14.1183 12.3995 14.25 12.0815 14.25 11.75V4.25C14.25 3.91848 14.1183 3.60054 13.8839 3.36612C13.6495 3.1317 13.3315 3 13 3ZM13 11.75H3V4.25H5.53125L6.675 3H9.325L10.4688 4.25H13V11.75ZM8 4.875C7.1712 4.875 6.37634 5.20424 5.79029 5.79029C5.20424 6.37634 4.875 7.1712 4.875 8C4.875 8.8288 5.20424 9.62366 5.79029 10.2097C6.37634 10.7958 7.1712 11.125 8 11.125C8.8288 11.125 9.62366 10.7958 10.2097 10.2097C10.7958 9.62366 11.125 8.8288 11.125 8C11.125 7.1712 10.7958 6.37634 10.2097 5.79029C9.62366 5.20424 8.8288 4.875 8 4.875ZM8 9.875C7.50272 9.875 7.02581 9.67746 6.67417 9.32583C6.32254 8.97419 6.125 8.49728 6.125 8C6.125 7.50272 6.32254 7.02581 6.67417 6.67417C7.02581 6.32254 7.50272 6.125 8 6.125C8.49728 6.125 8.97419 6.32254 9.32583 6.67417C9.67746 7.02581 9.875 7.50272 9.875 8C9.875 8.49728 9.67746 8.97419 9.32583 9.32583C8.97419 9.67746 8.49728 9.875 8 9.875Z" fill="#6750A4" />
                        </svg>
                        Take {imgUrl && "New"} Photo
                      </Button>
                    ) : (
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          if (stream) {
                            stream
                              ?.getTracks()
                              .forEach((track) => track.stop());
                            setStream(null);
                          }
                        }}
                      >
                        Close Webcam
                      </Button>
                    )}
                  </div>
                </>
              )}

              {!capturedImage && (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    style={{
                      width: "100%",
                      display: stream?.active ? "block" : "none",
                      margin: "8px 0",
                    }}
                  />
                  {stream?.active && (
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={capturePicture}
                    >
                      Capture Picture
                    </Button>
                  )}
                </>
              )}

            </div>
          }
        />
      )}
    </Grid>
  );
};

export default KycProfileCard;
