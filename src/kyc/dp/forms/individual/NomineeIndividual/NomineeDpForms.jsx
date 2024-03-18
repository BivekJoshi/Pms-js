import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useNomineeForm } from "./useNomineeForm";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { Box, useTheme } from "@mui/system";
import { useGetNomineeDetail } from '../../../../../hooks/Kyc/individual/nominee/useNominee';
import { useNavigate } from "react-router-dom";
import { SET_FORM } from "../../../../../redux/types/types";
import { nextFormPath } from "../../../../../utility/userHelper";
import { useDispatch } from "react-redux";

const NOMINEEFIELDS = [
  {
    name: "haveNominee",
    label: "Do you want to keep Nominee Details?",
    type: "switchWithFields",
    required: "Please specify whether company is subsidiary or not",
    id: nanoid(),
    display: "flex",
    direction: "column",
    align: "start",
    sm: 12,
    newFields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "fatherName",
        label: "Father’s Name",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "grandfatherName",
        label: "Grandfather’s Name",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "age",
        label: "Age",
        type: "number",
        max: 16,
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "citizenShipNo",
        label: "Citizenship Number",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "placeOfIssue",
        label: "Citizenship Issued District",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "issuedDate",
        label: "Citizenship Issued Date (B.S.)",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      // {
      //   name: "dob",
      //   label: "Date of Birth (B.S.) (जन्म मिति) (B.S.)",
      //   type: "dualDate",
      //   placeholder: "Select date of birth (B.S)",
      //   engMd: 6,
      //   engSm: 12,
      //   nepMd: 6,
      //   nepSm: 12,
      //   md: 8,
      //   sm: 12,
      //   engLabel: "Date of Birth (A.D.)",
      //   required: true,
      //   id: nanoid(),
      // },
      {
        name: "citizenshipIssudeDate",
        label: "Citizenship Issued Date (A.D.)",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "relation",
        label: "Relationship with Applicant",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "province",
        label: "Province",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "district",
        label: "District",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "municipality",
        label: "Rural Municipality/Municipality/",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "address",
        label: "Correspondence Address",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "telephoneNo",
        label: "Telephone Number",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "mobileNo",
        label: "Mobile Number",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "fax",
        label: "Fax Number",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "panNo",
        label: "PAN Number",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "email",
        label: "Email",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
    ],
  },
];

const NomineeDpForms = () => {
  const theme = useTheme();
  const [fields, setFields] = useState(NOMINEEFIELDS);
  const { data: nomineeData } = useGetNomineeDetail();
  const data = nomineeData && nomineeData?.data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formik } = useNomineeForm(data);

  const handleBack = () => {
    navigate(nextFormPath(6));
    dispatch({ type: SET_FORM, payload: 6 });
  }

  useEffect(() => {
    setFields(NOMINEEFIELDS);
  }, []);

  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderRadius: "0 6px 6px 0",
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          Nominee Details
        </Typography>
      </Box>
      <RenderInput inputField={fields} formik={formik} />
      <Grid sx={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
        <Button
          onClick={handleBack}
          variant="outlined"
          color="secondary"
        >
          Back
        </Button>
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

export default NomineeDpForms;
