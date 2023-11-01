import { Grid } from '@mui/material';
import React from 'react';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import { DOC_URL } from '../../api/axiosInterceptor';
import profile from '../../assets/profilePicture.png';
import { useState } from 'react';
import ProfileEditModal from './ProfileEditModel/ProfileEditModal';

const ProfileImage = ({ userInfoData }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const url = DOC_URL;

  const handleCloseEditModal = () => setOpenEditModal(false);

  console.log(
    '🚀 ~ file: ProfileImage.jsx:22 ~ ProfileImage ~ `${url}${userInfoData?.path}`:',
    `${url}${userInfoData?.imageFilePath}`
  );
  return (
    <Grid>
      <img
        src={
          userInfoData?.imageFilePath
            ? `${url}${userInfoData?.imageFilePath}`
            : profile
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
          color: 'white',
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
