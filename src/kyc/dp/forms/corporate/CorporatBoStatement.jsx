import React from "react";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { Grid } from "@mui/material";
import { corporatBoStatementForm } from "../../../../form/auth/CorporateDp/CorporatBoStatement/corporatBoStatementForm";
import { nanoid } from "nanoid";

const CorporatBoStatement = () => {
  const { formik } = corporatBoStatementForm();
  const StatementsField = [
    {
      name: "isStandingInstructionForAutomaticTxn",
      label:
        "Do you want Standing Instruction For The Automatic Transaction? (निक्षेप सदस्यले हितग्राहीको खातामा भएको घटबढ स्वचालितरुपमा गराउने/नगराउने)",
      type: "radio",
      col: 12,
      id: nanoid(),
      radio: [
        {
          value: "true",
          label: "Yes",
          id: nanoid(),
        },
        {
          value: "false",
          label: "No",
          id: nanoid(),
        },
      ],
      onChangeClearValue: ["accountStatementPeriod"],
    },
    {
      name: "accountStatementPeriod",
      label: "Account Statement Period (खाता विवरण अवधि)",
      type: "radio",
      radio: [
        {
          value: "DAILY",
          label: "Daily",
          id: nanoid(),
        },
        {
          value: "WEEKLY",
          label: "Weekly",
          id: nanoid(),
        },
        {
          value: "15DAYS",
          label: "15 Days",
          id: nanoid(),
        },
        {
          value: "MONTHLY",
          label: "Monthly",
          id: nanoid(),
        },
      ],
      sm: 6,
      col: 12,
      id: nanoid(),
      watchFor: "isStandingInstructionForAutomaticTxn",
      dependentAction: {
        type: "DISABLE",
        disable: true,
      },
    },
  ];

  return (
    <div style={{ paddingBottom: "250px", padding: "5rem" }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid>
          <RenderInput
            inputField={StatementsField}
            formik={formik}
           
          />
        </Grid>
        <button type="submit"> save</button>
      </form>
    </div>
  );
};

export default CorporatBoStatement;
