import { useFormik } from "formik";
import * as Yup from "yup";
import { ageREgex, citizenExp, emailRegex, fullnameRegex, numberRegExp1, phoneRegExp } from "../../static/RegExp";

const NomineeSchema = Yup.object().shape({
  name: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .required("Please enter full name")
      .matches(fullnameRegex, "Please enter valid name"),
    otherwise: Yup.string().nullable(),
  }),
  fatherName: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .required("Please enter father's name")
      .matches(fullnameRegex, "Please enter valid father name"),
    otherwise: Yup.string().nullable(),
  }),
  grandfatherName: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .required("Please enter grandfather's name")
      .matches(
        fullnameRegex,
        "Grandfather name must not include any number or special character"
      ),
    otherwise: Yup.string().nullable(),
  }),
  citizenShipNo: Yup.string().when("haveNominee", {
    is: true,
    then: Yup.string()
      .required("Please enter citizenship number")
      .matches(citizenExp, "Citizenship number must be a number"),
    otherwise: Yup.string().nullable(),
  }),
  address: Yup.string().when('haveNominee', {
    is: true,
    then: Yup
      .string()
      .required('Please enter correspondence address'),
    otherwise: Yup.string().nullable(),
  }),
  age: Yup.string().when('haveNominee', {
    is: true,
    then: Yup
      .string()
      .required('Please enter age')
      .matches(ageREgex, 'Please enter valid age'),
    otherwise: Yup.string().nullable(),
  }),
  placeOfIssue: Yup.string().when('haveNominee', {
    is: true,
    then: Yup
      .string()
      .required('Please select citizenship issued place'),
    otherwise: Yup.string().nullable(),
  }),
//   issuedDate: Yup.mixed().when('haveNominee', {
//     is: true,
//     then: momentDateSchema.required('Please select registration date'),
//     otherwise: Yup.mixed().nullable(),
//   }),
  relation: Yup.string().when('haveNominee', {
    is: true,
    then: Yup
      .string()
      .required('Please enter relation'),
    otherwise: Yup.string().nullable(),
  }),
  country: Yup.string().when('haveNominee', {
    is: true,
    then: Yup
      .string()
      .typeError('Please select country')
      .required('Please select country'),
    otherwise: Yup.string().nullable(),
  }),
  province: Yup.string().when('haveNominee', {
    is: true,
    then: Yup
      .string()
      .required('Please select province'),
    otherwise: Yup.string().nullable(),
  }),
  district: Yup.string().when('haveNominee', {
    is: true,
    then: Yup
      .string()
      .required('Please select district'),
    otherwise: Yup.string().nullable(),
  }),
  municipality: Yup.string().when('haveNominee', {
    is: true,
    then: Yup
      .string()
      .required(
        'Please select rural municipality/municipality/sub metropolitan city/metropolitan city'
      ),
    otherwise: Yup.string().nullable(),
  }),
  mobileNo: Yup.string().when('haveNominee', {
    is: true,
    then: Yup
      .string()
      .matches(phoneRegExp, 'Enter valid mobile number')
      .required('Please enter mobile number'),
    otherwise: Yup.string().nullable(),
  }),
  email: Yup.string().when("haveNominee", {
    is: true,
    then: Yup
      .string()
      .email("Please enter a valid email")
      .matches(emailRegex, "Please enter valid email")
      .required("Please enter email address"),
    otherwise: Yup.string().nullable(),
  }),
  panNo: Yup
  .string()
  .min(0)
  .nullable(true)
  .matches(numberRegExp1, "PAN number must be a number")
  .notRequired(),
});

export const useNomineeForm = () => {
  const formik = useFormik({
    initialValues: {
      id: "",
      userId: "",
      citizenShipNo: "",
      address: "",
      fatherName: "",
      grandfatherName: "",
      placeOfIssue: "",
      name: "",
      relation: "",
      country: "",
      province: "",
      district: "",
      municipality: "",
      telephoneNo: "",
      mobileNo: "",
      panNo: "",
      email: "",
      fax: "",
      age: "",
      issuedDate: "",
      haveNominee: false,
    },
    validationSchema: NomineeSchema,
    onSubmit: (value) => {
      console.log(value, "nominee Valueee");
    },
  });
  return { formik };
};
