import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { basicData } from "./basicInputData";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useBasicIndividualDpForms } from "./useBasicIndividualDpForms";

const BasicIndividualDpForms = () => {
  const [age, setAge] = useState(null);
  const { formik } = useBasicIndividualDpForms(age);
  useEffect(() => {
    const calculateAge = (dob) => {
      const dobDate = new Date(dob);
      const now = new Date();
      const diff = now - dobDate;
      const ageDate = new Date(diff);

      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    const dob = formik.values.dob;
    if (dob) {
      const personAge = calculateAge(dob);
      setAge(personAge);
    }
  }, [formik.values.dob]);
 
  return (
    <div>
      <Typography
        sx={{
          borderLeft: "2px solid blue",
          paddingLeft: "4px",
          marginBottom: "0.8rem",
        }}
        variant="h4"
      >  
        Basic Information
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <RenderInput inputField={basicData} formik={formik} age={age} />
        </Grid>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default BasicIndividualDpForms;
