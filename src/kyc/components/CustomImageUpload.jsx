import React, { useRef, useState } from "react";
import { Button, Slider, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Cropper from "react-easy-crop";
import FinalImageSelect from "./FinalImageSelect";
import DottedBoder from "../../assets/DottedBoder.png";
import Picture from "../../assets/Picture.png";
import Dropzone from "react-dropzone";
import { fileResize } from "../../utility/image";

const CustomImageUpload = ({ imgPreview, handleCloseModal }) => {
  const theme = useTheme();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const cropperRef = useRef(null);
  const [cropSize, setCropSize] = useState(null);
  const [finalImage, setFinalImage] = useState(null);

  const [file, setFile] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    // You can use croppedAreaPixels to get the cropped image details
    setCropSize(croppedAreaPixels);
  };

  const handleImage = async (acceptedFiles) => {
    const fileSize = acceptedFiles[0].size / 1024 / 1024;
    return fileSize <= 0.2
      ? acceptedFiles[0]
      : await fileResize(acceptedFiles[0]);
  };

  const handleUpload = async (acceptedFiles) => {
    const image = await handleImage(acceptedFiles);
    setFile(image);
  };
  const handleRemoveData = () => {
    setFile(null);
  };
  const handleRemoveImage = () => {
    setFinalImage(null);
  };

  const handleCropImage = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = cropSize?.width;
    canvas.height = cropSize?.height;
    canvas.x = cropSize?.x;
    canvas.y = cropSize?.y;

    canvas
      .getContext("2d")
      .drawImage(
        cropperRef?.current?.imageRef?.current,
        cropSize.x,
        cropSize.y,
        cropSize.width,
        cropSize.height,
        0,
        0,
        cropSize.width,
        cropSize.height
      );
    const croppedImg = canvas.toDataURL("image/png");
    setFinalImage(croppedImg);
    // if (!imgPreview || !cropperRef.current) return;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!finalImage && (
        <>
          {imgPreview ? (
            <>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  position: "relative",
                }}
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
              {file ? (
                <>
                  <div>
                    <FinalImageSelect
                      file={file}
                      handleRemoveData={handleRemoveData}
                      handleCloseModal={handleCloseModal}
                    />
                  </div>
                </>
              ) : (
                <Dropzone
                  onDrop={handleUpload}
                  accept="image/*"
                  // minSize={1024}
                  // maxSize={3000000}
                >
                  {({
                    getRootProps,
                    getInputProps,
                    isDragAccept,
                    isDragReject,
                  }) => {
                    const additionalClass = isDragAccept
                      ? "accept"
                      : isDragReject
                      ? "reject"
                      : "";

                    return (
                      <>
                        <div
                          {...getRootProps({})}
                          className="hover-effect"
                          style={{
                            padding: "16px",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            // backgroundImage: `url(${DottedBoder})`,
                            position: "relative",
                            // backgroundRepeat: "no-repeat",
                            minHeight: "200px",
                            border: "1px dashed #b1bfd0",
                            borderRadius: "16px",
                            width: "350px",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            style={{ position: "absolute", top: 1, left: 0 }}
                          >
                            <div
                              style={{
                                width: "120%",
                                height: "190px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <input {...getInputProps()} />
                              <img src={Picture} alt="Image Here" />
                              <Typography variant="h5" sx={{ display: "flex" }}>
                                Drag your image here or{" "}
                                <div
                                  style={{
                                    fontWeight: "bold",
                                    marginLeft: "4px",
                                    color: "#1F4690",
                                  }}
                                >
                                  Browse
                                </div>
                              </Typography>
                              <Typography
                                color="dimmed"
                                sx={{ marginTop: "12px" }}
                              >
                                Supports: PNG/ JPG up to 200KB accepted
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }}
                </Dropzone>
              )}
            </>
          )}

          {imgPreview && (
            <>
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
                fullWidth
                style={{ marginTop: "12px" }}
              >
                Crop Image
              </Button>
            </>
          )}
        </>
      )}
      {finalImage && (
        <FinalImageSelect
          finalImage={finalImage}
          handleRemoveImage={handleRemoveImage}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default CustomImageUpload;
