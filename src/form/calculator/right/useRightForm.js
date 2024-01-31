import { useFormik } from "formik";

export const useRightForm = () => {
  const calculateAdjustedPrice = (values) => {
    const adjustedPrice =
      (values?.marketPrice +
        (values?.paidUpPerValue * values?.rightShare) / 100) /
      (1 + values?.rightShare / 100);

    return {
      adjustedPrice: adjustedPrice.toFixed(2),
    };
  };

  const formik = useFormik({
    initialValues: {
      marketPrice: "",
      rightShare: "",
      paidUpPerValue: "",
      adjustedPrice: "", // Initialize with 0
    },
    onSubmit: (values) => {
      try {
        const calculatedValues = calculateAdjustedPrice(values);
        // Update formik state with the new values
        formik.setValues({
          ...values,
          ...calculatedValues,
        });

        // Your other form submission logic
      } catch (error) {
        // Handle errors
        console.error("An error occurred:", error);
      }
    },
  });

  return {
    formik,
  };
};
