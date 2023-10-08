import { useState } from "react";
import { useFormik } from "formik";
import { resetPasswordSchema } from "./resetPasswordValidationSchema";
import { useResetPassword } from "../../../hooks/auth/useAuth";

export const useResetPasswordForm = () => {
  const [loading, setLoading] = useState(false);

  const { mutate } = useResetPassword({});
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      rePassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleResetPassword(values);
    },
  });

  const handleResetPassword = (values) => {
    const { oldPassword, newPassword, rePassword } = values;
    mutate(
      { oldPassword, newPassword, rePassword },
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
