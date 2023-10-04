import { useState } from 'react';
import { useFormik } from 'formik';
import { useApplication } from '../../../hooks/auth/useAuth';
import { applicationSchema } from './applicationValidationSchema';

export const useApplicationForm = () => {
  const [loading, setLoading] = useState(false);

  const { mutate } = useApplication({});
  const formik = useFormik({
    initialValues: {
      email: '',
      submissionNo: '',
    },
    validationSchema: applicationSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleLogin(values);
    },
  });

  const handleLogin = (values) => {
    const { email, submissionNo } = values;
    mutate({ email, submissionNo }, { onSettled: () => setLoading(false) });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleLogin,
    formik,
    loading,
    handleMouseDownPassword,
  };
};
