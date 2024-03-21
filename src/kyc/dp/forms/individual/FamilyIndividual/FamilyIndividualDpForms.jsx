import React from "react";
import { Grid, Button, Typography, useTheme } from "@mui/material";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { nanoid } from "nanoid";
import { FieldArray, FormikProvider } from "formik";
import { useKycFamilyForm } from "./usekycFamilyForm";
import { useDispatch, useSelector } from "react-redux";
import { useGetFamily } from "../../../../../hooks/kyc/family/useFamily";
import MarriedFamilyTable from "./MarriedFamilyTable";
import { useNavigate } from "react-router-dom";
import { nextFormPath } from "../../../../../utility/userHelper";
import { SET_FORM } from "../../../../../redux/types/types";
import { useTranslation } from 'react-i18next';

const relationField = [
  {
    type: "text",
    name: "fname",
    label: "First Name",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    id: nanoid(),
  },
  {
    type: "text",
    name: "mname",
    label: "Middle Name",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    id: nanoid(),
  },
  {
    type: "text",
    name: "lname",
    label: "Last Name",
    col: 12,
    xs: 12,
    md: 4,
    sm: 6,
    id: nanoid(),
  },
  {
    type: "nepaliTypeText",
    name: "fnameNep",
    label: "First Name (Devanagari)",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    id: nanoid(),
  },
  {
    type: "nepaliTypeText",
    name: "mnameNep",
    label: "Middle Name (Devanagari)",
    col: 12,
    xs: 12,
    sm: 6,
    md: 4,
    id: nanoid(),
  },
  {
    type: "nepaliTypeText",
    name: "lnameNep",
    label: "Last Name (Devanagari)",
    col: 12,
    xs: 12,
    md: 4,
    sm: 6,
    id: nanoid(),
  },
];
const MarriedCase = [
  {
    name: "isMarried",
    label: "Are You Married?",
    type: "switchWithFields",
    id: nanoid(),
    sm: 12,
    display: "flex",
    direction: "column",
    align: "start",
    newFields: [
      {
        name: "relation",
        label: "Relation",
        type: "dropDown",
        options: [
          { id: 1, value: "spouse", label: "Spouse" },
          { id: 2, value: "father-in-law", label: "Father In Law's " },
          { id: 3, value: "mother-in-law", label: "Mother In Law's" },
          { id: 4, value: "son", label: "Son" },
          { id: 5, value: "daughter-in-law", label: "Daughter In Law's " },
          { id: 6, value: "daughter", label: "Daughter" },
        ],
        id: nanoid(),
        md: 3,
        sm: 12,
      },
      {
        name: "fname",
        label: "First Name",
        type: "text",
        id: nanoid(),
        md: 3,
        sm: 12,
      },
      {
        name: "mname",
        label: "Middle Name",
        type: "text",
        id: nanoid(),
        md: 3,
        sm: 12,
      },
      {
        name: "lname",
        label: "Last Name",
        type: "text",
        id: nanoid(),
        md: 3,
        sm: 12,
      },
    ],
  },
];
const FamilyIndividualDpForms = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { data: familyData } = useGetFamily();

  const { formik } = useKycFamilyForm({ familyData });
  const language = useSelector((state) => state?.language?.mode);

  const handleBack = () => {
    navigate(nextFormPath(3));
    dispatch({ type: SET_FORM, payload: 3 });
  };
  return (
    <div data-aos="zoom-in-right">
      <Grid container gridColumn>
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
            {t("Family Members")}
          </Typography>
        </Grid>
        <FormikProvider value={formik} {...formik}>
          <FieldArray name="personDetail">
            {() => {
              return (
                formik.values.personDetail &&
                formik.values?.personDetail?.map((details, index) => {
                  const field = relationField?.map((d) => {
                    return {
                      ...d,
                      name: `personDetail.${index}.[personDetail].${d.name}`,
                    };
                  });
                  return (
                    <FamilyDetails
                      key={index + details?.relationTypeDesc}
                      name={
                        language === "EN"
                          ? details?.relationTypeDesc
                          : details?.relationTypeDescNp
                      }
                      renderItems={
                        <RenderInput
                          inputField={field}
                          formik={formik}
                          index={index}
                          isFieldArray={true}
                          fieldArrayName="personDetail"
                        />
                      }
                    />
                  );
                })
              );
            }}
          </FieldArray>
        </FormikProvider>
      </Grid>
      <></>
      <MarriedFamilyTable />
      <Grid
        marginBlock={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Button onClick={handleBack} variant="outlined" color="secondary">
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

const FamilyDetails = ({ name, renderItems, key }) => {
  return (
    <Grid item sm={12} md={12} key={key}>
      <Typography
        marginBlockStart={2}
        marginBlockEnd={1}
        variant="h5"
        sx={{ fontWeight: "800" }}
      >
        {name} <span style={{ color: "red" }}>*</span>
      </Typography>
      {renderItems}
    </Grid>
  );
};

export default FamilyIndividualDpForms;
