import { Grid } from "@mui/material";
import React, { useState } from "react";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import ProfileEditModal from "./ProfileEditModel/ProfileEditModal";
import { DOC_URL } from "../../utility/getBaseUrl";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileImage = ({ userInfoData }) => {
  const [key, setKey] = useState(0); // Key for forcing re-render
  const [openEditModal, setOpenEditModal] = useState(false);
  const url = DOC_URL;

  const handleCloseEditModal = () => {
    setOpenEditModal(false);

    setKey((prevKey) => prevKey + 1); // Change the key to force re-render
  };

  return (
    <Grid key={key}>
      {/* Use the key to force re-render */}
      {userInfoData?.imageFilePath ? (
        <img
          src={`${url}${userInfoData?.imageFilePath}`}
          alt="Profile"
          height="135px"
          width="135px"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <AccountCircleIcon sx={{ width: "9rem", height: "9rem" }} />
      )}
      <LocalSeeIcon
        className="hover-effect"
        onClick={() => {
          setOpenEditModal(true);
        }}
        sx={{
          position: "absolute",
          bottom: "22%",
          left: "19%",
          width: "40px",
          height: "40px",
          color: "#947cb7",
          "&:hover": {
            color: "#784aba", // Style changes on hover
          },
        }}
      />
      {openEditModal && (
        <ProfileEditModal
          open={openEditModal}
          handleCloseModal={handleCloseEditModal}
          userInfoData={userInfoData}
        />
      )}
    </Grid>
  );
};

export default ProfileImage;
