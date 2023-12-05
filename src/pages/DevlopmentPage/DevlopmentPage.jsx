import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import Group from "../../assets/Group.png";
import { useNavigate } from "react-router-dom";

const DevlopmentPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      textAlign="center"
      alignItems="center"
      p="32px "
      flexDirection="column"
    >
      <img src={Group} alt="Group.png" style={{ alignSelf: "center" }} />
      <br></br>
      <Button
        variant="contained"
        style={{ backgroundColor: "#6C49B4" }}
        onClick={() => navigate(-1)}
        sx={{ width: "fit-content" }}
      >
        <Typography variant="h5" style={{ color: "white", fontWeight: "400" }}>
          Go Back
        </Typography>
      </Button>
      <div style={{ paddingTop: "38px" }}></div>
      <Typography fontSize="22px" color={theme.palette.text.main}>
        Thank you for visiting!{" "}
      </Typography>
      <Typography fontSize="22px" p="0 17rem" color={theme.palette.text.main}>
        “This page is currently under development. Please check back soon for
        updates. We appreciate your patience!"
      </Typography>
    </Box>
  );
};

export default DevlopmentPage;
