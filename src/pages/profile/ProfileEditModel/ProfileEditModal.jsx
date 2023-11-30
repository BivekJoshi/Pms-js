import React, { useState } from "react";
import FormModal from "../../../components/formModal/FormModal";
import { Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import useProfilePic from "../../../hooks/changeProfilePic/useProfilePic";
import CloseIcon from "@mui/icons-material/Close";
import { DOC_URL } from "../../../utility/getBaseUrl";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileEditModal = ({ open, handleCloseModal, userInfoData }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const theme = useTheme();
  const { formik } = useProfilePic({
    selectedProfile,
    handleCloseModal,
  });

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
  };
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
                borderBottom: "1px solid #E7E0EB",
                padding: "1rem",
              }}
            >
              <Typography variant="h5"><b>Edit Profile Picture</b></Typography>
              <CloseIcon onClick={handleCloseModal} />
            </div>
            {!imagePreview ? (
              userInfoData?.imageFilePath ? (
                <img
                  src={`${DOC_URL}${userInfoData?.imageFilePath}`}
                  alt="Profile"
                  height="135px"
                  width="135px"
                  // style={{ borderRadius: "40%" }}
                />
              ) : (
                <AccountCircleIcon sx={{ width: "135px", height: "135px" }} />
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
                  height="135px"
                  width="135px"
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
              onClick={() => formik.submitForm()}
              sx={{
                mt: 3,
                ml: 1,
                color: "#6750A4",
                backgroundColor: "white",
                textTransform: "none",
                border: "1px solid #6750A4",
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
