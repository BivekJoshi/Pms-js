import { useFormik } from "formik";
import { useAddCreateAlert, useEditStockAlert } from "./useAlertPost";
import { addAlertSchema } from "./createAlertValidation";

export const useAlertForm = (rowData, onClose) => {
  const id = rowData?.id;

  const { mutate: addAlert } = useAddCreateAlert({});
  const { mutate: editAlert } = useEditStockAlert({ id });

  const formik = useFormik({
    initialValues: {
      companyInfoId: rowData?.companyInfoId || "",
      alertType: rowData?.alertType || "",
      triggerPrice: rowData?.triggerPrice || "",
      alertMethod: rowData?.alertMethod || "",
      transactionType: rowData?.transactionType || "P",
      ltp: null,
    },
    validationSchema: addAlertSchema,

    enableReinitialize: true,

    //   onSubmit: (value) => {
    //     const submitedValue = { ...value, alertMethod: "SMS" };
    //     mutate(submitedValue, {
    //       onSubmit: (values) => {
    //         if (rowData?.id) {
    //           handledEditRequest(values);
    //         } else {
    //           handleRequest(values);
    //         }
    //       },
    //     });
    //   },
    // });

    onSubmit: (values) => {
      if (rowData?.id) {
        handledEditRequest(values);
      } else {
        handleRequest(values);
        handleClear();
      }
    },
  });

  const handleRequest = (values) => {
    values = { ...values };
    addAlert(values, formik, {
      onSuccess: () => {
        handleClear();
      },
    });
  };

  const handledEditRequest = (values) => {
    values = { ...values };
    editAlert(values, {
      onSuccess: () => {
        onClose();
        formik.resetForm();
      },
    });
  };

  const handleClear = () => {
    formik.resetForm({
      values: {
        companyInfoId: "",
        alertType: "",
        triggerPrice: "",
        alertMethod: "",
        transactionType: "",
        ltp: null,
      },
    });
  };

  return { formik, handleClear };
};
