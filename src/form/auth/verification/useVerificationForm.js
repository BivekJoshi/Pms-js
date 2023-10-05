import { useState } from 'react';
import { useFormik } from 'formik';
import { useVerification } from '../../../hooks/auth/useAuth';
import { verificationSchema } from './verificationValidationSchema';

export const useVerificationForm = () => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useVerification({});

  const formik = useFormik({
    initialValues: {
      id: '',
      otp: '',
    },
    validationSchema: verificationSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleVerification(values);
    },
  });

  const handleVerification = (values) => {
    const { id, otp } = values;
    mutate(
      { id, otp },
      { onSettled: () => setLoading(false) }
    );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleVerification,
    formik,
    loading,
    handleMouseDownPassword,
  };
};
