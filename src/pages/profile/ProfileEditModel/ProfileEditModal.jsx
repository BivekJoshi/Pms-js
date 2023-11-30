// import React, { useState } from "react";
// import FormModal from "../../../components/formModal/FormModal";
// import toast from "react-hot-toast";
// import { Button, Grid, TextField, useTheme } from "@mui/material";
// import useProfilePic from "../../../hooks/changeProfilePic/useProfilePic";

// const ProfileEditModal = ({ open, handleCloseModal }) => {
//   const [selectedProfile, setSelectedProfile] = useState();
//   const [imagePreview, setImagePreview] = useState(null);

//   const { formik } = useProfilePic({ selectedProfile, handleCloseModal });

//   const handleChangeImage = (e) => {
//     const file = e.target.files[0];
//     setSelectedProfile(file);

//     // Show image preview
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImagePreview(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <FormModal
//         open={open}
//         onClose={handleCloseModal}
//         formComponent={
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={12}>
//               <TextField
//                 type="file"
//                 onChange={handleChangeImage}
//                 style={{
//                   cursor: "pointer",
//                   width:"100%"
//                 }}
//               />
//             </Grid>

//             {/* Display the image preview */}
//             {imagePreview && (
//               <Grid item xs={12} sm={12}>
//                 <img
//                   src={imagePreview}
//                   alt="Selected Profile"
//                   style={{ width: "100%", height: "360px" }}
//                 />
//               </Grid>
//             )}

//             <Grid
//               container
//               direction="row"
//               justifyContent="flex-end"
//               alignItems="flex-end"
//             >
//               <Button
//                 variant="contained"
//                 onClick={() => formik.submitForm()}
//                 sx={{
//                   mt: 3,
//                   ml: 1,
//                   color: "#fff",
//                   backgroundColor: "#8496FF",
//                   textTransform: "none",
//                 }}
//               >
//                 Update Profile
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={handleCloseModal}
//                 sx={{ mt: 3, ml: 1, textTransform: "none" }}
//                 color="error"
//               >
//                 Cancel
//               </Button>
//             </Grid>
//           </Grid>
//         }
//       />
//     </div>
//   );
// };

// export default ProfileEditModal;

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import man from "../../../assets/man.png";
import { useState } from "react";
import useProfilePic from "../../../hooks/changeProfilePic/useProfilePic";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #808080",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ProfileEditModal = ({ open, handleCloseModal }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);

  const { formik } = useProfilePic({ selectedProfile, handleCloseModal });

  const handleChangeImage = (e) => {
    console.log(e, "eeeeeeeeeeeeeeeeee");
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
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: ".5rem",
            }}
          >
            <Typography variant="h4">
              <b>Edit Profile Picture</b>
            </Typography>
            <CloseIcon onClick={handleCloseModal} />
          </div>
          <Divider />
          <br />
          <Grid container justifyContent="center" alignItems="center">
            <img
              src={man}
              alt="image"
              style={{ borderRadius: "50%", width: "200px", height: "200px" }}
            />
          </Grid>
                    {/* Display the image preview */}
           {imagePreview && (
              <Grid item xs={12} sm={12}>
                <img
                  src={imagePreview}
                  alt="Selected Profile"
                  style={{ width: "100%", height: "360px" }}
                />
              </Grid>
            )}
          <br />
          <TextField
            type="file"
            onChange={handleChangeImage}
            style={{
              cursor: "pointer",
              width: "100%",
              border:"none"
            }}
          />
          <br />
          <Divider />
          <br />
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              component="label"
              variant="outlined"
              color="success"
              sx={{
                textTransform: "none",
                backgroundColor: "none",
                color: "red",
              }}
              onClick={() => formik.submitForm()}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileEditModal;
