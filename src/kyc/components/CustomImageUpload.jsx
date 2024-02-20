import React, { useRef, useState } from "react";
import { Button, Slider, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Cropper from "react-easy-crop";
import DropZoneUploadFile from "../../components/dropZone/DropZoneUploadFile";

const CustomImageUpload = ({ imgPreview }) => {
  // console.log("🚀 ~ CustomImageUpload ~ imgPreview:", imgPreview);
  const theme = useTheme();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(false);
  const cropperRef = useRef(null);
  const [cropSize, setCropSize] = useState(null);

  // console.log(cropperRef?.current?.imageRef?.current);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    // You can use croppedAreaPixels to get the cropped image details
    // console.log(croppedAreaPixels, "croppedAreaPixels");
    setCropSize(croppedAreaPixels);
  };

  const handleCropImage = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = cropSize?.width;
    canvas.height = cropSize?.height;
    canvas.x = cropSize?.x;
    canvas.y = cropSize?.y;
    canvas
      .getContext("2d")
      .drawImage(cropperRef?.current?.imageRef?.current, 0, 0);
    const croppedImg = canvas.toDataURL("image/png");
    console.log(croppedImg, "sxasxasxasxasxasx");

    // if (!imgPreview || !cropperRef.current) return;
    setCroppedImage(true);
  };

  return (
    <div
      style={{
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
          <DropZoneUploadFile />
        </>
      )}

      {imgPreview && (
        <>
          {croppedImage && (
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, zoom) => setZoom(zoom)}
            />
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={handleCropImage}
            fullWidth
            style={{ marginTop: "12px" }}
          >
            Crop Image
          </Button>
        </>
      )}
    </div>
  );
};

export default CustomImageUpload;
