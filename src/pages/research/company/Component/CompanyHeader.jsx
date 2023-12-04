import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const CompanyHeader = () => {
  const theme = useTheme();

  const data = [
    { label: "Last Price (NPR) :", value: "Rs 789.00" },
    { label: "Todays Change :", value: "Down Rs 50 (0.82%)" },
    { label: "Last Traded :", value: "11:10 Am, 14 Aug 22" },
    { label: "NEPSE Status :", value: "Open" },
    { label: "Bid /Size :", value: "Rs 785 /150" },

    { label: "Last Price (NPR) :", value: "Rs 789.00" },
    { label: "Todays Change :", value: "Down Rs 50 (0.82%)" },
    { label: "Last Traded :", value: "11:10 Am, 14 Aug 22" },
    { label: "NEPSE Status :", value: "Open" },
    { label: "Bid /Size :", value: "Rs 785 /150" },

    { label: "Last Price (NPR) :", value: "Rs 789.00" },
    { label: "Todays Change :", value: "Down Rs 50 (0.82%)" },
    { label: "Last Traded :", value: "11:10 Am, 14 Aug 22" },
    { label: "NEPSE Status :", value: "Open" },
    { label: "Bid /Size :", value: "Rs 785 /150" },
  ];

  return (
    <Box
      bgcolor={theme.palette.background.alt}
      style={{
        marginBottom: "1rem",
        padding: "1rem 1rem",
        borderRadius: "6px",
      }}
    >
      <Typography variant="h4">
        <b>
          Nabil Bank Limited
          <br />
          Nepse : NABIL : Financials, Bank
        </b>
      </Typography>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {[0, 1, 2].map((column, index) => (
          <Grid key={index} item xs={12} md={4} lg={4} xl={4}>
            <Grid container>
              {data.slice(column * 5, (column + 1) * 5).map((item, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      <b>{item.label}</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant="h5"
                      style={{
                        color:
                          item.label === "Todays Change :"
                            ? item.value.includes("Down")
                              ? "red"
                              : "green"
                            : "black",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyHeader;
