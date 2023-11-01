import { useFormik } from "formik";
import { useAddCreateAlert } from "./useAlertPost";
import { addAlertSchema } from "./createAlertValidation";

export const useAlertForm = () => {
  const { mutate } = useAddCreateAlert({});

  const formik = useFormik({
    initialValues: {
      companyInfoId: "",
      alertType: "",
      triggerPrice: "",
      alertMethod: "",
      transactionType: "PURCHASE",
      ltp: null,
    },

    validationSchema: addAlertSchema,
    onSubmit: (value) => {
      console.log(value)
      // const submitedValue = { ...value, alertMethod: "EMAIL" }; 
      const submitedValue = { ...value };
      handlePost(submitedValue);
    },
  });

  const handlePost = (value) => {
    mutate(value);
  };
  const handleClear = () => {
    formik.resetForm();
  };
  return {
    handlePost,
    formik,
    handleClear,
  };
};
