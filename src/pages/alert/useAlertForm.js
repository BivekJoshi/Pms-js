// import { useFormik } from "formik";
// import { useAddCreateAlert } from "./useAlertPost";
// import { addAlertSchema } from "./createAlertValidation";

// export const useAlertForm = () => {
//   const { mutate } = useAddCreateAlert({});

//   const formik = useFormik({
//     initialValues: {
//       companyInfoId: "",
//       alertType: "",
//       triggerPrice: "",
//       alertMethod: "",
//       transactionType: "P",
//       ltp: null,
//     },
//     validationSchema: addAlertSchema,
//     enableReinitialize:true,
//     onSubmit: (value) => {
//       const submitedValue = { ...value, alertMethod: "SMS" };
//       mutate(submitedValue, {
//         onSuccess: () => {
//           handleClear();
//         },
//       });
//     },
//   });
//   console.log(formik,"formik");

//   // const handleClear = () => {
//   //   formik.setFieldValue('companyInfoId', null)
//   //   formik.setFieldValue('ltp', null)
//   //   formik.setFieldValue('alertType', null)
//   //   formik.setFieldValue('triggerPrice', '')
//   //   formik.setFieldValue('transactionType', 'PURCHASE')
//   // };

//   const handleClear = () => {
//     formik.resetForm({
//       values: {
//         companyInfoId: "",
//         alertType: "",
//         triggerPrice: "",
//         alertMethod: "",
//         transactionType: "P",
//         ltp: null,
//       },
//     });
//   };

//   return {
//     formik,
//     handleClear,
//   };
// };

import { useFormik } from "formik";
import { useAddCreateAlert, useEditStockAlert } from "./useAlertPost";
import { addAlertSchema } from "./createAlertValidation";

export const useAlertForm = (rowData) => {
  const { mutate: addAlert } = useAddCreateAlert({});
  const { mutate: editAlert } = useEditStockAlert({});

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
      console.log(values,"values hai ma chai");
      if (rowData?.id) {
        handledEditRequest(values);
      } else {
        handleRequest(values);
      }
    },
  });

  const handleRequest = (values) => {
    values = { ...values };
    addAlert(values, formik);
  };

  const handledEditRequest = (values) => {
    // console.log(values, "values");
    values = { ...values };
    editAlert(values, formik);
  };

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
