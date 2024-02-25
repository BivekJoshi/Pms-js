import { TextField } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import RenderInput from "../../../components/renderInput/RenderInput";

const StepThree = ({ formik }) => {
  const stepThreeFields = [
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
      name: "dematNo",
      type: "number",
      label: "Demat No",
      required: true,
      id: 2,
      md: 12,
      sm: 12,
    },
  ];
  return (
    <div data-aos="fade-left">
      <RenderInput inputField={stepThreeFields} formik={formik} />
    </div>
  );
};

export default StepThree;
