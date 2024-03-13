import React, { useState } from "react";
import corporatOwnershipDetailsValidationSchema from "./corporatOwnershipDetailsValidationSchema";
import { useFormik } from "formik";
import { useAddBodCorporate } from "../../../../hooks/Kyc/corporate/BodCorporate/useBodCorporate";

export const corporatOwnershipDetailsForm = () => {
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
        },
      ],
      fcpName: "",
      fcpDesignation: "",
      fcpFatherName: "",
      fcpGrandFatherName: "",
      scpName: "",
      scpDesignation: "",
      scpFatherName: "",
      scpGrandFatherName: "",
      trdName: "",
      trdDesignation: "",
      trdFatherName: "",
      trdGrandFatherName: "",
    },
    validationSchema: corporatOwnershipDetailsValidationSchema,
    onSubmit: (values) => {
      const formData = {...values}
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
