import React, { useState } from 'react';
import FormModal from '../../../components/formModal/FormModal';
import toast from 'react-hot-toast';
import { Button, Grid } from '@mui/material';

const ProfileEditModal = ({ open, handleCloseModal }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);

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
              <input
                type='file'
                label='citizenship'
                onChange={handleChangeImage}
              />
            </Grid>

            {/* Display the image preview */}
            {imagePreview && (
              <Grid item xs={12} sm={12}>
                <img
                  src={imagePreview}
                  alt='Selected Profile'
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
            )}

            <Grid
              container
              direction='row'
              justifyContent='flex-end'
              alignItems='flex-end'
            >
              <Button
                variant='contained'
                onClick={handleCloseModal}
                sx={{ mt: 3, ml: 1 }}
                color='error'
              >
                cancel
              </Button>
              <Button
                variant='contained'
                // onClick={handleFormSubmit}
                sx={{ mt: 3, ml: 1 }}
                color='error'
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
