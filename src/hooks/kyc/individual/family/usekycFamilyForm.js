import { useFormik } from "formik";
import { useAddWatchListMaster } from "../../../watchList/useWatchList";

export const useKycFamilyForm = () => {
  const { mutate } = useAddWatchListMaster({});

   const formik = useFormik({
    initialValues: {
      familyDetails: [
        {
          id: "",
          memberName: "",
          relation: "",
          mobileNumber: "",
          email: "",
        }
      ]
    },
  onSubmit: (values) => {
    console.log(values)
  },
});

  return { formik };
};
