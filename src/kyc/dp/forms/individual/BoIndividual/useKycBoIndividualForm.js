import { useFormik } from "formik";
import { useAddKycBO } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";

export const useKycBoIndividualForm = (data) => {
  const { mutate } = useAddKycBO({});

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
