// withPDFControls.js
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { Button, CircularProgress, Typography } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import pdf from "../../assets/pdf.svg";
import { useTranslation } from "react-i18next";

const withPDFControls = (PDFComponent) => {
  const PDFControlsWrapper = ({ userData, imageURL, extraInfo }) => {
    const { t } = useTranslation();
    const fileName = userData ? userData?.user?.name : "kyc";
    return (
      <>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "16px" }}
        >
          <PDFDownloadLink
            document={
              <PDFComponent
                userData={userData}
                imageURL={imageURL}
                extraInfo={extraInfo}
              />
            }
            fileName={fileName}
          >
            {({ loading }) =>
              imageURL?.length === 0 || loading ? (
                <Button variant="contained" disabled color="secondary">
                  <img style={{ color: "#fff" }} src={pdf} alt="pdf-image" />
                  <Typography variant="p">{t("Download KYC")}</Typography>
                </Button>
              ) : (
                <>
                  <Button variant="contained" color="secondary">
                    <img style={{ color: "#fff" }} src={pdf} alt="pdf-image" />
                    <Typography variant="p">{t("Download KYC")}</Typography>
                  </Button>
                  {/* <PictureAsPdfIcon
                    style={{ cursor: "pointer", color: "grey" }}
                    title="Save as Pdf"
                  /> */}
                </>
              )
            }
          </PDFDownloadLink>
        </div>
      </>
    );
  };

  return PDFControlsWrapper;
};

export default withPDFControls;
