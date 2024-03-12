import React, { useRef, useState } from "react";
import { Button, Slider, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Cropper from "react-easy-crop";
import FinalImageSelect from "./FinalImageSelect";
import DottedBoder from "../../assets/DottedBoder.png";
import Picture from "../../assets/Picture.png";
import Dropzone from "react-dropzone";

const CustomImageUpload = ({ imgPreview }) => {
  const theme = useTheme();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const cropperRef = useRef(null);
  const [cropSize, setCropSize] = useState(null);
  const [finalImage, setFinalImage] = useState(null);

  const [file, setFile] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    // You can use croppedAreaPixels to get the cropped image details
    setCropSize(croppedAreaPixels);
  };

  const handleUpload = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
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
                  <div
                  // style={{
                  //   padding: "16px",
                  //   display: "flex",
                  //   alignItems: "center",
                  //   flexDirection: "column",
                  //   backgroundImage: `url(${DottedBoder})`,
                  //   position: "relative",
                  //   backgroundRepeat: "no-repeat",
                  //   minHeight: "200px",
                  //   width: "350px",
                  //   cursor: "pointer",
                  // }}
                  // onMouseOver={(e) => setShowDelete(true)}
                  >
                    <div
                    // style={{
                    //   position: "absolute",
                    //   top: 1,
                    //   left: 0,
                    //   width: "340px",
                    //   height: "192px",
                    // }}
                    >
                      {/* <img
                        src={URL.createObjectURL(file)}
                        alt="Uploaded file"
                        style={{ width: "100%", height: "100%" }}
                      /> */}
                      <FinalImageSelect file={file} />
                      {/* {showDelete && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            backgroundColor: "rgb(0, 0, 0)",
                            width: "100%",
                            height: "54px",
                            textAlign: "end",
                            padding: "10px",
                            opacity: 0.6,
                          }}
                        >
                          <div
                            style={{ opacity: 1, color: "#ffff" }}
                            onClick={() => setFile(null)}
                          >
                            Delete
                          </div>
                        </div>
                      )} */}
                    </div>
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
      {finalImage && <FinalImageSelect finalImage={finalImage} />}
    </div>
  );
};

export default CustomImageUpload;
