import React, { useState } from "react";
import { useFormik } from "formik";
import corporatBankDetailFormValidationSchema from "./corporatBankDetailFormValidationSchema";


export const corporatBankDetailForm = (props) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      bankName: "",
      accountNumber: "",
      accountType: "",
      branchAddress: "",
    },
    validationSchema: corporatBankDetailFormValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      setLoading(true);
      resetForm();
    },
  });
  return { formik, loading };
};
