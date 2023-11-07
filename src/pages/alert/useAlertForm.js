import { useFormik } from "formik";
import { useAddCreateAlert, useGetLtp } from "./useAlertPost";
import { addAlertSchema } from "./createAlertValidation";

export const useAlertForm = () => {
  const { mutate } = useAddCreateAlert({});
  const { data: getltpData } = useGetLtp();

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
      const submitedValue = { ...value, alertMethod: "EMAIL" };
      // handlePost(submitedValue);
      mutate(submitedValue, {
        onSuccess: () => {
          formik.resetForm();
        },
      })
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
