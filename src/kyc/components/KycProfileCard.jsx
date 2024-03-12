import { useTheme } from "@emotion/react"
import {
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import FormModal from "../../components/formModal/FormModal"
import CloseIcon from "@mui/icons-material/Close"
import CustomImageUpload from "./CustomImageUpload"
import "./imageupload.css"

const KycProfileCard = ({
  clientType,
  nature,
  clientName,
  isHomePage,
  formStatus,
}) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [stream, setStream] = useState(null)
  const videoRef = useRef()
  const accountType =
    clientType === "I" ? "Individual" : clientType === "C" ? "Corporate" : ""
  const accountNature = nature === "DP" ? "Demat" : "TMS"
  const [capturedImage, setCapturedImage] = useState(null)
  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      })
      setStream(mediaStream)
      videoRef.current.srcObject = mediaStream
    } catch (error) {
      console.error("Error accessing camera: ", error)
    }
  }

  const capturePicture = () => {
    const canvas = document.createElement("canvas")
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0)
    const imageUrl = canvas.toDataURL("image/png")

    setCapturedImage(imageUrl)
    if (stream) {
      stream?.getTracks().forEach((track) => track.stop())
      setStream(null)
    }
  }

  useEffect(() => {
    return () => {
      setCapturedImage(null)
    }
  }, [open])

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
          {!isHomePage && (
            <span style={{ position: "absolute", bottom: 0, right: 0 }}>
              <IconButton onClick={() => setOpen(true)}>
                <Tooltip arrow placement="right-end" title="Uplaod Image">
                  <svg
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
                  </svg>
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
        <Typography variant="h6" mt="8px">
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
            setOpen(false)
            if (stream) {
              stream.getTracks().forEach((track) => track.stop())
            }
          }}
          width="378px"
          header="Upload Profile Picture"
          formComponent={
            <div>
              <div>
                <CustomImageUpload imgPreview={capturedImage} />

                {!capturedImage && (
                  <>
                    {/* <Typography variant="p">OR</Typography> */}
                    <Divider>OR</Divider>
                    <div className="separator">
                      {!stream?.active ? (
                        <Button
                          fullWidth
                          variant="contained"
                          color="secondary"
                          onClick={openCamera}
                        >
                          Take Picture
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
                                .forEach((track) => track.stop())
                              setStream(null)
                            }
                          }}
                        >
                          Disable Webcam
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
            </div>
          }
        />
      )}
    </Grid>
  )
}

export default KycProfileCard
