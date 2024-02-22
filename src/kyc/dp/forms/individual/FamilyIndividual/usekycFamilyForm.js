import { useFormik } from "formik";

export const useKycFamilyForm = () => {

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
