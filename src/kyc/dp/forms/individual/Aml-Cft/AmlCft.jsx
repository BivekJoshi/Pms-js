import React, { useState } from "react";
import { Grid, Button, useTheme, Typography, Box, Switch } from "@mui/material";
import { useAmlCftForm } from "./useAmlCftForm";
import { nanoid } from "nanoid";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { useTranslation } from "react-i18next";
import { FieldArray, FormikProvider } from "formik";
import { DISTRICTS, PROVINCE_OPTIONS } from "../basicInputData";

const beneficialOwnerField = [
  {
    name: "name",
    label: "Full Name of Nominee",
    type: "text",
    placeholder: "Enter nominee's full name",
    required: "Please enter nominee's name",
    col: 12,
    sm: 4,
    id: nanoid(),
    maxLength: 75,
  },
  {
    name: "relation",
    label: "Relation",
    type: "text",
    placeholder: "Enter relation",
    required: "Please enter relation",
    col: 12,
    sm: 4,
    id: nanoid(),
    maxLength: 75,
  },
  {
    name: "citizenShipNo",
    label: "CitizenShip Number",
    type: "text",
    placeholder: "Enter nominee's citizenship number",
    required: "Please enter nominee's citizenship number",
    col: 12,
    sm: 4,
    id: nanoid(),
    maxLength: 20,
  },
  {
    name: "placeOfIssue",
    label: "Place of Issue",
    type: "dropDown",
    placeholder: "Select nominee's place of issue",
    col: 12,
    sm: 4,
    options: DISTRICTS,
    id: nanoid(),
  },
  {
    name: "age",
    label: "Age (उमेर)",
    type: "number",
    placeholder: "Enter nominee's age",
    required: "Please enter nominee's age",
    col: 12,
    minLength: 1,
    maxLength: 3,
    sm: 4,
    id: nanoid(),
  },
  {
    name: "country",
    label: "Country (देश)",
    type: "dropDown",
    placeholder: "Select nominees country",
    required: "Please select nominees country",
    col: 12,
    sm: 4,
    options: [
      {
        value: "Nepal",
        label: "Nepal",
      },
    ],
    id: nanoid(),
  },
  {
    name: "province",
    label: "Province (प्रदेश)",
    type: "dropDown",
    placeholder: "Select nominee's province",
    required: "Please select nominee's province",
    col: 12,
    sm: 4,
    options: PROVINCE_OPTIONS,
    id: nanoid(),
  },
  {
    name: "district",
    label: "District (जिल्ला)",
    type: "dropDown",
    placeholder: "Select nominee's district",
    required: "Please select nominee's district",
    col: 12,
    sm: 4,
    options: [],
    id: nanoid(),
  },
  {
    name: "municipality",
    label:
      "Rural Municipality/Municipality/Sub Metropolitan City/Metropolitan City",
    type: "dropDown",
    placeholder:
      "Select nominees rural municipality/municipality/sub metropolitan city/metropolitan city",
    required:
      "Please select nominees rural municipality/municipality/sub metropolitan city/metropolitan city",
    col: 12,
    sm: 4,
    mapId: "municipality",
    options: [],
    id: nanoid(),
  },
  {
    name: "correspondenceAddress",
    label: "Address (ठेगाना)",
    type: "text",
    placeholder: "Enter address",
    required: "Please enter address",
    col: 12,
    sm: 4,
    id: nanoid(),
    maxLength: 100,
  },
  {
    name: "mobileNo",
    label: "Mobile Number (मोबाइल नम्बर)",
    type: "number",
    placeholder: "Enter mobile number",
    required: "Please enter mobile number",
    col: 12,
    sm: 4,
    maxLength: 21,
    minLength: 10,
    id: nanoid(),
  },
  {
    name: "telephoneNo",
    label: "Phone Number (फोन नम्बर)",
    type: "number",
    placeholder: "Enter phone number",
    col: 12,
    sm: 4,
    minLength: 7,
    maxLength: 9,
    id: nanoid(),
  },
  {
    name: "faxNo",
    label: "Fax Number (फ्याक्स नम्बर)",
    type: "text",
    placeholder: "Enter fax number ",
    col: 12,
    sm: 4,
    id: nanoid(),
    maxLength: 30,
  },
  {
    name: "panNo",
    label: "PAN Number (प्यान नम्बर)",
    type: "text",
    placeholder: "Enter PAN number",
    col: 12,
    minLength: 9,
    maxLength: 9,
    sm: 4,
    id: nanoid(),
    maxLength: 10,
  },
  {
    name: "email",
    label: "Email Address (इ-मेल ठेगाना)",
    type: "text",
    placeholder: "Enter nominees email address",
    col: 12,
    sm: 4,
    id: nanoid(),
    maxLength: 254,
  },
];

const politicalField = [
  {
    name: "name",
    type: "text",
    label: "Name",
    col: 12,
    sm: 4,
    id: nanoid(),
  },
  {
    name: "relation",
    type: "text",
    label: "Relation",
    col: 12,
    sm: 4,
    id: nanoid(),
  },
];
const criminalField = [
  {
    name: "name",
    type: "text",
    label: "Name",
    col: 12,
    sm: 4,
    id: nanoid(),
  },
];

const AmlCft = () => {
  const theme = useTheme();
  const { formik } = useAmlCftForm();
  const { t } = useTranslation();

  // State variables to control the visibility of array fields
  const [showPolitical, setShowPolitical] = useState(false);
  const [showCriminal, setShowCriminal] = useState(false);
  const [showBeneficialOwner, setShowBeneficialOwner] = useState(false); // Default to true

  // Toggle functions to handle switch state changes
  const togglePolitical = () => setShowPolitical(!showPolitical);
  const toggleCriminal = () => setShowCriminal(!showCriminal);
  const toggleBeneficialOwner = () =>
    setShowBeneficialOwner(!showBeneficialOwner);

  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
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
          {t("AML/CFT")}
        </Typography>
      </Box>

      <FormikProvider value={formik} {...formik}>
        <Grid container spacing={2} display="flex" flexDirection="column">
          {/* Switch for Political Affiliation */}
          <>
            <Grid item display={"flex"} alignItems={"center"}>
              <Typography>Political Affiliation</Typography>
              <Switch checked={showPolitical} onChange={togglePolitical} />
            </Grid>
            {showPolitical && (
              <FieldArray name="poliAffiHighRnkRlnName">
                {({ push, remove }) => {
                  return (
                    formik.values.poliAffiHighRnkRlnName &&
                    formik.values.poliAffiHighRnkRlnName.map((item, index) => {
                      const field = politicalField.map((d, i) => {
                        return {
                          ...d,
                          name: `poliAffiHighRnkRlnName?.${index}?.${d?.name}`,
                        };
                      });
                      return (
                        <>
                          <Grid component="form" key={index}>
                            <RenderInput
                              inputField={field}
                              formik={formik}
                              index={index}
                              isFieldArray={true}
                              fieldArrayName="poliAffiHighRnkRlnName"
                              pushArray={() => push({})}
                              removeArray={() => remove()}
                            />
                          </Grid>
                          {formik.values.beneficialOwnerName.length >= 1 && (
                            <Button
                              variant="outlined"
                              color="primary"
                              style={{
                                border: "1px solid #6C49B4",
                                margin: "1rem 1rem 1rem 0",
                                width: "fit-content",
                              }}
                              onClick={() =>
                                push({
                                  relation: "",
                                  name: "",
                                })
                              }
                            >
                              <Typography color={"#6C49B4"} fontWeight={600}>
                                + Add
                              </Typography>
                            </Button>
                          )}
                          {formik.values.poliAffiHighRnkRlnName > 1 && (
                            <Button
                              variant="outlined"
                              color="secondary"
                              style={{
                                border: "1px solid #B4271F",
                                margin: "1rem 0",
                              }}
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              <Typography color="#B4271F" fontWeight={600}>
                                Remove
                              </Typography>
                            </Button>
                          )}
                        </>
                      );
                    })
                  );
                }}
              </FieldArray>
            )}
          </>
          <>
            <Grid item display={"flex"} alignItems={"center"}>
              <Typography>Criminal Affiliation</Typography>
              <Switch checked={showCriminal} onChange={toggleCriminal} />
            </Grid>
            {showCriminal && (
              <FieldArray name="pastCrimiActiDetail">
                {({ push, remove }) => {
                  return (
                    formik.values.pastCrimiActiDetail &&
                    formik.values.pastCrimiActiDetail.map((item, index) => {
                      const field = criminalField.map((d, i) => {
                        return {
                          ...d,
                          name: `pastCrimiActiDetail?.${index}?.${d?.name}`,
                        };
                      });
                      return (
                        <>
                          <Grid component="form" key={index}>
                            <RenderInput
                              inputField={field}
                              formik={formik}
                              index={index}
                              isFieldArray={true}
                              fieldArrayName="pastCrimiActiDetail"
                              pushArray={() => push({})}
                              removeArray={() => remove()}
                            />
                          </Grid>
                          {formik.values.pastCrimiActiDetail.length >= 1 && (
                            <Button
                              variant="outlined"
                              color="primary"
                              style={{
                                border: "1px solid #6C49B4",
                                margin: "1rem 1rem 1rem 0",
                                width: "fit-content",
                              }}
                              onClick={() =>
                                push({
                                  relation: "",
                                  name: "",
                                })
                              }
                            >
                              <Typography color={"#6C49B4"} fontWeight={600}>
                                + Add
                              </Typography>
                            </Button>
                          )}
                          {formik.values.pastCrimiActiDetail > 1 && (
                            <Button
                              variant="outlined"
                              color="secondary"
                              style={{
                                border: "1px solid #B4271F",
                                margin: "1rem 0",
                              }}
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              <Typography color="#B4271F" fontWeight={600}>
                                Remove
                              </Typography>
                            </Button>
                          )}
                        </>
                      );
                    })
                  );
                }}
              </FieldArray>
            )}
          </>
          <>
            <Grid item display={"flex"} alignItems={"center"}>
              <Typography>Beneficial Affiliation</Typography>
              <Switch
                checked={showBeneficialOwner}
                onChange={toggleBeneficialOwner}
              />
            </Grid>

            {showBeneficialOwner && (
              <FieldArray name="beneficialOwnerName">
                {({ push, remove }) => {
                  return (
                    formik.values.beneficialOwnerName &&
                    formik.values.beneficialOwnerName.map((item, index) => {
                      const field = beneficialOwnerField.map((d, i) => {
                        return {
                          ...d,
                          name: `beneficialOwnerName?.${index}?.${d?.name}`,
                        };
                      });

                      return (
                        <>
                          <Grid component="form" key={index}>
                            <RenderInput
                              inputField={field}
                              formik={formik}
                              index={index}
                              isFieldArray={true}
                              fieldArrayName="beneficialOwnerName"
                              pushArray={() => push({})}
                              removeArray={() => remove()}
                            />
                          </Grid>
                        </>
                      );
                    })
                  );
                }}
              </FieldArray>
            )}
          </>
        </Grid>

        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            color="secondary"
          >
            Next
          </Button>
        </Grid>
      </FormikProvider>
    </div>
  );
};

export default AmlCft;
