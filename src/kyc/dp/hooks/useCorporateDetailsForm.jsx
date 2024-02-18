import { useFormik } from "formik";
import React from "react";

const useCorporateDetailsForm = () => {
  const formik = useFormik({
    initialValues: {},
    // validationSchema: schema,
    onSubmit: (values) => {
      console.log("🚀 ~ useCorporateDetailsForm ~ values:", values);
    },
  });
  return {
    formik,
  };
};

export default useCorporateDetailsForm;
