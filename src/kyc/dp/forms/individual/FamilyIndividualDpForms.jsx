import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, useTheme, Stack } from "@mui/material";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useKycFamilyForm } from "../../../../hooks/kyc/individual/family/usekycFamilyForm";
import { nanoid } from 'nanoid';

const FamilyIndividualDpForms = () => {
  const theme = useTheme();
  const { formik } = useKycFamilyForm();

  const referalFields = [
    {
      type: "textWithValue",
      name: "relation",
      value: "referralPerson",
      label: "Referral Person",
      disabled: true,
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
    {
      type: "text",
      name: "memberName",
      label: "Referral Name",
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
    {
      type: "text",
      name: "email",
      label: "Referral Email",
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
    {
      type: "text",
      name: "mobileNumber",
      label: "Referral Mobile Number",
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
  ];
  const fatherFields = [
    {
      type: "text",
      label: "Father",
      name: "relation",
      required: true,
      disabled: true,
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
    {
      type: "text",
      name: "memberName",
      label: "Father's Name",
      required: true,
      col: 12,
      xs: 12,
      sm: 6,
      id: nanoid(),
    },
  
  ];
  const [fields, setFields] = useState(referalFields);

  useEffect(() => {
    setFields([...referalFields, ...fatherFields]);
  }, []);

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
            Family Members
          </Typography>
        </Grid>
      </Grid>
      <RenderInput inputField={fields} formik={formik} />
      <Stack
        mt={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid>
        </Grid>
        <Grid>
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            color="secondary"
          >
            Next
          </Button>
        </Grid>
      </Stack>
    </div>
  );
};

export default FamilyIndividualDpForms;
