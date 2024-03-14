import { Button } from "@mui/material"
import { usePhotoUploadDragForm, usePhotoUploadForm } from "../../hooks/Kyc/DocumentUpload/usePhotoUploadForm"
import React from "react"

const FinalImageSelect = ({ finalImage, file, handleRemoveData, handleRemoveImage, handleCloseModal }) => {

  const { formik } = finalImage ? usePhotoUploadForm({ finalImage, handleCloseModal }) : usePhotoUploadDragForm({ file, handleCloseModal })

  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          height: "200px",
          width: "350px",
          cursor: "pointer",
          position: "relative",
        }}
      >
        {file ? (
          <>
            <img
              src={URL.createObjectURL(file)}
              style={{ width: "100%", height: "100%", borderRadius: "6px" }}
            />
            {hovered && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-12%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(255, 0, 0, 0.5)",
                  padding: "6px",
                  borderRadius: "3px",
                  width: "100%",
                  height: "42px",
                  textAlign: "end",
                  fontWeight: "900"
                }}
                onClick={handleRemoveData}
              >
                Select Other Image
              </div>
            )}
          </>
        ) : (
          <>
            <img
              src={finalImage}
              style={{ width: "100%", height: "100%", borderRadius: "6px" }}
            />
            {hovered && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-10%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(255, 0, 0, 0.5)",
                  padding: "6px",
                  borderRadius: "3px",
                  width: "100%",
                  height: "42px",
                  textAlign: "end",
                  fontWeight: "900"
                }}
                onClick={handleRemoveImage}
              >
                Resize Image
              </div>
            )}
          </>
        )}
      </div>
      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: "12px" }}
        onClick={formik.handleSubmit}
      >
        Upload
      </Button>
    </div>
  )
}

export default FinalImageSelect
