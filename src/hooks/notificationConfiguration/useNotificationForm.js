import { useFormik } from "formik";
import { useEditNotification } from "./useNotification";

const useNotificationForm = ( data ) => {
  console.log(data, "data ma ");

  const { mutate: editNotification } = useEditNotification({});

  const formik = useFormik({
    initialValues: {
      ipoFpo: data?.ipoFpo || false,
      rightShare: data?.rightShare || false,
      dividend: data?.dividend || false,
      auction: data?.auction || false,
      bondDebenture: data?.bondDebenture || false,
      agmSgm: data?.agmSgm || false,
      mergerAcquisition: data?.mergerAcquisition || false,
      financialReports: data?.financialReports || false,
      newsLetter: data?.newsLetter || false,
      general: data?.general || false,
    },
    // validationSchema: NotificationSchema,
    onSubmit: (values) => {
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
