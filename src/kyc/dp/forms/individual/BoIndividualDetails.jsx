import { Button, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { nanoid } from "nanoid";
import { useKycBoIndividualForm } from "../../../../hooks/Kyc/individual/boStatement/useKycBoIndividualForm";

const bodFields = [
  {
    name: "isStandingInstructionForAutomaticTxn",
    label: "Do you want Standing Instruction For The Automatic Transaction?",
    type: "switch",
    col: 12,
    id: nanoid(),
    display: "flex",
    direction: "row-reverse",
    marginLeft: "0px",
  },
  {
    name: "accountStatementPeriod",
    label: "Account Statement Period : ",
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
    display: "flex",
    align: "center",
    gap: "1rem",
    sm: 12,
    col: 12,
    id: nanoid(),
  },
];
const BoIndividualDetails = () => {
  const theme = useTheme();
  const { formik } = useKycBoIndividualForm();

  const [fields, setFields] = useState(bodFields);

  useEffect(() => {
    if (!formik.values.isStandingInstructionForAutomaticTxn) {
      setFields(bodFields.slice(0, 1));
    } else {
      setFields(bodFields);
      formik.setFieldValue("accountStatementPeriod", "");
    }
  }, [formik.values.isStandingInstructionForAutomaticTxn]);

  return (
    <div data-aos="zoom-in-right">
      <Grid container>
        <Grid
          item
          sm={12}
          md={12}
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
        </Grid>
      </Grid>
      <RenderInput inputField={fields} formik={formik} />
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
        >
          Next
        </Button>
      </Grid>
    </div>
  );
};

export default BoIndividualDetails;
