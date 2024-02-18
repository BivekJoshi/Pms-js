import { useFormik } from "formik";
import React, { useState } from "react";
import corporatAddressValidationSchema from "./corporatAddressValidationSchema";

export const corporatAddressForm = (props) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      country: "",
      province: "",
      district: "",
      municipality: "",
      wordNo: "",
      tole: "",
      streetNo: "",
      mobileNo: "",
      telephoneNo: "",
      email: "",
      website: "",
      latitude: "",
      longitude: "",
      location: "",
      have_different_permanent_address: false,
    },
    validationSchema: corporatAddressValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      handleSubmit(values);
      setLoading(true);
      resetForm();
    },
  });
  return { formik, loading };
};
