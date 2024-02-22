import { useFormik } from "formik";
import * as Yup from "yup";
import { fullnameRegex } from "../static/RegExp";

const basicSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .matches(fullnameRegex, "Please enter valid first name"),
  middleName: Yup.string().matches(
    fullnameRegex,
    "Please enter valid middle name"
  ),
  lastName: Yup.string()
    .required("Last Name is required")
    .matches(fullnameRegex, "Please enter valid last name"),
});

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
    validationSchema: basicSchema,
    onSubmit: (values) => {
      console.log(values, "Valueee");
    },
  });

  return { formik };
};
