import { useFormik } from "formik";
import React, { useState } from "react";
import { addChangePassword } from "../../../api/password/password-api";
import { changePasswordValidatioSchema } from "./changePasswordValidatioSchema";

const changePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [showValues, setShowValues] = useState({
    oldPassword: "",
    password: "",
    rePassword: "",
    showPassword: false,
  });
  const { mutate } = addChangePassword({});
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      rePassword: "",
    },
    validationSchema: changePasswordValidatioSchema,
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
    showValues,
    formik,
    loading,
    handleMouseDownPassword,
    handleClickShowPassword,
  };
};

export default changePasswordForm;
