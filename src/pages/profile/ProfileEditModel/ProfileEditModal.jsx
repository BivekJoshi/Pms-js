import React, { useState } from "react";
import FormModal from "../../../components/formModal/FormModal";
import { Button, Divider, Grid, TextField, Typography, useTheme } from "@mui/material";
import useProfilePic from "../../../hooks/changeProfilePic/useProfilePic";
import CloseIcon from "@mui/icons-material/Close";
import { DOC_URL } from "../../../utility/getBaseUrl";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const ProfileEditModal = ({ open, handleCloseModal, userInfoData }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const theme = useTheme();
  const { formik } = useProfilePic({
    selectedProfile,
    handleCloseModal,
  });

  useEffect(() => {
    setImage(userInfoData?.imageFilePath)
  }, [userInfoData?.imageFilePath]);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setSelectedProfile(file);

    // Show image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  const handleSubmit = () => {
    if(selectedProfile) {
      formik.submitForm();
    } else {
      toast.error("Please select image first");
    }
  }
  return (
    <FormModal
      open={open}
      onClose={handleCloseModal}
      bgcolors={theme.palette.background.alt}
      width={{ lg: "25%", sm: "50%" }}
      formComponent={
        <Grid
          container
          spacing={3}
          margin="0"
          justifyContent="center"
          bgcolor={theme.palette.background.alt}
          width="100%"
        >
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="1rem"
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5"><b>Edit Profile Picture</b></Typography>
              <CloseIcon onClick={handleCloseModal} sx={{ cursor: "pointer", border: `1px solid ${theme.palette.text.main}`}}  />
            </div>
            <br/>
            <Divider/>
            {!imagePreview ? (
              image ? (
                <img
                  src={`${DOC_URL}${image}`}
                  alt="Profile"
                  height="auto"
                  width="200px"
                  style={{ borderRadius: "20%" }}
                />
              ) : (
                <AccountCircleIcon sx={{ width: "200px", height: "200px" }} />
              )
            ) : (
              ""
            )}

            {imagePreview && (
              <Grid item xs={12} sm={12}>
                <img
                  src={imagePreview}
                  alt="Selected Profile"
                  // style={{ width: "50%" }}
                  height="200px"
                  width="200px"
                />
              </Grid>
            )}
            {/* {!imagePreview && (
              <Grid item xs={12} sm={12}>
                <TextField
                  type="file"
                  onChange={handleChangeImage}
                  style={{
                    cursor: "pointer",
                    width: "100%",
                  }}
                />
              </Grid>
            )} */}
            {/* {imagePreview && (
              <> */}
                <Grid item xs={12} sm={12}>
                  <label htmlFor="file" className="file-label">
                    <input
                      type="file"
                      id="file"
                      onChange={handleChangeImage}
                      style={{ display: "none" }}
                    />
                    <Button
                      className="chooseInput"
                      sx={{
                        bgcolor: "#E7E0EB",
                        width: "291px",
                        height: "26px",
                        color: "black",
                        "&:hover": { bgcolor: "#decde7" },
                        textTransform:"none",
                      }}
                      component="span" // Add this to make the button act like a file input trigger
                    >
                      Change Profile picture
                    </Button>
                  </label>
                </Grid>
              {/* </>
            )} */}
          </Grid>
          {/* Display the image preview */}
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 3,
                ml: 1,
                color: "#000",
                backgroundColor: "#E7E0EB",
                textTransform: "none",
                border: "1px solid #6750A4",
                '&:hover': {
                  backgroundColor: "#7d449d",
                  color: '#fff',
                },
              }}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      }
    />
  );
};

export default ProfileEditModal;
