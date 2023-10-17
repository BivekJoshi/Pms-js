import { useFormik } from "formik";
import { useAddCreateAlert } from "./useAlertPost";
import { addAlertSchema } from "./createAlertValidation";


export const useAlertForm = () => {
  const { mutate } = useAddCreateAlert({
    onSuccess: () => {
      formik.resetForm();
    },
  });

  const formik = useFormik({
    initialValues: {
      companyId: "",
      alertType: "",
      triggerPrice: "",
      transactionType: false,
      alertMethod: "",
      ltp: null,
    },

    validationSchema: addAlertSchema,
    onSubmit: (value) => {
      const submitedValue = { ...value, alertMethod: "EMAIL" };
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
