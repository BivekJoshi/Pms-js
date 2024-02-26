import { useFormik } from "formik";
import * as Yup from "yup";
import {onlyTextRegex } from "../static/RegExp";

// const basicSchema = Yup.object().shape({
//   firstName: Yup.string().required("First Name is required").matches(onlyTextRegex, "Please enter valid middle name"),
//   middleName: Yup.string().matches(onlyTextRegex, "Please enter valid middle name"),
//   lastName: Yup.string().required("Last Name is required").matches(onlyTextRegex, "Please enter valid middle name"),
//   dob: Yup.string().required("Date of Birth is required"),
//   gender: Yup.string().required("Gender is required"),
// });

export const useBasicIndividualDpForms = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      clientNameNepali: "",
      gender: "",
      dob: "",
      isNrn: false,
      isMinor: false,
    },
    // validationSchema: basicSchema,
    onSubmit: (values) => {
      console.log(values, "Valueee");
    },
  });

  return { formik };
};
