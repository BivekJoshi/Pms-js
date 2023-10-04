import { useState } from 'react';
import { useFormik } from 'formik';
import { registerSchema } from './registerValidationSchema';
import { useRegister } from '../../../hooks/auth/useAuth';

export const useRegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { mutate } = useRegister({});
  const formik = useFormik({
    initialValues: {
      nepseCode: '',
      email: '',
      brokerNo: '',
      mobileNo: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleRegister(values);
    },
  });

  const handleRegister = (values) => {
    const { email, brokerNo, nepseCode, mobileNo } = values;
    mutate(
      { email, brokerNo, nepseCode, mobileNo },
      { onSettled: () => setLoading(false) }
    );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleRegister,
    formik,
    loading,
    handleMouseDownPassword,
  };
};
