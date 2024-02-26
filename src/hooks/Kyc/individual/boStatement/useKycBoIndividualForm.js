import { useFormik } from "formik";

export const useKycBoIndividualForm = () => {
  const formik = useFormik({
    initialValues: {
      isStandingInstructionForAutomaticTxn: false,
      accountStatementPeriod: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
};
