import * as Yup from "yup";

const useBasicIndividualValidationSchema = Yup.object().shape({
  fname: Yup.string()
    .typeError("Please enter first name")
    .required("Please enter first name"),
  mname: Yup.string().min(0).nullable(true).notRequired(),
  lname: Yup.string()
    .typeError("Please enter last name")
    .required("Please enter last name"),
  fnameNep: Yup.string()
    .transform((value) =>
      value ? value.charAt(0).toUpperCase() + value.slice(1) : value
    )
    .typeError("Please enter first name")
    .required("Please enter first name"),
  mnameNep: Yup.string().min(0).nullable(true),
  lnameNep: Yup.string()
    .transform((value) =>
      value ? value.charAt(0).toUpperCase() + value.slice(1) : value
    )
    .typeError("Please enter last name")
    .required("Please enter last name"),
  gender: Yup.string()
    .typeError("Please select gender")
    .required("Please select gender"),
  dob: Yup.string().required("Please select date of birth"),
  // .test("is-date", "Please select valid date", (value) => {
  //   return moment(value, moment.ISO_8601, true).isValid();
  // }),
  panNo: Yup.string()
    .min(0)
    .nullable(true)
    .matches(/^(?:[0-9\-]+|null|NaN)?$/, "PAN number must be a number")
    .notRequired(),
  countryCd: Yup.string().required("Please select country"),
});
export default useBasicIndividualValidationSchema;
