import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Picture from "../../assets/Picture.png";
import DottedBoder from "../../assets/DottedBoder.png";
import { Typography } from "@mui/material";

const DropZoneUploadFile = ({ title, urlDocType, urlId }) => {
  const [file, setFile] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  // console.log(file);
  const handleUpload = (acceptedFiles) => {
    console.log("logging drop/selected file", acceptedFiles);

    const url = "https://api.escuelajs.co/api/v1/files/upload"; //Random Api Post Here
    const formData = new FormData();

    formData.append("file", acceptedFiles[0]);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setFile(acceptedFiles[0]);
        } else {
          console.error(response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {file ? (
        <>
          {title && (
            <Typography
              variant="h4"
              sx={{
                width: "338px",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "9px",
              }}
            >
              {title}
            </Typography>
          )}
          <div
            style={{
              padding: "16px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              backgroundImage: `url(${DottedBoder})`,
              position: "relative",
              backgroundRepeat: "no-repeat",
              minHeight: "200px",
              width: "350px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => setShowDelete(true)}
          >
            <div
              style={{
                position: "absolute",
                top: 1,
                left: 0,
                width: "340px",
                height: "192px",
              }}
            >
              <img
                src={URL.createObjectURL(file)}
                alt="Uploaded file"
                style={{ width: "100%", height: "100%" }}
              />
              {showDelete && (
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
              )}
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
          {({ getRootProps, getInputProps, isDragAccept, isDragReject }) => {
            const additionalClass = isDragAccept
              ? "accept"
              : isDragReject
              ? "reject"
              : "";

            return (
              <>
                {title && (
                  <Typography
                    variant="h4"
                    sx={{
                      width: "338px",
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "9px",
                    }}
                  >
                    {title}
                  </Typography>
                )}
                <div
                  {...getRootProps({})}
                  style={{
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundImage: `url(${DottedBoder})`,
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    minHeight: "200px",
                    width: "350px",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ position: "absolute", top: 1, left: 0 }}>
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
                      <Typography color="dimmed" sx={{ marginTop: "12px" }}>
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
    </div>
  );
};

export default DropZoneUploadFile;
