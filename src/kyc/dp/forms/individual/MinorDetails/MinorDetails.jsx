import React from "react";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { nanoid } from "nanoid";
import { FAMILY_RELATION } from "../basicInputData";
import useMinorDetailFrom from "./useMinorDetailFrom";
import { Button } from "@mui/base";
import { useTranslation } from "react-i18next";
import { Grid, Typography, useTheme } from "@mui/material";

const isMinor = [
  {
    name: "birthCertificateNo",
    label: "Birth Certificate No. (जन्म प्रमाणपत्र नं.)",
    type: "text",
    id: nanoid(),

    col: 12,
    sm: 4,
  },
  {
    name: "birthCertificateDate",
    nepaliLabel:
      "Birth Certificate Issued Date (जन्म प्रमाणपत्र जारी गरिएको मिति) (B.S.)",
    type: "dualDate",
    engLabel:
      "Birth Certificate Issued Date (जन्म प्रमाणपत्र जारी गरिएको मिति) (A.D.)",
    id: nanoid(),
    engMd: 6,
    engSm: 12,
    nepMd: 6,
    nepSm: 12,
    md: 8,
    sm: 12,
  },
  {
    name: "guardianName",
    label: "Guardian Name (अभिभावकको नाम)",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "text",
    id: nanoid(),
  },

  {
    name: "relationship",
    label: "Relationship with applicant (आवेदक संग सम्बन्ध)",
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
    label: "Address (ठेगाना)",
    type: "text",
    id: nanoid(),
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
  },
  {
    name: "guardianProvince",
    label: "Province (प्रदेश)",
    type: "dropDown",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    id: nanoid(),
    options: [
      {
        value: "Koshi Pradesh",
        label: "Koshi Pradesh",
        id: 1,
      },
      {
        value: "Madhesh Pradesh",
        label: "Madhesh Pradesh",
        id: 2,
      },
      {
        value: "Bagmati Pradesh",
        label: "Bagmati Pradesh",
        id: 3,
      },
      {
        value: "Gandaki Pradesh",
        label: "Gandaki Pradesh",
        id: 4,
      },
      {
        value: "Lumbini Pradesh",
        label: "Lumbini Pradesh",
        id: 5,
      },
      {
        value: "Karnali Pradesh",
        label: "Karnali Pradesh",
        id: 6,
      },
      {
        value: "Mahakali Pradesh",
        label: "Mahakali Pradesh",
        id: 7,
      },
    ],
    onChangeClearValue: ["guardianDistrict", "guardianMunci"],
  },
  {
    name: "guardianDistrict",
    label: "District (जिल्ला)",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "dropDown",
    mapId: "district",
    options: [],
    id: nanoid(),
    watchFor: "guardianProvince",
    dependentAction: {
      fetch: true,
      api: "/utility/district?province=#",
      method: "GET",
      staticField: "PROVINCE",
    },
    onChangeClearValue: ["municipality"],
  },
  {
    name: "guardianMunci",
    label:
      "Rural Municipality/Municipality/Sub Metropolitan City/Metropolitan City (गा.पा/न.पा/ उ.म .न.पा / म.न .पा ) ",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "dropDown",
    mapId: "municipality",
    options: [],
    id: nanoid(),
    watchFor: "guardianDistrict",
    dependentAction: {
      fetch: true,
      api: "/utility/municipal?district=#",
      method: "GET",
    },
  },
  {
    name: "guardianWard",
    label: "Ward No. (वडा नं.)",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "text",
    id: nanoid(),
  },
  {
    name: "guardianFax",
    label: "Fax No. (फ्याक्स नं.)",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "text",
    id: nanoid(),
  },
  {
    name: "guardianEmail",
    label: "Email Address (इ-मेल ठेगाना)",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "text",
    id: nanoid(),
  },
  {
    name: "guardianMob",
    label: "Mobile Number (मोबाइल नम्बर)",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    type: "number",
    minLength: 10,
    id: nanoid(),
  },
];
const MinorDetails = () => {
  const { formik } = useMinorDetailFrom();
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
