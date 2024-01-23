import { useFormik } from "formik";

export const useRightForm = () => {
  const formik = useFormik({
    initialValues: {
      marketPrice: "",
      rightShare: "",
      paidUpPerValue: "",
    },
    onSubmit: (values) => {
      const adjustedPrice =
        (values?.marketPrice +
          (values?.paidUpPerValue * values?.rightShare) / 100) /
        (1 + values?.rightShare / 100);
      formik.setFieldValue("adjustedPrice", adjustedPrice.toFixed(2));
    },
  });

  return {
    formik,
  };
};
