import { useFormik } from "formik";

export const useKycBankForm = () => {
  const formik = useFormik({
    initialValues: {
      bankName: "",
      accountNumber: "",
      accountType: "",
      branchAddress: "",
    },
    // validationSchema: watchlistMasterSchema,
    onSubmit: (values) => {
      const formData = { ...values };
      console.log(values);
    },
  });
  return { formik };
};
