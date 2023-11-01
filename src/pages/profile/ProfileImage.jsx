import { Grid } from "@mui/material";
import React from "react";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import { DOC_URL } from "../../api/axiosInterceptor";
import profile from "../../assets/profilePicture.png";
import { useState } from "react";
import ProfileEditModal from "./ProfileEditModel/ProfileEditModal";

const ProfileImage = ({ userInfoData }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const url = DOC_URL;

  const handleCloseEditModal = () => setOpenEditModal(false);

  return (
    <Grid>
      <img
        src={userInfoData?.path ? `${url}${userInfoData?.path}` : profile}
        alt="Profile"
        height="135px"
        width="135px"
        style={{ borderRadius: "50%" }}
      />
      <LocalSeeIcon
        className="hover-effect"
        sx={{
          position: "absolute",
          bottom: "22%",
          left: "19%",
          width: "40px",
          height: "40px",
          color: "white",
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
