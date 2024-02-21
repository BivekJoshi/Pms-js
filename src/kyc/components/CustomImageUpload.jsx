import React, { useRef, useState } from "react";
import thumbnail from "../../assets/uploadThumbnail.png";
import { Button, Slider, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Cropper from "react-easy-crop";

const CustomImageUpload = ({ imgPreview }) => {
  const theme = useTheme();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    // You can use croppedAreaPixels to get the cropped image details
    console.log(croppedAreaPixels);
  };

  const handleCropImage = async () => {
    if (!imgPreview || !cropperRef.current) return;

    setCroppedImage();
  };

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
        <>
          <div
            style={{ width: "300px", height: "200px", position: "relative" }}
          >
            <Cropper
              ref={cropperRef}
              image={imgPreview}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1} // Adjust aspect ratio as needed
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              objectFit="contain"
              style={{
                containerStyle: {
                  borderRadius: "6px",
                  zIndex: 9999,
                },
              }}
            />
          </div>
        </>
      ) : (
        <>
          <img src={thumbnail} alt="thumbnail" height="100px" width="100px" />
          <Typography variant="p">
            Drop your image here, or{" "}
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
      <Slider
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        aria-labelledby="Zoom"
        onChange={(e, zoom) => setZoom(zoom)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleCropImage}
        style={{ position: "absolute", bottom: 10, right: 10 }}
      >
        Crop Image
      </Button>
    </div>
  );
};

export default CustomImageUpload;
