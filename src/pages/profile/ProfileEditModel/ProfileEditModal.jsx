import React, { useState } from "react";
import FormModal from "../../../components/formModal/FormModal";
import toast from "react-hot-toast";
import { Button, Grid, TextField, useTheme } from "@mui/material";
import useProfilePic from "../../../hooks/changeProfilePic/useProfilePic";

const ProfileEditModal = ({ open, handleCloseModal }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);

  const { formik } = useProfilePic({ selectedProfile, handleCloseModal });

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
    <div>
      <FormModal
        open={open}
        onClose={handleCloseModal}
        formComponent={
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                type="file"
                onChange={handleChangeImage}
                style={{
                  cursor: "pointer",
                  width:"100%"
                }}
              />
            </Grid>

            {/* Display the image preview */}
            {imagePreview && (
              <Grid item xs={12} sm={12}>
                <img
                  src={imagePreview}
                  alt="Selected Profile"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            )}

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
                  color: "#fff",
                  backgroundColor: "#8496FF",
                  textTransform: "none",
                }}
              >
                Update Profile
              </Button>
              <Button
                variant="contained"
                onClick={handleCloseModal}
                sx={{ mt: 3, ml: 1, textTransform: "none" }}
                color="error"
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        }
      />
    </div>
  );
};

export default ProfileEditModal;
