import React from "react";
import { Button, Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { useNomineeForm } from "./useNomineeForm";
import RenderInput from "../../../../../components/renderInput/RenderInput";

const NomineeDpForms = () => {
  const { formik } = useNomineeForm();

  const NOMINEEFIELDS = [
    {
      name: "haveNominee",
      label: "Do you want to keep Nominee Details ? ",
      type: "switchWithFields",
      required: "Please specify whether company is subsidiary or not",
      id: nanoid(),
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
          type: "text",
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

  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <RenderInput inputField={NOMINEEFIELDS} formik={formik} />
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
        >
          Next
        </Button>
      </Grid>
    </form>
  );
};

export default NomineeDpForms;
