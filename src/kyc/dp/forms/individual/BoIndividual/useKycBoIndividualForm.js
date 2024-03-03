import { useFormik } from "formik";
import { useAddKycBO } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";
import { useEffect } from 'react';

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

  useEffect(() => {
    formik.setValues({
      isStandingInstructionForAutomaticTxn: data?.isStandingInstructionForAutomaticTxn || false,
      accountStatementPeriod: data?.accountStatementPeriod || "",
    });
  }, [data?.isStandingInstructionForAutomaticTxn, data?.accountStatementPeriod]);

  return { formik };
};
