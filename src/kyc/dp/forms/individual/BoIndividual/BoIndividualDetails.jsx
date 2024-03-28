import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { nanoid } from "nanoid";
import { useKycBoIndividualForm } from "./useKycBoIndividualForm";
import { useGetBODetail } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useKycNavigation from "../../../../hooks/useKycNavigation";

const bodFields = [
  {
    name: "isStandingInstructionForAutomaticTxn",
    label: "Do you want Standing Instruction For The Automatic Transaction?",
    type: "switch",
    col: 12,
    id: nanoid(),
    required: true,
    display: "flex",
    direction: "column",
    justify: "start",
    hasRadio: true,
    radioName: "accountStatementPeriod",
    radioLabel: "Account Statement Period",
    radioDisplay: "flex",
    radioDirection: "row",
    radioAlign: "center",
    radioGap: "16px",
    radio: [
      {
        value: "DAILY",
        label: "Daily",
        id: nanoid(),
      },
      {
        value: "WEEKLY",
        label: "Weekly",
        id: nanoid(),
      },
      {
        value: "15DAYS",
        label: "15 Days",
        id: nanoid(),
      },
      {
        value: "MONTHLY",
        label: "Monthly",
        id: nanoid(),
      },
    ],
  },
];

const BoIndividualDetails = () => {
  const { t } = useTranslation();
  const [fields, setFields] = useState(bodFields);
  const theme = useTheme();
  const navigate = useNavigate();
  const { previousFormPath } = useKycNavigation();
  const { data: boData } = useGetBODetail();
  const data = boData;
  const { formik } = useKycBoIndividualForm(data);

  useEffect(() => {
    setFields(bodFields);
  }, []);

  useEffect(() => {
    if (!formik.values.isStandingInstructionForAutomaticTxn) {
      formik.setFieldValue("accountStatementPeriod", "");
    }
  }, [formik.values.isStandingInstructionForAutomaticTxn]);

  const handleBack = () => {
    navigate(previousFormPath());
  };

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
          {t("BO Statement")}
        </Typography>
      </Box>

      <Box
        color={theme.palette.text.main}
        bgcolor={theme.palette.background.alt}
        sx={{
          borderRadius: "0 6px 6px 0",
          padding: "16px",
          boxShadow:
            "0 1px 3px rgpba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        }}
      >
        <RenderInput inputField={fields} formik={formik} />
        {formik.errors.accountStatementPeriod &&
          formik.touched.accountStatementPeriod && (
            <Typography color="red" fontSize={"10.5px"}>
              {formik.errors.accountStatementPeriod}
            </Typography>
          )}
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Button
            onClick={() => handleBack()}
            variant="outlined"
            color="secondary"
          >
            {t("Back")}
          </Button>
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

export default BoIndividualDetails;
