import { useFormik } from "formik";
import * as Yup from "yup";
import { fullnameRegex } from "../static/RegExp";

const basicSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string().matches(fullnameRegex, "Please enter valid middle name"),
  lastName: Yup.string().required("Last Name is required"),
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
