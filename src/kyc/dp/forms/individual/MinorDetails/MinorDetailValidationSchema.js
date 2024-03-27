import React from "react";
import * as Yup from "yup";

const MinorDetailValidationSchema = Yup.object().shape({
  // birthCertificateNo: Yup.string().required(
  //   "Please enter the birth certificate number"
  // ),
  // birthCertificateDate: Yup.date().when("isMinor", {
  //   is: true,
  //   then: Yup.date().required(
  //     "Please select the birth certificate issued date"
  //   ),
  //   otherwise: Yup.date().notRequired(),
  // }),
  guardianName: Yup.string().required("Please enter the guardian name"),
  relationship: Yup.string().required(
    "Please enter the relationship with the applicant"
  ),
  guardianAddress: Yup.string().required("Please enter the guardian address"),
  guardianProvince: Yup.string().required("Please select the province"),
  guardianDistrict: Yup.string().required("Please select the district"),
  guardianMunci: Yup.string().required("Please select the municipality"),
  guardianWard: Yup.string().required("Please enter the ward number"),
  guardianFax: Yup.string().nullable(),
  guardianEmail: Yup.string()
    .required("Please enter the email address")
    .email("Invalid email address"),
  guardianMob: Yup.string()
    .matches(/^(98|97)\d{8}$/, {
      message: "Mobile number must start with 98 or 97 and have 10 digits",
      excludeEmptyString: true,
    })
    .required("Please enter the mobile number")
    .max(10, "Mobile number must be exactly 10 digits"),
  guardianFinancialStatus: Yup.string().nullable(),
});

export default MinorDetailValidationSchema;
