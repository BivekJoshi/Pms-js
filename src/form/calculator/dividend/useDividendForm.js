import { useFormik } from "formik";

export const useDividendForm = () => {
  const formik = useFormik({
    initialValues: {
        shareQuantity: "",
        bonusDividend: "",
        cashDividend: "",
        paidUpValue:"",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return {
    formik,
  };
};
