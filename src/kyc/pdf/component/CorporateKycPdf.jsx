import React from "react";
import withPDFControls from "../withPdfControls";
import CorporateKycContent from "./Corporate/CorporateKycContent";

const CorporateKycPdf = ({ imageURL, userData, extraInfo }) => {
  const EnhancedNewIndividualKyc = withPDFControls(CorporateKycContent);
  return (
    <div>
      <EnhancedNewIndividualKyc
        userData={userData}
        imageURL={imageURL}
        extraInfo={extraInfo}
      />
    </div>
  );
};
export default CorporateKycPdf;
