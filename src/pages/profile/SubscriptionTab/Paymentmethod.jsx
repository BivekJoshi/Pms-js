import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Payment1 from "../../../assets/payment1.png";
import Payment2 from "../../../assets/payment2.png";
import Payment3 from "../../../assets/payment3.png";

const Paymentmethod = ({ onClose }) => {
  return (
    <>
      <Grid container justifyContent="space-between" direction="row">
        <Typography variant="h5">
          <b>Choose Payment Method</b>
        </Typography>
        <CloseIcon
          onClick={onClose}
          sx={{
            fontSize: "24px",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.2)",
              transition: "transform 0.5s ease-in-out",
              backgroundColor: "#F85862",
              borderRadius: "50%",
            },
          }}
        />
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid container direction="column">
        <Box
          style={{
            border: "1px solid rgb(171, 180, 188)",
            borderRadius: "4px",
            width: "100%",
            height: "59px",
            padding: "14px",
          }}
        >
          <img
            src={Payment1}
            alt="Payment 1"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <br />
        <Box
          style={{
            border: "1px solid rgb(171, 180, 188)",
            borderRadius: "4px",
            width: "100%",
            height: "59px",
            padding: "14px",
          }}
        >
          <img
            src={Payment2}
            alt="Payment 1"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <br />
        <Box
          style={{
            border: "1px solid rgb(171, 180, 188)",
            borderRadius: "4px",
            width: "100%",
            height: "59px",
            padding: "14px",
          }}
        >
          <img
            src={Payment3}
            alt="Payment 1"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Grid>
    </>
  );
};

export default Paymentmethod;
