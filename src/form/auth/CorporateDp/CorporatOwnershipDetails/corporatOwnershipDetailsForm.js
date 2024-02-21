import React, { useState } from "react";
import corporatOwnershipDetailsValidationSchema from "./corporatOwnershipDetailsValidationSchema";
import { useFormik } from "formik";

export const corporatOwnershipDetailsForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      designation: "",
      firstName: "",
      lastName: "",
      fatherName: "",
      grandFather: "",
      spouseName: "",
      permanentAddress: "",
      currentAddress: "",
      telephoneNo: "",
      mobileNo: "",
      email: "",
      panNo: "",
    },
    validationSchema: corporatOwnershipDetailsValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      setLoading(true);
      resetForm();
    },
  });
  return { formik, loading };
};
