import React, { useState } from "react";
import { useFormik } from "formik";

export const corporatBoStatementForm = (props) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      isStandingInstructionForAutomaticTxn: false,
      accountStatementPeriod: "",
    },
    // validationSchema: corporatBankDetailFormValidationSchema,
    onSubmit: (values) => {
      console.log("hiiiiii", values);
      handleSubmit(values);
      setLoading(true);
      resetForm();
    },
  });
  return { formik, loading };
};
