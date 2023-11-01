import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import StatusSuccess from "../../assets/statusSuccess.png";
import Success from "../../assets/success.png";
import Pending from "../../assets/pending.png";

const images = {
  VERIFIED: StatusSuccess,
  APPROVED: Success,
  PENDING: Pending,
};
const messages = {
  VERIFIED: "Your application is verified.",
  APPROVED: "Your application is in SucessFull State.",
  PENDING: "Your application is in Pending approval State.",
};

const ApplicationMessage = () => {
  const history = useNavigate();
  const { status } = useParams();

  const handleClick = () => {
    history("/login");
  };

  const imageSrc = images[status];
  const message = messages[status];

  return (
    <Box
      zIndex="1"
      bgcolor="#FCFCFC"
      boxShadow="0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)"
      padding="20px 50px"
      position="relative"
      display="flex"
      flexDirection="column"
      textAlign="center"
      borderRadius="32px"
    >
      <h3 className="headlineMedium" style={{ margin: "0" }}>
        Message Status
      </h3>
      {status && imageSrc && message && (
        <Grid style={{ textAlign: "-webkit-center" }}>
          <img
            src={imageSrc}
            alt={`Status ${status}`}
            width="50%"
            style={{ alignSelf: "center" }}
          />
          <div className="bodyMedium">{message} </div>
          <div className="bodyMedium" fontSize="14px">
            Thank you.
          </div>
          <Box height="54px"></Box>
          <div className="bodySmall">
            Already have an account?
            <span
              className=" labelMedium"
              onClick={handleClick}
              style={{ color: "#3838d0", cursor: "pointer" }}
            >
              Sign In
            </span>
          </div>
        </Grid>
      )}
    </Box>
  );
};

export default ApplicationMessage;
