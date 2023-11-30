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
      transactionType: "P",
      ltp: null,
    },
    validationSchema: addAlertSchema,
    enableReinitialize:true,
    onSubmit: (value) => {
      const submitedValue = { ...value, alertMethod: "SMS" };
      mutate(submitedValue, {
        onSuccess: () => {
          handleClear();
        },
      });
    },
  });
  console.log(formik,"formik");

  // const handleClear = () => {
  //   formik.setFieldValue('companyInfoId', null)
  //   formik.setFieldValue('ltp', null)
  //   formik.setFieldValue('alertType', null)
  //   formik.setFieldValue('triggerPrice', '')
  //   formik.setFieldValue('transactionType', 'PURCHASE')
  // };

  const handleClear = () => {
    formik.resetForm({
      values: {
        companyInfoId: "",
        alertType: "",
        triggerPrice: "",
        alertMethod: "",
        transactionType: "P",
        ltp: null,
      },
    });
  };

  return {
    formik,
    handleClear,
  };
};
