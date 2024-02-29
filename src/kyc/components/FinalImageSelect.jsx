import { Button } from "@mui/material";
import React from "react";
import DottedBorder from "../../assets/DottedBoder.png";
import { usePhotoUploadForm } from "../../hooks/kyc/DocumentUpload/usePhotoUploadForm";

const FinalImageSelect = ({ finalImage, file }) => {
  const { formik } = usePhotoUploadForm({ file });

  // const handleSubmit = () => {
  //   console.log(file, "File ma chaii");
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          // backgroundImage: `url(${DottedBorder})`,
          height: "200px",
          width: "350px",
          cursor: "pointer",
        }}
      >
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            style={{ width: "100%", height: "100%", borderRadius: "6px" }}
          />
        ) : (
          <img
            src={finalImage}
            style={{ width: "100%", height: "100%", borderRadius: "6px" }}
          />
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
  );
};

export default FinalImageSelect;
