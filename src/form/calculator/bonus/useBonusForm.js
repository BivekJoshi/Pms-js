import { useFormik } from "formik";

export const useBonusForm = () => {
  const formik = useFormik({
    initialValues: {
      marketPrice: "",
      bonusShare: "",
    },
    onSubmit: (values) => {
      const adjustedPrice =
        values?.marketPrice / (1 + values?.bonusShare / 100);
      formik.setFieldValue("adjustedPrice", adjustedPrice.toFixed(2));
    },
  });

  return {
    formik,
  };
};
