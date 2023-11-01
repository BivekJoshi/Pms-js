import React from "react";
import FormModal from "../../../components/formModal/FormModal";
import toast from "react-hot-toast";
import { useState } from "react";

const ProfileEditModal = () => {
  const [selectedProfile, setSelectedProfile] = useState();
  const handleChangeImage = (e) => {
    setSelectedProfile(e.target.files[0]);
  };

  const handleFormSubmit = () => {
    formik.handleSubmit();

    if (formik.isValid) {
      formik.setTouched({
        document: selectedProfile || "",
      });
      onClose();
    } else {
      toast.error("please fill all the required fields");
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
              <input
                type="file"
                label="citizenship"
                onChange={handleChangeImage}
              />
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button
                variant="contained"
                onClick={onClose}
                sx={{ mt: 3, ml: 1 }}
                color="error"
              >
                cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleFormSubmit}
                sx={{ mt: 3, ml: 1 }}
                color="error"
              >
                Update Document
              </Button>
            </Grid>
          </Grid>
        }
      />
    </div>
  );
};

export default ProfileEditModal;
