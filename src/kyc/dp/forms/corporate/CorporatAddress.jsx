import React from "react";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { nanoid } from "@reduxjs/toolkit";
import { COUNTRIES, PROVINCE } from "../../../../utility/kycData";
import { corporatAddressForm } from "../../../../form/auth/CorporateDp/CorporatAddress/corporatAddressForm";
import { Button, Grid } from "@mui/material";

const CorporatAddress = () => {
  const { formik, loading } = corporatAddressForm();
  const AddressFields = [
    {
      name: "country",
      label: "Country (देश)",
      type: "dropDown",
      placeholder: "Select country",
      required: "Please select country",
      col: 12,
      sm: 4,
      options: [{ value: "Nepal", label: "Nepal" }],
      id: nanoid(),
    },
    {
      name: "province",
      label: "Province (प्रदेश)",
      type: "dropDown",
      placeholder: "Select province",
      required: "Please select province",
      col: 12,
      sm: 4,
      options: PROVINCE,
      id: nanoid(),
      onChangeClearValue: ["district", "municipality"],
    },
    {
      name: "district",
      label: "District (जिल्ला)",
      type: "dropDown",
      placeholder: "Select district",
      required: "Please select district",
      col: 12,
      sm: 4,
      mapId: "district",
      options: [],
      id: nanoid(),
      watchFor: "province",
      dependentAction: {
        fetch: true,
        api: "/utility/district?province=#",
        method: "GET",
        staticField: "PROVINCE",
      },
      onChangeClearValue: ["municipality"],
    },
    {
      name: "municipality",
      label:
        "Rural Municipality/Municipality/Sub Metropolitan City/Metropolitan City (गा.पा/न.पा/ उ.म .न.पा / म.न .पा)",
      type: "dropDown",
      placeholder:
        "Select rural municipality/municipality/sub metropolitan city/metropolitan city",
      required:
        "Please select rural municipality/municipality/sub metropolitan city/metropolitan city",
      col: 12,
      mapId: "municipality",
      options: [],
      sm: 4,
      id: nanoid(),
      watchFor: "district",
      dependentAction: {
        fetch: true,
        api: "/utility/municipal?district=#",
        method: "GET",
      },
    },
    {
      name: "wordNo",
      label: "Ward No. (वडा नं.)",
      type: "number",
      placeholder: "Enter ward number",
      required: "Please enter ward number",
      col: 12,
      sm: 4,
      maxLength: 2,
      id: nanoid(),
    },
    {
      name: "tole",
      label: "Tole (टोल)",
      type: "text",
      placeholder: "Enter tole",
      required: "Please enter tole",
      col: 12,
      sm: 4,
      id: nanoid(),
      maxLength: 75,
    },
    {
      name: "streetNo",
      label: "House Number (घर नम्बर)",
      type: "text",
      placeholder: "Enter house number",
      col: 12,
      sm: 4,
      id: nanoid(),
      maxLength: 10,
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
      label: "Telephone number (टेलिफोन नम्बर)",
      type: "number",
      placeholder: "Enter telephone number",
      col: 12,
      sm: 4,
      minLength: 7,
      maxLength: 9,
      id: nanoid(),
    },
    {
      name: "email",
      label: "Email Address (इ-मेल ठेगाना)",
      type: "text",
      placeholder: "Enter email address",
      required: "Please enter email address",
      col: 12,
      sm: 4,
      id: nanoid(),
      maxLength: 254,
    },
    {
      name: "website",
      label: "Website (वेबसाइट)",
      type: "text",
      placeholder: "Enter website",
      col: 12,
      sm: 4,
      id: nanoid(),
    },
    // {
    //   name: "latitude",
    //   label: "Latitude",
    //   type: "longLat",
    //   col: 12,
    //   sm: 4,
    //   maxLength: 30,
    //   id: nanoid(),
    //   able: true,
    //   required: "Please choose location",
    // },
    // {
    //   name: "longitude",
    //   label: "Longitude",
    //   type: "longLat",
    //   col: 12,
    //   sm: 4,
    //   maxLength: 30,
    //   id: nanoid(),
    //   able: true,
    //   required: "Please choose location",
    // },
    // {
    //   name: "location",
    //   label: "Choose Your Location",
    //   type: "map",
    //   col: 12,
    //   sm: 12,
    //   id: nanoid(),
    //   setValueField: ["longitude", "latitude"],
    // },
    // {
    //   name: "have_different_permanent_address",
    //   label:
    //     "Do you have different Temporary Address? (के तपाइँको फरक अस्थायी ठेगाना छ?)",
    //   type: "switch",
    //   col: 12,
    //   id: nanoid(),
    //   dependentAction: {
    //     type: "HIDDEN",
    //     condition: "index",
    //     value: 1,
    //   },
    // },
  ];
  const NrNAddressFields = [
    {
      name: "country",
      label: "Country (देश)",
      type: "select",
      placeholder: "Select country",
      required: "Please select country",
      col: 12,
      sm: 4,
      options: COUNTRIES,
      id: nanoid(),
    },
    {
      name: "province",
      label: "State (राज्य)",
      type: "text",
      placeholder: "Enter state",
      required: "Please enter state",
      col: 12,
      sm: 4,
      id: nanoid(),
    },
    {
      name: "district",
      label: "City (सहर)",
      type: "text",
      placeholder: "Enter city",
      required: "Please enter city",
      col: 12,
      sm: 4,
    },
    {
      name: "municipality",
      label: "Street Name (बाटोको नाम)",
      type: "text",
      placeholder: "Enter street name",
      required: "Please enter street name",
      col: 12,

      sm: 4,
      id: nanoid(),
    },
    {
      name: "streetNo",
      label: "House Number (घर नम्बर)",
      type: "text",
      placeholder: "Enter house number",
      required: "Please enter house number",
      col: 12,
      sm: 4,
      maxLength: 10,
      id: nanoid(),
    },

    {
      name: "mobileNo",
      label: "Mobile Number (मोबाइल नम्बर)",
      type: "number",
      placeholder: "Enter mobile number",
      required: "Please enter mobile number",
      col: 12,
      sm: 4,
      id: nanoid(),
    },
    {
      name: "telephoneNo",
      label: "Telephone number (टेलिफोन नम्बर)",
      type: "number",
      placeholder: "Enter telephone number",
      col: 12,
      sm: 4,
      id: nanoid(),
    },
    {
      name: "email",
      label: "Email Address (इ-मेल ठेगाना)",
      type: "email",
      placeholder: "Enter email address",
      required: "Please enter email address",
      col: 12,
      sm: 4,
      id: nanoid(),
      maxLength: 254,
    },
    {
      name: "website",
      label: "Website (वेबसाइट)",
      type: "text",
      placeholder: "Enter website",
      col: 12,
      sm: 4,
      id: nanoid(),
    },
    // {
    //   name: "latitude",
    //   label: "Latitude",
    //   type: "longLat",
    //   col: 12,
    //   sm: 4,
    //   maxLength: 30,
    //   id: nanoid(),
    //   able: true,
    //   required: "Please choose location",
    // },
    // {
    //   name: "longitude",
    //   label: "Longitude",
    //   type: "longLat",
    //   col: 12,
    //   sm: 4,
    //   maxLength: 30,
    //   id: nanoid(),
    //   able: true,
    //   required: "Please choose location",
    // },
    // {
    //   name: "location",
    //   label: "Choose Your Location",
    //   type: "map",
    //   col: 12,
    //   sm: 12,
    //   id: nanoid(),
    //   setValueField: ["longitude", "latitude"],
    // },
    // {
    //   name: "have_different_permanent_address",
    //   label:
    //     "Do you have different Temporary Address? (के तपाइँको फरक अस्थायी ठेगाना छ?)",
    //   type: "switch",
    //   col: 12,
    //   id: nanoid(),
    //   dependentAction: {
    //     type: "HIDDEN",
    //     condition: "index",
    //     value: 1,
    //   },
    // },
  ];
  return (
    <div>
      {AddressFields ? (
        <form onSubmit={formik.handleSubmit}>
          <Grid align="center">
            <Grid align="center">
              <RenderInput inputField={AddressFields} formik={formik} />
            </Grid>

            <Button type={"submit"}>Save</Button>
          </Grid>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid align="center">
            <Grid align="center">
              <RenderInput inputField={NrNAddressFields} formik={formik} />
            </Grid>
            <Button type={"submit"}>Save</Button>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default CorporatAddress;
