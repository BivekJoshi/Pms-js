import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { policyData } from "./data";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const data = policyData;

  return (
    <Box
      sx={{
        width: "cover",
        backgroundColor: theme.palette.background.alt,
        padding: "2rem 2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          // color: theme.palette.primary.main,
          color: "#7348A6",
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "1.5rem",
        }}
      >
        Privacy Policy
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ marginBottom: "2rem" }}
        >
          <Typography variant="h4" sx={{ fontWeight: "400", fontSize: "16px" }}>
            This privacy policy explains how Digi Hub Pvt. Ltd. collects, uses,
            discloses, and protects personal and financial information obtained
            from users of our Portfolio Management System (PMS). By accessing or
            using our PMS, you consent to the practices described in this
            Privacy Policy.
          </Typography>
        </Grid>{" "}
      </Grid>
      <Grid container>
        {data?.map((information, index) => {
          return (
            <div key={index}>
              <Grid item lg={12} md={12} sm={12} sx={{ marginBottom: "2rem" }}>
                <Typography
                  variant="h5"
                  sx={{
                    marginBottom: "1rem",
                    fontWeight: 600,
                    color: "#7348A6",
                  }}
                >
                  {index + 1}. {information?.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "400", fontSize: "16px" }}
                >
                  {information?.subTitle}
                </Typography>
                <Typography variant="h4">{information?.descOnly}</Typography>

                <ul>
                  {information?.desc?.map((subInfo, index) => {
                    return (
                      <li key={index}>
                        <Typography variant="h6">
                          <b>{subInfo?.head} :</b> {subInfo?.description}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Grid>
            </div>
          );
        })}
        <Typography variant="h5" sx={{ fontWeight: 600, color: "#7348A6" }}>
          By using this site and our services you are consenting to the use of
          your personal information as set out in this Privacy Policy.
        </Typography>
      </Grid>
    </Box>
  );
};

export default PrivacyPolicy;
