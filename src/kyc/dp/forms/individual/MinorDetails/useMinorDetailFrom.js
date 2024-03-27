import React, { useState } from "react";
import { useFormik } from "formik";
import MinorDetailValidationSchema from "./MinorDetailValidationSchema";
import { useAddGuardian } from "../../../../../hooks/Kyc/individual/GuardianDetail/useGuardianDetail";

const useMinorDetailFrom = () => {
  const { mutate } = useAddGuardian({});
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
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
      guardianFinancialStatus: "",
    },
    validationSchema: MinorDetailValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = { ...values };
      mutate(formData, {
        onSuccess: () => {
          formik.resetForm();
          setLoading(true);
        },
      });
    },
  });

  return { formik, loading };
};

export default useMinorDetailFrom;
