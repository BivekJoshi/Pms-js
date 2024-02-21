import { useFormik } from "formik";

export const useDocumentForm = () => {
  const formik = useFormik({
    initialValues: {
      documentType: "",
    },
    onSubmit: (value) => {
      console.log(value,"Valuesssssssssssssssssssss");
    },
  });
  return { formik };
};
