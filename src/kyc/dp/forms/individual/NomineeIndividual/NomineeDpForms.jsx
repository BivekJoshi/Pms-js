import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useNomineeForm } from "./useNomineeForm";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { Box, useTheme } from "@mui/system";
import { useGetNomineeDetail } from '../../../../../hooks/Kyc/individual/nominee/useNominee';
import { useNavigate } from "react-router-dom";
import { SET_FORM } from "../../../../../redux/types/types";
import { useDispatch } from "react-redux";
import { DISTRICTS } from '../basicInputData';
import { useTranslation } from 'react-i18next';
import useKycNavigation from "../../../../hooks/useKycNavigation";

const PROVINCE = [
  {
    value: "1",
    label: "Koshi Pradesh",
    id: 1,
  },
  {
    value: "2",
    label: "Madhesh Pradesh",
    id: 2,
  },
  {
    value: "3",
    label: "Bagmati Pradesh",
    id: 3,
  },
  {
    value: "4",
    label: "Gandaki Pradesh",
    id: 4,
  },
  {
    value: "5",
    label: "Lumbini Pradesh",
    id: 5,
  },
  {
    value: "6",
    label: "Karnali Pradesh",
    id: 6,
  },
  {
    value: "7",
    label: "Sudurpashchim Pradesh",
    id: 7,
  },
]

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
        label: "Father's Name",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "grandfatherName",
        label: "Grandfather's Name",
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
        max: 150,
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
        type: "dropDown",
        required: true,
        id: nanoid(),
        options: DISTRICTS,
        md: 4,
        sm: 12,
      },
      // {
      //   name: "issuedDate",
      //   label: "Citizenship Issued Date (B.S.)",
      //   type: "text",
      //   required: true,
      //   id: nanoid(),
      //   md: 4,
      //   sm: 12,
      // },
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
        nepaliLabel: "Citizenship Issued Date (B.S.)",
        engLabel: "Citizenship Issued Date (A.D.)",
        type: "dualDate",
        required: true,
        id: nanoid(),
        engMd: 6,
        engSm: 12,
        nepMd: 6,
        nepSm: 12,
        md: 8,
        sm: 12,
        disableFuture: true,
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
        md: 4,
        sm: 6,
        lg: 4,
        xs: 12,
        required: true,
        type: "dropDown",
        options: [{ id: 1, value: "Nepal", label: "Nepal" }],
      },
      {
        name: "province",
        label: "Province",
        md: 4,
        sm: 6,
        lg: 4,
        xs: 12,
        required: true,
        type: "dropDown",
        options: PROVINCE,
        clearField: ["district", "municipality"],
      },
      {
        name: "district",
        label: "District",
        md: 4,
        sm: 6,
        lg: 4,
        xs: 12,
        required: true,
        type: "asyncDropDownOption",
        reference: "province",
        dependentFieldValue: "province",
        path: "utility/district",
        clearField: ["municipality"],
      },
      {
        name: "municipality",
        label: "Rural Municipality/Municipality/Metropolitan",
        md: 4,
        sm: 6,
        lg: 4,
        xs: 12,
        required: true,
        type: "asyncDropDownOption",
        reference: "district",
        dependentFieldValue: "district",
        path: "utility/municipal",
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
        label: "Telephone No.",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "mobileNo",
        label: "Mobile No.",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "fax",
        label: "Fax No.",
        type: "text",
        required: true,
        id: nanoid(),
        md: 4,
        sm: 12,
      },
      {
        name: "panNo",
        label: "PAN No.",
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
  const { t } = useTranslation();
  const theme = useTheme();
  const [fields, setFields] = useState(NOMINEEFIELDS);
  const { data: nomineeData } = useGetNomineeDetail();
  const data = nomineeData && nomineeData?.data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nextFormPath, previousFormPath } = useKycNavigation();

  const { formik } = useNomineeForm(data);

  const handleBack = () => {
    navigate(previousFormPath());
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
          {t("Nominee Details")}
        </Typography>
      </Box>
      <RenderInput inputField={fields} formik={formik} />
      <Grid sx={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
        <Button
          onClick={handleBack}
          variant="outlined"
          color="secondary"
        >
          {t("Back")}
        </Button>
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
        >
          {t("Next")}
        </Button>
      </Grid>
    </div>
  );
};

export default NomineeDpForms;
