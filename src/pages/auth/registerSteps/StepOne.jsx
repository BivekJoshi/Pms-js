import React from "react"
import RenderInput from "../../../components/renderInput/RenderInput"
import { kycClientType } from "../../../utility/kycData"

const StepOne = ({ formik }) => {
  const stepOneFields = [
    {
      name: "name",
      label: "Full Name",
      md: 12,
      sm: 12,
      required: true,
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      md: 12,
      sm: 12,
      required: true,
      type: "text",
    },
    {
      name: "phoneNo",
      label: "Mobile Number",
      md: 12,
      sm: 12,
      required: true,
      type: "text",
    },
    {
      name: "branchId",
      label: "Branch",
      md: 12,
      sm: 12,
      path: "/utility/branch",
      type: "asyncDropDown",
      required: true,
      responseLabel: "branchName",
      responseId: "id",
    },
    {
      name: "clientType",
      label: "Client type",
      md: 12,
      sm: 12,
      type: "dropDown",
      required: true,
      options: kycClientType,
    },
    // {
    //   name: "nepseExist",
    //   label: "Do you have Trading account?",
    //   type: "switchWithFields",
    //   md: 12,
    //   sm: 12,

    //   newFields: [
    //     {
    //       name: "nepseCode",
    //       type: "text",
    //       label: "NEPSE Code",
    //       required: true,
    //       id: nanoid(),
    //       md: 12,
    //       sm: 12,
    //     },
    //   ],
    // },
    // {
    //   name: "dematExist",
    //   label: "Do you have Demat account?",
    //   type: "switchWithFields",
    //   md: 12,
    //   sm: 12,
    //   disableOnChange: {
    //     name: ["nepseExist"],
    //     value: [true],
    //   },
    //   newFields: [
    //     {
    //       name: "dpId",
    //       label: "Depository Participant",
    //       md: 12,
    //       sm: 12,
    //       path: "http://103.94.159.144:8084/kyc/api/utility/dp-details",
    //       type: "asyncDropDown",
    //       required: true,
    //       responseLabel: "dpName",
    //       responseId: "id",
    //     },
    //     {
    //       name: "dematNo",
    //       type: "number",
    //       label: "Demat No",
    //       required: true,
    //       id: nanoid(),
    //       md: 12,
    //       sm: 12,
    //     },
    //   ],
    // },
  ]
  return (
    <div data-aos="fade-left">
      <RenderInput inputField={stepOneFields} formik={formik} />
    </div>
  )
}

export default StepOne
