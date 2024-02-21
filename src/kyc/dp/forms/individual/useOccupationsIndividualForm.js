import { useEffect, useState } from "react";
import { useFormik } from "formik";

export const useOccupationsIndividualForm = () => {
  const formik = useFormik({
    initialValues: {
      occupation: "",
      orgName: "",
      address: "",
      employeeId: "",
      designation: "",
      effectiveFrom: "",
      financialDetails: "",
      sourceOfIncome: "",
      blackListed: false,
      tradingAccount: false,
      involvementInOtherCompany: false,
    },
    onSubmit: (values) => {
      //   setLoading(true);
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    console.log(values, "values");
    // mutate({ values }, { onSettled: () => setLoading(false) });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleRegister,
    formik,
    // loading,
    handleMouseDownPassword,
  };
};
