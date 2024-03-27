import React from "react";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { nanoid } from "nanoid";
import { FAMILY_RELATION } from "../basicInputData";
import useMinorDetailFrom from "./useMinorDetailFrom";
import { Button } from "@mui/base";
import { useTranslation } from "react-i18next";
import { Grid, Typography, useTheme } from "@mui/material";
import { useGetGuardianDetail } from "../../../../../hooks/Kyc/individual/GuardianDetail/useGuardianDetail";

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
];

const isMinor = [
  {
    name: "guardianName",
    label: "Guardian Name",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "text",
    id: nanoid(),
  },
  {
    name: "relationship",
    label: "Relationship with applicant ",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    options: FAMILY_RELATION,
    type: "dropDown",
    id: nanoid(),
  },
  {
    name: "guardianAddress",
    label: "Address ",
    type: "text",
    id: nanoid(),
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
  },
  {
    name: "guardianProvince",
    label: "Province",
    type: "dropDown",
    required: true,
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    options: PROVINCE,
    clearField: ["guardianDistrict", "guardianMunci"],
  },
  {
    name: "guardianDistrict",
    label: "District ",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    required: true,
    type: "asyncDropDownOption",
    reference: "province",
    dependentFieldValue: "guardianProvince",
    path: "utility/district",
    clearField: ["guardianMunci"],
  },
  {
    name: "guardianMunci",
    label: "Rural Municipality/Municipality/Metropolitan",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    required: true,
    type: "asyncDropDownOption",
    reference: "district",
    dependentFieldValue: "guardianDistrict",
    path: "utility/municipal",
  },
  {
    name: "guardianWard",
    label: "Ward No.",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "number",
    id: nanoid(),
  },
  {
    name: "guardianFax",
    label: "Fax No.",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "text",
    id: nanoid(),
  },
  {
    name: "guardianEmail",
    label: "Email Address",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "text",
    id: nanoid(),
  },
  {
    name: "guardianMob",
    label: "Mobile Number",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "number",
    id: nanoid(),
  },
  {
    name: "guardianFinancialStatus",
    label: "Financial Status",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "text",
    id: nanoid(),
  },
];
const MinorDetails = () => {
  const { data: guardianDetail } = useGetGuardianDetail();
  const { formik } = useMinorDetailFrom({ guardianDetail });
  const { t } = useTranslation();
  const theme = useTheme();
  console.log(formik);
  return (
    <div>
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
          {t("Guardian Detail")}
        </Typography>
      </Grid>
      <RenderInput inputField={isMinor} formik={formik} />
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
          style={{
            background: theme.palette.background.btn,
            color: theme.palette.text.alt,
          }}
        >
          {t("Next")}
        </Button>
      </Grid>
    </div>
  );
};

export default MinorDetails;
