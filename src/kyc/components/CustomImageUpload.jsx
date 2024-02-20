import React from "react";
import thumbnail from "../../assets/uploadThumbnail.png";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
const CustomImageUpload = ({ imgPreview }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        border: "1px dashed #b1bfd0",
        padding: "16px",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {imgPreview ? (
        <img
          src={imgPreview}
          alt="Captured Img"
          style={{ width: "100%", height: "100%", borderRadius: "6px" }}
        />
      ) : (
        <>
          <img src={thumbnail} alt="thmbnail" height="100px" width="100px" />
          <Typography variant="p">
            Drop you image here, or{" "}
            <span
              style={{
                color: theme.palette.secondary.main,
              }}
            >
              Browse
            </span>
          </Typography>
        </>
      )}
    </div>
  );
};

export default CustomImageUpload;
