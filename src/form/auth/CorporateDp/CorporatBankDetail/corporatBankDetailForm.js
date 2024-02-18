import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const corporatBankDetailFormValidationSchema = Yup.object().shape({
  bankName: Yup.string().required("Please enter bank name"),
  accountNumber: Yup.string().required("Please enter account number"),
  accountType: Yup.string().required("Please enter account type"),
  branchAddress: Yup.string().required("Please enter branch address"),
});

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
      console.log("hiiiiiiiiiii", values);
      handleSubmit(values);
      setLoading(true);
      resetForm();
    },
  });
  return { formik, loading };
};
