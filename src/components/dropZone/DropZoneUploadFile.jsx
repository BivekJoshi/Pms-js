import React, { useState } from "react"
import { Typography } from "@mui/material"
import Dropzone from "react-dropzone"
import { fileResize } from "../../utility/image"
import Picture from "../../assets/Picture.png"
import { useAddDocument, usePhotoUpload } from "../../hooks/Kyc/DocumentUpload/usePhotoUplaod"

const DropZoneUploadFile = ({ element, formik }) => {
  const [file, setFile] = useState(null)
  const [showDelete, setShowDelete] = useState(false)
  const title = element?.title
  const documentName = element?.name
  console.log("elem", element?.name)
  
  const { mutate } = useAddDocument({})

  const handleImage = async (acceptedFiles) => {
    const fileSize = acceptedFiles[0].size / 1024 / 1024
    return fileSize <= 0.2
      ? acceptedFiles[0]
      : await fileResize(acceptedFiles[0])
  }

  const handleUpload = async (acceptedFiles) => {
    const image = await handleImage(acceptedFiles)
    setFile(image)
    // formik.setFieldValue(element.name, image);
    mutate(
      { finalImage: image, file: documentName },
      {
        onSuccess: (data) => {
          // formik.resetForm();
        },
      }
    )
  }

  const handleDelete = () => {
    setFile(null)
    formik.setFieldValue(element.name, null)
  }

  return (
    <div style={{ width: "350px" }}>
      {title && (
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "9px",
          }}
        >
          {title}
        </Typography>
      )}
      {file ? (
        <div
          style={{
            padding: "16px",
            position: "relative",
            cursor: "pointer",
          }}
          onMouseOver={() => setShowDelete(true)}
          onMouseLeave={() => setShowDelete(false)}
        >
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded file"
            style={{ width: "100%", height: "auto" }}
          />
          {showDelete && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                width: "100%",
                textAlign: "end",
                padding: "10px",
                boxSizing: "border-box",
              }}
              onClick={handleDelete}
            >
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                Delete
              </Typography>
            </div>
          )}
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
                  Drag your image here or{" "}
                  <span style={{ fontWeight: "bold", color: "#1F4690" }}>
                    Browse
                  </span>
                </Typography>
                <Typography color="textSecondary">
                  Supports: PNG/JPG up to 1MB accepted
                </Typography>
              </div>
            </div>
          )}
        </Dropzone>
      )}
    </div>
  )
}

export default DropZoneUploadFile
