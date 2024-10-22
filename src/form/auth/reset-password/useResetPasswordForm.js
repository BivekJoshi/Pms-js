import { useState } from "react";
import { useFormik } from "formik";
import { changePasswordSchema, resetPasswordSchema } from "./resetPasswordValidationSchema";
import { useResetPassword, useVerifyResetPassword } from "../../../hooks/auth/useAuth";

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

export const useVerifyResetPasswordForm = (id) => {
  const [loading, setLoading] = useState(false);
  const [showValues, setShowValues] = useState({
    newPassword: '',
    confirmPassword: '',
    // showPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const { mutate } = useVerifyResetPassword({id});
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
      showNewPassword: !showValues.showNewPassword,
      showConfirmPassword: !showValues.showConfirmPassword,
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
