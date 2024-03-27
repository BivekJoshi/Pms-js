import React, { useState } from "react";
import { useFormik } from "formik";
import MinorDetailValidationSchema from "./MinorDetailValidationSchema";
import { useAddGuardian } from "../../../../../hooks/Kyc/individual/GuardianDetail/useGuardianDetail";

const useMinorDetailFrom = ({ guardianDetail }) => {
  console.log("guardianDetail", guardianDetail);
  const { mutate } = useAddGuardian({});
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      guardianName: guardianDetail?.guardianName || "",
      relationship: guardianDetail?.relationship || "",
      guardianAddress: guardianDetail?.guardianAddress || "",
      guardianProvince: guardianDetail?.guardianProvince || "",
      guardianDistrict: guardianDetail?.guardianDistrict || "",
      guardianMunci: guardianDetail?.guardianMunci || "",
      guardianWard: guardianDetail?.guardianWard || "",
      guardianFax: guardianDetail?.guardianFax || "",
      guardianEmail: guardianDetail?.guardianEmail || "",
      guardianMob: guardianDetail?.guardianMob || "",
      guardianFinancialStatus: guardianDetail?.guardianFinancialStatus || "",
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
