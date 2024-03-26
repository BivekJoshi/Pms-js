import React, { useState } from "react";
import { useFormik } from "formik";
import MinorDetailValidationSchema from "./MinorDetailValidationSchema";

const useMinorDetailFrom = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      birthCertificateNo: "",
      birthCertificateDate: null,
      guardianName: "",
      relationship: "",
      guardianAddress: "",
      guardianProvince: "",
      guardianDistrict: "",
      guardianMunci: "",
      guardianWard: "",
      guardianFax: "",
      guardianEmail: "",
      guardianMob: "",
    },
    validationSchema: MinorDetailValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleSubmit(values);
      setLoading(true);
      resetForm();
    },
  });

  return { formik, loading };
};

export default useMinorDetailFrom;
