import { useFormik } from "formik";
import { useEditNotification } from "./useNotification";
import { useEffect } from "react";
 
const useNotificationForm = (switchStates) => {
  const { mutate: editNotification } = useEditNotification({});
 
  const formik = useFormik({
    initialValues: {
      ipoFpo: false,
      rightShare: false,
      dividend: false,
      auction: false,
      bondDebenture: false,
      agmSgm: false,
      mergerAcquisition: false,
      financialReports: false,
      newsLetter: false,
      general: false,
    },
    onSubmit: (values) => {
      handleRequest(values);
    },
  });
 
  useEffect(() => {
    updateFormikValues(switchStates);
  }, [switchStates]);
 
  const updateFormikValues = (values) => {
    formik.setValues({
      ipoFpo: values?.ipoFpo || false,
      rightShare: values?.rightShare || false,
      dividend: values?.dividend || false,
      auction: values?.auction || false,
      bondDebenture: values?.bondDebenture || false,
      agmSgm: values?.agmSgm || false,
      mergerAcquisition: values?.mergerAcquisition || false,
      financialReports: values?.financialReports || false,
      newsLetter: values?.newsLetter || false,
      general: values?.general || false,
    });
  };
 
  const resetForm = () => {
    formik.resetForm();
    updateFormikValues(switchStates);
  };
 
  const handleRequest = (values) => {
    values = { ...values };
    editNotification(values, formik);
  };
 
  return { formik, updateFormikValues, resetForm };
};
 
export default useNotificationForm;