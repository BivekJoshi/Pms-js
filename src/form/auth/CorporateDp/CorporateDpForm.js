import React, { useState } from "react";
import { useFormik } from "formik";
import { corporateDpValidationSchema } from "./corporateDpValidationSchema";
// import { useGetCorporateDetails } from "../../../hooks/Kyc/Demat/useDemat";

export const CorporateDpForm = (props) => {
  const [loading, setLoading] = useState(false);
//   const [schema, setSchema] = useState();
  
  const formik = useFormik({
    initialValues: {
      corporateAccountType: "",
      companyName: "",
      companyCeoName: "",
      companySecretaryName: "",
      companyType: "",
      contactNumber: "",
      countryReg: "",
      incorporationDate: "",
      registrationNo: "",
      registrationOffice: "",
      registrationDate: "",
      panNo: "",
      businessType: "",
      workArea: "",
      vatRegistration: "",
      countryReg: "",
      nrbRegistration: "",
      nrbApproval: "",
      isMF: "",
      isSubsidiary: "",
      mainCompanyName: "",
      isListed: "",
      listingDate: "",
    },
    validationSchema: corporateDpValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      setLoading(true);
      resetForm();
    },
  });
  return { formik, loading };
};
