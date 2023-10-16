import { useState } from "react";
import { useFormik } from "formik";
import { changePasswordSchema, resetPasswordSchema } from "./resetPasswordValidationSchema";
import { useChangePassword, useResetPassword } from "../../../hooks/auth/useAuth";

export const useResetPasswordForm = () => {
  const [loading, setLoading] = useState(false);

  const { mutate } = useResetPassword({});
  const formik = useFormik({
    initialValues: {
      brokerNo: "",
      email: "",
      nepseCode: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleResetPassword(values);
    },
  });

  const handleResetPassword = (values) => {
    const { brokerNo, email, nepseCode } = values;
    mutate(
      { brokerNo, email, nepseCode },
      { onSettled: () => setLoading(false) }
    );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleResetPassword,
    formik,
    loading,
    handleMouseDownPassword,
  };
};

export const useChangePasswordForm = (id) => {
  const [loading, setLoading] = useState(false);
  const [showValues, setShowValues] = useState({
    newPassword: '',
    confirmPassword: '',
    showPassword: false,
  });

  const { mutate } = useChangePassword({id});
  const formik = useFormik({
    initialValues: {
      id: id,
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleResetPassword(values);
    },
  });

  const handleResetPassword = (values) => {
    const { id, newPassword, confirmPassword } = values;
    mutate(
      { id, newPassword, confirmPassword },
      { onSettled: () => setLoading(false) }
    );
  };

  const handleClickShowPassword = () => {
    setShowValues({
      ...showValues,
      showPassword: !showValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleResetPassword,
    showValues,
    formik,
    loading,
    handleMouseDownPassword,
    handleClickShowPassword
  };
};
