import React from "react"
import RenderInput from "../../../components/renderInput/RenderInput"

const StepThree = ({ formik }) => {
  const nepseCodeTrue = formik.values?.dpId === 11400 ? true : false

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
      isDependent: nepseCodeTrue,
      trueNewFields: [
        {
          name: "dematNo",
          type: "number",
          label: "Demat No",
          required: true,
          id: 2,
          md: 12,
          sm: 12,
        },
      ],
      falseNewFields: [
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
      ],
    },
  ]
  return (
    <div data-aos="fade-left">
      <RenderInput inputField={stepThreeFields} formik={formik} />
    </div>
  )
}

export default StepThree
