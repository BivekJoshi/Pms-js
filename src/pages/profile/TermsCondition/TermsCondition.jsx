import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { termsData } from "./data";

const TermsCondition = () => {
  const theme = useTheme();
  const data = termsData;
  return (
    <Box
      sx={{
        width: "cover",
        backgroundColor: theme.palette.background.alt,
        padding: "16px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          // color: theme.palette.primary.main,
          color: "#7348A6",
          textAlign: "center",
        }}
      >
        Terms and Conditions for Portfolio Management System
      </Typography>
      <Grid container gap={3} mt={3}>
        {data &&
          data.map((data) => (
            <>
              <Grid
                item
                key={data?.id}
                sx={{
                  paddingX: { lg: "3rem", xs: "1rem" },
                  textAlign: "justify",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    //  color: theme.palette.primary.main
                    color: "#7348A6",
                  }}
                >
                  {data?.title}
                </Typography>
                <Typography variant="p">{data?.desc}</Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 600,
                    //  color: "#20c56b"
                    color: "#7348A6",
                  }}
                >
                  {data?.footer}
                </Typography>
              </Grid>
            </>
          ))}
      </Grid>
    </Box>
  );
};

export default TermsCondition;
