import React from "react";
import * as Yup from "yup";

const MinorDetailValidationSchema = Yup.object().shape({
  isMinor: Yup.boolean().required("Please specify if you are a minor"),
  details: Yup.array().of(
    Yup.object().shape({
      birthCertificateNo: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string().required(
          "Please enter the birth certificate number"
        ),
        otherwise: Yup.string().notRequired(),
      }),
      birthCertificateDate: Yup.date().when("isMinor", {
        is: true,
        then: Yup.date().required(
          "Please select the birth certificate issued date"
        ),
        otherwise: Yup.date().notRequired(),
      }),
      guardianName: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string().required("Please enter the guardian name"),
        otherwise: Yup.string().notRequired(),
      }),
      relationship: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string().required(
          "Please enter the relationship with the applicant"
        ),
        otherwise: Yup.string().notRequired(),
      }),
      guardianAddress: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string().required("Please enter the guardian address"),
        otherwise: Yup.string().notRequired(),
      }),
      guardianProvince: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string().required("Please select the province"),
        otherwise: Yup.string().notRequired(),
      }),
      guardianDistrict: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string().required("Please select the district"),
        otherwise: Yup.string().notRequired(),
      }),
      guardianMunci: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string().required("Please select the municipality"),
        otherwise: Yup.string().notRequired(),
      }),
      guardianWard: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string().required("Please enter the ward number"),
        otherwise: Yup.string().notRequired(),
      }),
      guardianFax: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string().required("Please enter the fax number"),
        otherwise: Yup.string().notRequired(),
      }),
      guardianEmail: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string()
          .required("Please enter the email address")
          .email("Invalid email address"),
        otherwise: Yup.string().notRequired(),
      }),
      guardianMob: Yup.string().when("isMinor", {
        is: true,
        then: Yup.string()
          .required("Please enter the mobile number")
          .matches(/^[0-9]+$/, "Mobile number must contain only digits")
          .min(10, "Mobile number must be at least 10 characters")
          .max(21, "Mobile number can be at most 21 characters"),
        otherwise: Yup.string().notRequired(),
      }),
    })
  ),
});

export default MinorDetailValidationSchema;
