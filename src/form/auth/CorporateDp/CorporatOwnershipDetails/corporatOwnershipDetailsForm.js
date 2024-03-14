import React, { useState } from "react";
import corporatOwnershipDetailsValidationSchema from "./corporatOwnershipDetailsValidationSchema";
import { useFormik } from "formik";
import { useAddBodCorporate } from "../../../../hooks/Kyc/corporate/BodCorporate/useBodCorporate";

export const corporatOwnershipDetailsForm = (data) => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useAddBodCorporate({});

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
      const formData = { ...values }
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
          setLoading(true);
        },
      });
    },
  });
  return { formik, loading };
};
