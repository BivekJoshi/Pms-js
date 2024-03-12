import { TextField, ToggleButton, ToggleButtonGroup } from "@mui/material"
import React from "react"

import RenderInput from "../../../components/renderInput/RenderInput"

const StepFour = ({ formik }) => {
  const stepFourFields = [
    {
      name: "dpId",
      label: "Depository Participant",
      md: 12,
      sm: 12,
      path: "/utility/dp-details",
      type: "asyncDropDown",
      required: true,
      responseLabel: "dpName",
      responseId: "id",
    },
  ]

  return (
    <div data-aos="fade-left">
      <RenderInput inputField={stepFourFields} formik={formik} />
    </div>
  )
}

export default StepFour
