import * as Yup from "yup";
import {
  firstName,
  firstNameNep,
  middleName,
  middleNameNep,
  onlyNum,
} from "../static/RegExp";

const useBasicIndividualValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .typeError("First Name is required")
    .matches(
      firstName,
      "First Name cannot contain spaces or special characters"
    )
    .min(3, "First Name must be at least 3 characters")
    .max(25, "First Name must be at most 25 characters")
    .required("First Name is required"),
  middleName: Yup.string()
    .nullable(true)
    .notRequired()
    .matches(middleName, "Middle Name cannot contain special characters")
    .min(3, "Middle Name must be at least 3 characters")
    .max(25, "Middle Name must be at most 25 characters"),
  lastName: Yup.string()
    .typeError("Last Name is required")
    .matches(firstName, "Last Name cannot contain spaces or special characters")
    .required("Last Name is required")
    .min(3, "Last Name must be at least 3 characters")
    .max(25, "Last Name must be at most 25 characters"),
  fNameNep: Yup.string()
    .transform((value) =>
      value ? value.charAt(0).toUpperCase() + value.slice(1) : value
    )
    .matches(
      firstNameNep,
      "First Name cannot contain spaces or special characters"
    )
    .min(2, "Last Name must be at least 2 characters")
    .max(25, "Last Name must be at most 25 characters")
    .typeError("First Name is required")
    .required("First Name is required"),
  mNameNep: Yup.string()
    .nullable(true)
    .matches(middleNameNep, "Middle Name cannot contain special characters")
    .min(2, "Middle Name must be at least 2 characters")
    .max(25, "Middle Name must be at most 25 characters"),
  lNameNep: Yup.string()
    .transform((value) =>
      value ? value.charAt(0).toUpperCase() + value.slice(1) : value
    )
    .matches(
      firstNameNep,
      "Last Name cannot contain spaces or special characters"
    )
    .min(2, "Last Name must be at least 2 characters")
    .max(25, "Last Name must be at most 25 characters")
    .typeError("Last Name is required")
    .required("Last Name is required"),
  gender: Yup.string()
    .typeError("Gender is required")
    .required("Gender is required"),
  dob: Yup.string().required("Please select date of birth"),
  // .test("is-date", "Please select valid date", (value) => {
  //   return moment(value, moment.ISO_8601, true).isValid();
  // }),
  panNo: Yup.string()
    .min(0)
    .max(9, "Pan No. must be at most 9 digits")
    .nullable(true)
    .matches(/^\d{9}$/, "PAN number must be a 9-digit number")
    .notRequired(),
  countryCd: Yup.string().required("Country is required"),
});
export default useBasicIndividualValidationSchema;
