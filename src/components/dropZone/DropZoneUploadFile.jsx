import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Picture from "../../assets/Picture.png";
import DottedBoder from "../../assets/DottedBoder.png";
import { Typography } from "@mui/material";

const DropZoneUploadFile = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (acceptedFiles) => {
    console.log("logging drop/selected file", acceptedFiles);

    const url = "https://api.escuelajs.co/api/v1/files/upload";
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
          <img
            src={URL.createObjectURL(file)}
            // className="img-container"
            alt="Uploaded file"
          />
        </>
      ) : (
        <Dropzone
          onDrop={handleUpload}
          accept="image/*"
          minSize={1024}
          maxSize={3072000}
        >
          {({ getRootProps, getInputProps, isDragAccept, isDragReject }) => {
            const additionalClass = isDragAccept
              ? "accept"
              : isDragReject
              ? "reject"
              : "";

            return (
              <>
                <Typography
                  variant="h4"
                  sx={{
                    width: "338px",
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom:"9px"
                  }}
                >
                  Front Side
                </Typography>
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
                    cursor:"pointer"
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
