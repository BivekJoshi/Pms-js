import { useFormik } from "formik";
import { useAddBODetail } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";

export const useKycBoIndividualForm = (data) => {
  const { mutate } = useAddBODetail({});
  const formik = useFormik({
    initialValues: {
      id: data?.id || "",
      userId: data?.userId || "",
      isStandingInstructionForAutomaticTxn:
        data?.isStandingInstructionForAutomaticTxn || false,
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
