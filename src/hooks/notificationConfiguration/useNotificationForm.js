import { useFormik } from "formik";
import { useEditNotification } from "./useNotification";

const useNotificationForm = (switchStates) => {
  const { mutate: editNotification } = useEditNotification({});

  const formik = useFormik({
    initialValues: {
      ipoFpo: switchStates?.ipoFpo || false,
      rightShare: switchStates?.rightShare || false,
      dividend: switchStates?.dividend || false,
      auction: switchStates?.auction || false,
      bondDebenture: switchStates?.bondDebenture || false,
      agmSgm: switchStates?.agmSgm || false,
      mergerAcquisition: switchStates?.mergerAcquisition || false,
      financialReports: switchStates?.financialReports || false,
      newsLetter: switchStates?.newsLetter || false,
      general: switchStates?.general || false,
    },
    onSubmit: (values) => {
      handleRequest(values);
    },
  });

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
    formik.setValues({
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
    });
  };

  const handleRequest = (values) => {
    values = { ...values };
    editNotification(values, formik);
  };

  return { formik, updateFormikValues, resetForm };
};

export default useNotificationForm;
