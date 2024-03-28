/* eslint-disable react/display-name */
import React, { forwardRef, useState } from "react";
import {
  FormControlLabel,
  Grid,
  Radio,
  Switch,
  Typography,
  Box,
  Button,
} from "@mui/material";
import IndividualKycPdf from "../../pdf/component/IndividualKycPdf";
import ReactToPrint from "react-to-print";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import useKycNavigation from "../../hooks/useKycNavigation";

const AgreementForm = forwardRef(({ onNext }, ref) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [switchCase, setSwitchCase] = useState(false);
  const { nextFormPath, previousFormPath } = useKycNavigation();
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleSwitchChange = (e) => {
    setSwitchCase(e.target.checked);
  };

  const handleBack = () => {
    navigate(previousFormPath());
  };
  const handleNext = () => {
    if (checked) {
      onNext();
    }
  };

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          background: "#fff",
          margin: "0 12px",
          padding: "1rem",
        }}
      >
        <Typography variant="p" sx={{ textAlign: "justify" }}>
          •{" "}
          {t(
            "By clicking on the checkbox, you agree that the information you have provided is accurate to the best of your knowledge. If any information is found to be false, your application may be rejected, and legal action may be taken against you."
          )}
        </Typography>
        <Typography variant="p" sx={{ textAlign: "justify" }}>
          •{" "}
          {t(
            "You are responsible for verifying all the details mentioned in the application form before submitting it. Once you have verified the details, you must print the form and sign it."
          )}
        </Typography>
        <Typography variant="p" sx={{ textAlign: "justify" }}>
          •{" "}
          {t(
            "The signed copy of the application form must be uploaded in the next process. Failure to upload the signed copy may result in the rejection of your application."
          )}
        </Typography>
      </Grid>
      <Grid sx={{ padding: "1rem" }}>
        <Box sx={{ display: "flex", alignItems: "center" }} px={1}>
          <FormControlLabel
            control={
              <Radio
                sx={{
                  color:
                    theme?.palette?.mode === "light"
                      ? `${theme.palette.secondary.main} !important`
                      : theme.palette.secondary.alt,
                }}
              />
            }
            sx={{ color: "#D32F2F" }}
            label={t("I have read and agree to all the terms and condition.")}
            onChange={handleChange}
            checked={checked}
          />
        </Box>
        {checked && (
          <>
            <Typography variant="h6">{t("Download KYC")}</Typography>

            <FormControlLabel
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "start",
                paddingLeft: "12px",
                width: "fit-content",
              }}
              label={t("Including Thumb Print and Signature")}
              control={
                <Switch
                  sx={{
                    color:
                      theme.palette.mode === "light"
                        ? `${theme.palette.secondary.main} !important`
                        : theme.palette.secondary.alt,
                  }}
                  checked={switchCase}
                  onChange={handleSwitchChange}
                />
              }
            />
            <Box sx={{ display: "flex", gap: "0.6rem" }}>
              <IndividualKycPdf />
              <ReactToPrint
                trigger={() => (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => ref.current.print()}
                  >
                    <LocalPrintshopIcon />
                    {t("Print KYC")}
                  </Button>
                )}
                content={() => ref.current}
                documentTitle="download.pdf"
                copyStyles
                contentStyle={{
                  marginTop: "500px",
                }}
              />
            </Box>
          </>
        )}
      </Grid>

      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="secondary" onClick={handleBack}>
          {t("Back")}
        </Button>
        {checked ? (
          <Button variant="contained" color="secondary" onClick={handleNext}>
            {t("Next")}
          </Button>
        ) : (
          <Button variant="contained" color="secondary" disabled>
            {t("Next")}
          </Button>
        )}
      </Grid>
    </>
  );
});

export default AgreementForm;
