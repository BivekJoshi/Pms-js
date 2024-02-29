import React from "react";
import ErrorPhoto from "../../assets/ErrorPage.jpg";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ErrorPage = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state?.user);

  const brokerOption = useSelector((state) => state?.brokerList?.brokerOption);
  // console.log(
  //   '🚀 ~ file: ErrorPage.jsx:10 ~ ErrorPage ~ brokerOption:',
  //   brokerOption
  // );

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

      <Button
        variant="contained"
        style={{ backgroundColor: "#6C49B4" }}
        // onClick={() => navigate(brokerOption ? -1 : '/login')}
        onClick={() => navigate(userDetails ? -1 : "/login")}
      >
        Go Back
      </Button>

      <br />
      <Typography variant="h5" color="grey">
        Page Not Found
      </Typography>
      <Typography variant="h6" color="grey">
        The Page you are looking for doesnot exist or an other error occurred.
      </Typography>
    </div>
  );
};

export default ErrorPage;
