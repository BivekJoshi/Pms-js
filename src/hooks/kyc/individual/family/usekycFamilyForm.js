import { useFormik } from "formik";
import { useAddWatchListMaster } from "../../../watchList/useWatchList";

export const useKycFamilyForm = () => {
  const { mutate } = useAddWatchListMaster({});
  const formik = useFormik({
    initialValues: [
      {
        memberName: "",
        relation: "",
        mobileNumber: "",
        email: "",
      },
    ],
    // validationSchema: watchlistMasterSchema,
    onSubmit: (values) => {
      console.log(values)
      // const formData = { ...values };
      // mutate(formData, {
      //   onSuccess: (data) => {
      //     formik.resetForm();
      //   },
      // });
    },
  });
  return { formik };
};
