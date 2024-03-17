import { useFormik } from "formik";
import React from "react";

const useCorporateDetailsForm = () => {
  const formik = useFormik({
    initialValues: { isListed: false, isSubsidiary: false, isMF: false },
    // validationSchema: schema,
    onSubmit: (values) => {
      
    },
  });
  return {
    formik,
  };
};

export default useCorporateDetailsForm;
