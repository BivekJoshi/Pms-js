import { useEffect } from 'react';
import { useFormik } from "formik";
import { useAddBODetail } from "../../../../../hooks/Kyc/individual/boStatement/useAddKycBo";
import { useAddBoCorporate } from "../../../../../hooks/Kyc/corporate/BodCorporate/useBodCorporate";

export const useKycBoIndividualForm = (data) => {
  const { mutate } = useAddBODetail({});

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


export const useKycBocorporateForm = (data) => {
  const { mutate } = useAddBoCorporate({});

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
