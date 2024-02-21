import { useFormik } from "formik";
import { useAddWatchListMaster } from "../../../watchList/useWatchList";

export const useKycFamilyForm = () => {
  const { mutate } = useAddWatchListMaster({});

  const formik = useFormik({
    initialValues: {
      email:"",
      mobileNumber:"",
      memberName: "",
      relation: "referralPerson",
      familyDetails: [
        {
          memberName: "",
          relation: "father",
        },
        {
          memberName: "",
          relation: "mother",      
        },
        {
          memberName: "",
          relation: "grandFather",      
        },
      ],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
};
