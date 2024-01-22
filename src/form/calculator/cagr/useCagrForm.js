import { useFormik } from "formik";

export const useCagrForm = () => {
  const formik = useFormik({
    initialValues: {
      initialInvestment: "",
      finalInvestment: "",
      durationOfInvestment: "",
    },
    onSubmit: (values) => {
      const FinalPercent =
        (((values?.finalInvestment / values?.initialInvestment) **
          (1 / values?.durationOfInvestment)) -
          1) *
        100;
        formik.setFieldValue("FinalPercent",FinalPercent.toFixed(2))  
    },
  });

  return {
    formik,
  };
};
