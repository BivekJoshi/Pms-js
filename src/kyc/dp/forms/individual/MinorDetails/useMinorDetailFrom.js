import React, { useState } from "react";
import { useFormik } from "formik";
import MinorDetailValidationSchema from "./MinorDetailValidationSchema";
import { useAddGuardian } from "../../../../../hooks/Kyc/individual/GuardianDetail/useGuardianDetail";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useKycNavigation from "../../../../hooks/useKycNavigation";
import { SET_FORM } from "../../../../../redux/types/types";

const useMinorDetailFrom = ({ guardianDetail }) => {
  const dispatch = useDispatch();
  const { mutate } = useAddGuardian({});
  const { nextFormPath } = useKycNavigation();

  const navigate = useNavigate();
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

      if (formik.isValid) {
        dispatch({ type: SET_FORM, payload: 2 });
        navigate(nextFormPath());
      }
    },
  });

  return { formik, loading };
};

export default useMinorDetailFrom;
