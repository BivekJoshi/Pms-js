import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Formik } from "formik";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useKycFamilyForm } from "../../../../hooks/kyc/individual/family/usekycFamilyForm";

const FamilyIndividualDpForms = () => {
  const { formik } = useKycFamilyForm();
  const FAMILYFIELDS = [
    {
      type: "text",
      name: "relation",
      label: "Relation",
      required: true,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "memberName",
      label: "Referral Name",
      required: true,
      xs: 12,
      sm: 6,
    },
  ];
  const [fields, setFields] = useState([
    {
      type: "text",
      name: "relation",
      label: "Relation",
      required: true,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "memberName",
      label: "Referral Name",
      required: true,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "email",
      label: "Referral Email",
      required: true,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "mobileNumber",
      label: "Referral Mobile Number",
      required: true,
      xs: 12,
      sm: 6,
    },
  ]);

  const handleSubmit = () => {};

  const addField = () => {
    setFields([...fields, ...FAMILYFIELDS]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <RenderInput inputField={fields} formik={formik} />
      <Button onClick={addField} variant="contained" color="primary">
        Add More
      </Button>
    </form>
  );
};

export default FamilyIndividualDpForms;
