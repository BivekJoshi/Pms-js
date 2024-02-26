// withPDFControls.js
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { CircularProgress } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const withPDFControls = (PDFComponent) => {
  const PDFControlsWrapper = ({ userData, imageURL, extraInfo }) => {
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
                // <Loader color="red" size={30} />
                <CircularProgress />
              ) : (
                <PictureAsPdfIcon
                  style={{ cursor: "pointer", color: "grey" }}
                  title="Save as Pdf"
                />
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
