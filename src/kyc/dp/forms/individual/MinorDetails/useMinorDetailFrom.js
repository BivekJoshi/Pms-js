import React, { useState } from "react";
import { useFormik } from "formik";
import MinorDetailValidationSchema from "./MinorDetailValidationSchema";
import { useAddGuardian } from "../../../../../hooks/Kyc/individual/GuardianDetail/useGuardianDetail";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { SET_FORM } from "../../../../../redux/types/types";
import useKycNavigation from "../../../../hooks/useKycNavigation";

const useMinorDetailFrom = ({ guardianDetail }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nextFormPath } = useKycNavigation();
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
      dispatch({ type: SET_FORM, payload: 3 });
      navigate(nextFormPath());
    },
  });

  return { formik, loading };
};

export default useMinorDetailFrom;
