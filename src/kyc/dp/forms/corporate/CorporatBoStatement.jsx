import React, { useEffect, useState } from "react";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { corporatBoStatementForm } from "../../../../form/auth/CorporateDp/CorporatBoStatement/corporatBoStatementForm";
import { nanoid } from "nanoid";

const CorporatBoStatement = () => {
  const theme = useTheme();
  const { formik } = corporatBoStatementForm();
  const StatementsField = [
    {
      name: "isStandingInstructionForAutomaticTxn",
      label: "Do you want Standing Instruction For The Automatic Transaction?",
      type: "switch",
      col: 12,
      id: nanoid(),
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
    },
  ];

  const [fields, setFields] = useState(StatementsField);

  useEffect(() => {
    if (!formik.values.isStandingInstructionForAutomaticTxn) {
      setFields(StatementsField.slice(0, 1));
    } else {
      setFields(StatementsField);
      formik.setFieldValue("accountStatementPeriod", "");
    }
  }, [formik.values.isStandingInstructionForAutomaticTxn]);

  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderLeft: `4px solid ${theme.palette.background.btn}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          BO Details
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid>
          <RenderInput inputField={fields} formik={formik} />
        </Grid>
        <button type="submit"> save</button>
      </form>
    </div>
  );
};

export default CorporatBoStatement;
