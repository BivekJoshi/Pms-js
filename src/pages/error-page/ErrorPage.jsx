import React from "react";
import ErrorPhoto from "../../assets/ErrorPage.jpg";
import { Button, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", 
        // backgroundColor:"#EBEDEF"
      }}
    >
      <img
        style={{ height: "500px", width: "500px" }}
        src={ErrorPhoto}
        alt="Error page"
      />
      <Button variant="contained" style={{backgroundColor:"#6C49B4"}}>Go back to Dashboard</Button>
      <br/>
      <Typography variant="h5" color="grey">Page Not Found</Typography>
      <Typography variant="h6" color="grey">The Page you are looking for doesnot exist or an othe error occurred.</Typography>
    </div>
  );
};

export default ErrorPage;

