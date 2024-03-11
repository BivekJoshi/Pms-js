import { useFormik } from "formik";
import useBasicIndividualValidationSchema from "./useBasicIndividualValidationSchema";
import { useAddBasicDetail } from "./BasicDetail/useBasicDetail";

export const useBasicIndividualDpForms = ({ currentForm }) => {
  const { mutate } = useAddBasicDetail({currentForm });
  const formik = useFormik({
    initialValues: {
      fname: "",
      mname: "",
      lname: "",
      fnameNep: "",
      mnameNep: "",
      lnameNep: "",
      gender: "",
      countryCd: "",
      panNo: "",
      dob: "",
      isMinor: false,
      isDiffrentlyAbled: false,
      isNrn: false,
    },
    validationSchema: useBasicIndividualValidationSchema,
    onSubmit: (values) => {
      const formData = { ...values };
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });

  return { formik };
};
