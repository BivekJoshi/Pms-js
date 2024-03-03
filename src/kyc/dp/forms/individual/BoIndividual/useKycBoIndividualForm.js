import { useFormik } from "formik";
import { useAddKycBO } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";

export const useKycBoIndividualForm = (data) => {
  const { mutate } = useAddKycBO({});
console.log("data", data)
  const formik = useFormik({
    initialValues: {
      isStandingInstructionForAutomaticTxn: data?.isStandingInstructionForAutomaticTxn || false,
      accountStatementPeriod: data?.accountStatementPeriod || "",
    },
    onSubmit: (values) => {
      const formData = { ...values };
      mutate(formData, {
        onSuccess: () => {
          formik.resetForm();
        },
      });
    },
  });

  return { formik };
};
