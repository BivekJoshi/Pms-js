import React from "react";
import { nanoid } from "nanoid";

import RenderInput from "../../../components/renderInput/RenderInput";

const StepTwo = ({ formik }) => {
  const stepTwoFieds = [
    {
      name: "nepseExist",
      label: "Already have Trading Account?",
      type: "radio",
      sm: 12,
      col: 12,
      id: nanoid(),
      radio: [
        {
          value: true,
          label: "Yes",
        },
        {
          value: false,
          label: "No",
        },
      ],
      isDependent: true,
      trueNewFields: [
        {
          name: "nepseCode",
          type: "text",
          label: "NEPSE Code",
          required: true,
          id: nanoid(),
          md: 12,
          sm: 12,
        },
      ],
      falseNewFields: [
        {
          name: "dematExist",
          label: "Already have Demat Account?",
          type: "radio",
          sm: 12,
          col: 12,
          id: nanoid(),
          radio: [
            {
              value: true,
              label: "Yes",
            },
            {
              value: false,
              label: "No",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div data-aos="fade-left">
      <RenderInput inputField={stepTwoFieds} formik={formik} />
    </div>
  );
};

export default StepTwo;
