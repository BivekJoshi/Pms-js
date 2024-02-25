import { TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

import RenderInput from "../../../components/renderInput/RenderInput";

const StepFour = ({ formik }) => {
  console.log("🚀 ~ StepFour ~ formik:", formik);
  const stepFourFields = [
    {
      name: "dpId",
      label: "Depository Participant",
      md: 12,
      sm: 12,
      path: "http://103.94.159.144:8084/kyc/api/utility/dp-details",
      type: "asyncDropDown",
      required: true,
      responseLabel: "dpName",
      responseId: "id",
    },
    {
      name: "accountType",
      label: "Would you like to open DEMAT / TRADING Account?",
      type: "toggleButton",
      options: [
        {
          label: "DEMAT Account",
          value: "DEMAT Account",
        },
        {
          label: "TMS Account",
          value: "TMS Account",
        },
      ],
    },
  ];

  return (
    <div data-aos="fade-left">
      <RenderInput inputField={stepFourFields} formik={formik} />
    </div>
  );
};

export default StepFour;
