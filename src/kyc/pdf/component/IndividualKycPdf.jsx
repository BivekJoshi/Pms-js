import React from "react";
import IndividualKycContent from "./Individual/IndividualKycContent";
import withPDFControls from "../withPdfControls";

const IndividualKycPdf = ({ imageURL, userData, extraInfo }) => {
  const EnhancedNewIndividualKyc = withPDFControls(IndividualKycContent);
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
export default IndividualKycPdf;
