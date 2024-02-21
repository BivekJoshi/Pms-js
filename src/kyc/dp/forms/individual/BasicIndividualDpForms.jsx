import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { basicData } from "./basicInputData";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useBasicIndividualDpForms } from "./useBasicIndividualDpForms";
import { useTheme } from "@emotion/react";

const BasicIndividualDpForms = () => {
  const theme = useTheme();
  const { formik } = useBasicIndividualDpForms();
  useEffect(() => {
    const calculateAge = (dob) => {
      const dobDate = new Date(dob);
      const now = new Date();
      const diff = now.getTime() - dobDate.getTime();
      const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25);

      return ageInYears;
    };
    const dob = formik.values.dob;
    if (dob) {
      const personAge = calculateAge(dob);
      if (personAge < 16) {
        formik.setFieldValue("isMinor", true);
      } else {
        formik.setFieldValue("isMinor", false);
      }
    }
  }, [formik.values.dob]);

  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          Basic Details
        </Typography>
      </Box>

      <Grid>
        <RenderInput inputField={basicData} formik={formik} />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
        >
          Next
        </Button>
      </Grid>
    </div>
  );
};

export default BasicIndividualDpForms;
