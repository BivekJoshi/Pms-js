import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { basicData } from "./basicInputData";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useBasicIndividualDpForms } from "./useBasicIndividualDpForms";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useGetBasicDetail } from './BasicDetail/useBasicDetail';

const BasicIndividualDpForms = () => {
  const theme = useTheme();
  const currentForm = 1;
const { data: basicDpData } = useGetBasicDetail();
console.log(basicDpData?.data, "basic")
  const { formik } = useBasicIndividualDpForms({ currentForm });
  const { t } = useTranslation();

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
          borderRadius: "0 6px 6px 0",
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
          {t("Basic Details")}
        </Typography>
      </Box>

      <Box
        color={theme.palette.text.main}
        bgcolor={theme.palette.background.alt}
        sx={{
          borderRadius: "0 6px 6px 0",
          padding: "16px",
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        }}
      >
        <RenderInput inputField={basicData} formik={formik} />

        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            color="secondary"
          >
            {t("Next")}
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default BasicIndividualDpForms;
