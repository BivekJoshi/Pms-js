import { useFormik } from "formik";
import { useAddWatchListMaster } from "../../../watchList/useWatchList";

export const useKycFamilyForm = () => {
  const { mutate } = useAddWatchListMaster({});
  const formik = useFormik({
    initialValues: [
      {
        memberName: "",
        relation: "",
        relation: "",
        mobileNumber: "",
      },
    ],
    // validationSchema: watchlistMasterSchema,
    onSubmit: (values) => {
      const formData = { ...values };
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });
  return { formik };
};
