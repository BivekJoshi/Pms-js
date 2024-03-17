import React, { useState } from "react";
import corporatOwnershipDetailsValidationSchema from "./corporatOwnershipDetailsValidationSchema";
import { useFormik } from "formik";
import { useAddBodCorporate } from "../../../../hooks/Kyc/corporate/BodCorporate/useBodCorporate";
import { SET_FORM } from "../../../../redux/types/types";
import { nextFormPath } from "../../../../utility/userHelper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const corporatOwnershipDetailsForm = (data) => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useAddBodCorporate({});
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      details: [
        {
          designation: "CEO",
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
        {
          designation: "Secretary",
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
        {
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
      ],
      fcpName: data?.fcpName || "",
      fcpDesignation: data?.fcpDesignation || "",
      fcpFatherName: data?.fcpFatherName || "",
      fcpGrandFatherName: data?.fcpGrandFatherName || "",
      scpName: data?.scpName || "",
      scpDesignation: data?.scpDesignation || "",
      scpFatherName: data?.scpFatherName || "",
      scpGrandFatherName: data?.scpGrandFatherName || "",
      trdName: data?.trdName || "",
      trdDesignation: data?.trdDesignation || "",
      trdFatherName: data?.trdFatherName || "",
      trdGrandFatherName: data?.trdGrandFatherName || "",
    },
    validationSchema: corporatOwnershipDetailsValidationSchema,
    onSubmit: (values) => {
      const formData = { ...values };
      if (formik.dirty) {
        mutate(formData, {
          onSuccess: (data) => {
            formik.resetForm();
            setLoading(true);
          },
        });
      }
      dispatch({ type: SET_FORM, payload: 8 })
      navigate(nextFormPath(8))
    },
  });
  return { formik, loading };
};
