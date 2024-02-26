import { useFormik } from "formik";

export const useDocumentForm = () => {
  const formik = useFormik({
    initialValues: {
      docType: "",
    },
    onSubmit: (value) => {
      console.log(value,"Valuesssssssssssssssssssss");
    },
  });
  return { formik };
};
