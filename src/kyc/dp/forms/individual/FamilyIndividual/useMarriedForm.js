import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const personDetailSchema = Yup.object().shape({
  relation: Yup.string().required("Required"),
  fname: Yup.string().required("Required"),
  mname: Yup.string().nullable(),
  lname: Yup.string().required("Required"),
});
export const useMarriedForm = (props) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      isMarried: false,
      relation: "",
      fname: "",
      mname: "",
      lname: "",
    },
    validationSchema: personDetailSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      setLoading(true);
      resetForm();
    },
  });
  return { formik, loading };
};
