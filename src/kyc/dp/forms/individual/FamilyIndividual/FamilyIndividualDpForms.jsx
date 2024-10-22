import React from "react";
import { Grid, Button, Typography, useTheme } from "@mui/material";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { nanoid } from "nanoid";
import { FieldArray, FormikProvider } from "formik";
import { useKycFamilyForm } from "./usekycFamilyForm";
import {  useSelector } from "react-redux";
import { useGetFamily } from "../../../../../hooks/kyc/family/useFamily";
import MarriedFamilyTable from "./MarriedFamilyTable";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useKycNavigation from "../../../../hooks/useKycNavigation";

const FamilyIndividualDpForms = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { nextFormPath, previousFormPath } = useKycNavigation();

  const { data: familyData } = useGetFamily();
  const { formik } = useKycFamilyForm({ familyData });

  const language = useSelector((state) => state?.language?.mode);

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

  const handleChangeDD = (e, value) => {
    const fieldIndex = e.target.id.split("-")[0].split(".")[1];
    formik.setFieldValue(
      `marriedDetail[${fieldIndex}].relationTypeDesc`,
      value.relationTypeDesc
    );
    formik.setFieldValue(`marriedDetail[${fieldIndex}].value`, value.value);
    formik.setFieldValue(
      `marriedDetail[${fieldIndex}].relationTypeId`,
      value.relationTypeId
    );
    formik.setFieldValue(
      `marriedDetail[${fieldIndex}].relationTypeDescNp`,
      value.relationTypeDescNp
    );
  };

  const MarriedCase = [
    {
      name: "relation",
      label: "Relation",
      type: "dropDown",
      customOnChange: handleChangeDD,
      options: [
        {
          id: 1,
          value: "SP",
          label: "Spouse",
          relationTypeId: "SP",
          relationTypeDesc: "Spouse",
          relationTypeDescNp: "",
        },
        {
          id: 2,
          value: "FL",
          label: "Father In Law's",
          relationTypeId: "FL",
          relationTypeDesc: "Father In Law's",
          relationTypeDescNp: "",
        },
        {
          id: 3,
          value: "ML",
          label: "Mother In Law's",
          relationTypeId: "ML",
          relationTypeDesc: "Mother In Law's",
          relationTypeDescNp: "",
        },
        {
          id: 4,
          value: "SON",
          label: "Son",
          relationTypeId: "SON",
          relationTypeDesc: "Son",
          relationTypeDescNp: "",
        },
        {
          id: 5,
          value: "DL",
          label: "Daughter In Law's ",
          relationTypeId: "DL",
          relationTypeDesc: "Daughter In Law's",
          relationTypeDescNp: "",
        },
        {
          id: 6,
          value: "DG",
          label: "Daughter",
          relationTypeId: "DG",
          relationTypeDesc: "Daughter",
          relationTypeDescNp: "",
        },
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
  ];

  const handleBack = () => {
    navigate(previousFormPath());
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
      <Grid display="flex">
        {" "}
        <RenderInput
          inputField={[
            {
              name: "isMarried",
              label: "Are You Married?",
              type: "switch",
              id: nanoid(),
              sm: 12,
              display: "flex",
              direction: "column",
              align: "start",
            },
          ]}
          formik={formik}
        />
      </Grid>

      <Grid>
        <FormikProvider value={formik} {...formik}>
          <FieldArray
            name="marriedDetail"
            render={(arrayHelpers) => {
              return formik?.values?.marriedDetail?.map(
                (marriedDetail, index) => {
                  const marriedField = MarriedCase?.map((d) => {
                    return {
                      ...d,
                      name:
                        d.type === "dropDown"
                          ? `marriedDetail.${index}.relationTypeId`
                          : `marriedDetail.${index}.[personDetail].${d.name}`,
                    };
                  });

                  return (
                    <>
                      {formik.values.isMarried && (
                        <>
                          <MarriedDetails
                            key={index + marriedDetail?.relationTypeDesc}
                            // name={
                            //   language === "EN"
                            //     ? marriedDetail?.relationTypeDesc
                            //     : marriedDetail?.relationTypeDescNp
                            // }
                            renderItems={
                              <RenderInput
                                inputField={marriedField}
                                formik={formik}
                                index={index}
                                isFieldArray={true}
                                fieldArrayName="marriedDetail"
                              />
                            }
                          />
                          <Grid
                            display="flex"
                            gap={2}
                            flexDirection="row"
                            justifyContent="end"
                            mt={2}
                            mb={2}
                          >
                            <Button
                              onClick={() => arrayHelpers.push()}
                              disabled={
                                index !== formik.values.marriedDetail.length - 1
                              }
                              variant="outlined"
                              color="secondary"
                            >
                              {t("+ Add")}
                            </Button>

                            <Button
                              onClick={() => {
                                arrayHelpers.remove(index);
                              }}
                              disabled={index === 0}
                              variant="outlined"
                              style={{ color: "red", border: "1px solid red" }}
                            >
                              Remove
                            </Button>
                          </Grid>
                        </>
                      )}
                    </>
                  );
                }
              );
            }}
          />
        </FormikProvider>
      </Grid>

      {/* <MarriedFamilyTable formik={formik} /> */}
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
const MarriedDetails = ({ renderItems, key }) => {
  return (
    <Grid item sm={12} md={12} key={key}>
      {renderItems}
    </Grid>
  );
};

export default FamilyIndividualDpForms;
