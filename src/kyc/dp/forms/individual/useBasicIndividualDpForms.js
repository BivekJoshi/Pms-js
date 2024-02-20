import { useEffect, useState } from "react";
import { useFormik } from "formik";

export const useBasicIndividualDpForms = () => {
  const formik = useFormik({
    initialValues: {
      isNrn: false,
      firstName: "",
      middleName: "",
      lastName: "",
      clientNameNepali: "",
      gender: "",
      dob: "",
      isMinor: false,
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
