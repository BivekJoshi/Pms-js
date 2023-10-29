import { Box, Typography } from "@mui/material";
import React from "react";
import Group from "../../assets/Group.png";

const PageNotFound = () => {
  return (
    <Box display="flex" textAlign="center" p="32px " flexDirection="column">
      <img
        src={Group}
        alt="Group.png"
        style={{ alignSelf: "center" }}
      />
      <div style={{paddingTop:"38px"}}></div>
      <Typography fontSize="22px" color=" #777">Thank you for visiting! </Typography>
      <Typography fontSize="22px" p="0 17rem" color=" #777">
        “This page is currently under development. Please check back soon for
        updates. We appreciate your patience!"
      </Typography>
    </Box>
  );
};

export default PageNotFound;
