import { Grid } from '@mui/material';
import React, { useState } from 'react';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import profile from '../../assets/profilePicture.png';
import ProfileEditModal from './ProfileEditModel/ProfileEditModal';
import { DOC_URL } from '../../utility/getBaseUrl';

const ProfileImage = ({ userInfoData }) => {
  const [key, setKey] = useState(0); // Key for forcing re-render
  const [openEditModal, setOpenEditModal] = useState(false);
  const url = DOC_URL;
  const defaultProfile = profile;

  const handleCloseEditModal = () => {
    setOpenEditModal(false);

    setKey((prevKey) => prevKey + 1); // Change the key to force re-render
  };

  return (
    <Grid key={key}>
      {' '}
      {/* Use the key to force re-render */}
      <img
        src={
          userInfoData?.imageFilePath
            ? `${url}${userInfoData?.imageFilePath}`
            : defaultProfile
        }
        alt='Profile'
        height='135px'
        width='135px'
        style={{ borderRadius: '50%' }}
      />
      <LocalSeeIcon
        className='hover-effect'
        onClick={() => {
          setOpenEditModal(true);
        }}
        sx={{
          position: 'absolute',
          bottom: '22%',
          left: '19%',
          width: '40px',
          height: '40px',
          color: '#947cb7',
          '&:hover': {
            color: '#784aba', // Style changes on hover
          },
        }}
      />
      {openEditModal && (
        <ProfileEditModal
          open={openEditModal}
          handleCloseModal={handleCloseEditModal}
        />
      )}
    </Grid>
  );
};

export default ProfileImage;
