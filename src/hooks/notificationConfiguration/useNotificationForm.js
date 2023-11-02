import { useFormik } from "formik";
import { useEditNotification } from "./useNotification";

const useNotificationForm = (notificationData) => {
  const { mutate: editNotification } = useEditNotification({});

  const formik = useFormik({
    initialValues: {
      ipoFpo: notificationData?.ipoFpo || false,
      rightShare: notificationData?.rightShare || false,
      dividend: notificationData?.dividend || false,
      auction: notificationData?.auction || false,
      bondDebenture: notificationData?.bondDebenture || false,
      agmSgm: notificationData?.agmSgm || false,
      mergerAcquisition: notificationData?.mergerAcquisition || false,
      financialReports: notificationData?.financialReports || false,
      newsLetter: notificationData?.newsLetter || false,
      general: notificationData?.general || false,
    },
    onSubmit: (values) => {
      console.log(values, "Values ma ");
      handleRequest(values);
    },
  });

  const handleRequest = (values) => {
    values = { ...values };
    editNotification(values, formik);
  };

  return { formik };
};

export default useNotificationForm;
