import React, { useState } from "react";
import corporatOwnershipDetailsValidationSchema from "./corporatOwnershipDetailsValidationSchema";
import { useFormik } from "formik";
import { useAddBodCorporate } from "../../../../hooks/Kyc/corporate/BodCorporate/useBodCorporate";
import { useNavigate } from "react-router-dom";
import useKycNavigation from "../../../../kyc/hooks/useKycNavigation";

export const useCorporatOwnershipDetailsForm = (ownerShipDetail) => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useAddBodCorporate({});
  const navigate = useNavigate();
  const { nextFormPath } = useKycNavigation();
  const detail = ownerShipDetail?.detail;

  const getCEODetails = () => {
    return detail?.find((item) => item.designation === "CEO") || {};
  };
  const getSecretaryDetails = () => {
    return detail?.find((item) => item.designation === "Secretary") || {};
  };
  const fetchEmptyDesignationDetails = () => {
    const emptyDesignationItems = detail?.filter(
      (item) => item.designation !== "CEO" && item.designation !== "Secretary"
    );
    return emptyDesignationItems;
  };
  const ceoDetails = getCEODetails();
  const secretaryDetails = getSecretaryDetails();
  const emptyDetails = fetchEmptyDesignationDetails() ?? [];

  const formik = useFormik({
    initialValues: {
      detail: [
        {
          designation: "CEO",
          firstName: ceoDetails?.firstName || "",
          lastName: ceoDetails?.lastName || "",
          fatherName: ceoDetails?.fatherName || "",
          grandFather: ceoDetails?.grandFather || "",
          spouseName: ceoDetails?.spouseName || "",
          permanentAddress: ceoDetails?.permanentAddress || "",
          currentAddress: ceoDetails?.currentAddress || "",
          telephoneNo: ceoDetails?.telephoneNo || "",
          mobileNo: ceoDetails?.mobileNo || "",
          email: ceoDetails?.email || "",
          panNo: ceoDetails?.panNo || "",
        },
        {
          designation: "Secretary",
          firstName: secretaryDetails?.firstName || "",
          lastName: secretaryDetails?.lastName || "",
          fatherName: secretaryDetails?.fatherName || "",
          grandFather: secretaryDetails?.grandFather || "",
          spouseName: secretaryDetails?.spouseName || "",
          permanentAddress: secretaryDetails?.permanentAddress || "",
          currentAddress: secretaryDetails?.currentAddress || "",
          telephoneNo: secretaryDetails?.telephoneNo || "",
          mobileNo: secretaryDetails?.mobileNo || "",
          email: secretaryDetails?.email || "",
          panNo: secretaryDetails?.panNo || "",
        },
        ...(emptyDetails.length > 0
          ? emptyDetails.map((item) => ({
              designation: item.designation || "",
              firstName: item.firstName || "",
              lastName: item.lastName || "",
              fatherName: item.fatherName || "",
              grandFather: item.grandFather || "",
              spouseName: item.spouseName || "",
              permanentAddress: item.permanentAddress || "",
              currentAddress: item.currentAddress || "",
              telephoneNo: item.telephoneNo || "",
              mobileNo: item.mobileNo || "",
              email: item.email || "",
              panNo: item.panNo || "",
            }))
          : [
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
            ]),
      ],
      fcpName: ownerShipDetail?.fcpName || "",
      fcpDesignation: ownerShipDetail?.fcpDesignation || "",
      fcpFatherName: ownerShipDetail?.fcpFatherName || "",
      fcpGrandFatherName: ownerShipDetail?.fcpGrandFatherName || "",
      scpName: ownerShipDetail?.scpName || "",
      scpDesignation: ownerShipDetail?.scpDesignation || "",
      scpFatherName: ownerShipDetail?.scpFatherName || "",
      scpGrandFatherName: ownerShipDetail?.scpGrandFatherName || "",
      trdName: ownerShipDetail?.trdName || "",
      trdDesignation: ownerShipDetail?.trdDesignation || "",
      trdFatherName: ownerShipDetail?.trdFatherName || "",
      trdGrandFatherName: ownerShipDetail?.trdGrandFatherName || "",
    },
    validationSchema: corporatOwnershipDetailsValidationSchema,
    enableReinitialize: true,
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
      navigate(nextFormPath());
    },
  });
  return { formik, loading };
};
