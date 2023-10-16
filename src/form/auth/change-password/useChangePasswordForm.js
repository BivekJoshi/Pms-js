import { useFormik } from "formik";
import { useChangePassword } from "../../../hooks/auth/useChangePassword";
import { useState } from "react";
import { changepasswordSchema } from "./changepasswordSchema";

export const useChangePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [showValues, setShowValues] = useState({
    oldPassword: "",
    newPassword: "",
    rePassword: false,
  });

  const { mutate } = useChangePassword({});
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      rePassword: "",
    },
    validationSchema: changepasswordSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleRegister(values);
    },
  });

  // const handleRegister = (values) => {
  //   const { oldPassword, newPassword, rePassword } = values;
  //   mutate({ oldPassword, newPassword, rePassword });
  // };
  const handleRegister = (values) => {
    values = {
      ...values,
    };
    mutate(
      values,
      formik,
      { onSuccess: () => formik.handleReset() },
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
    handleRegister,
    formik,
    loading,
    showValues,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};

// import React, { useState } from "react";
// import { useFormik } from "formik";
// import { useAddResetPassword, useGetLoggedInUser } from "../usePassword";
// import { ResetPasswordSchema } from "./ResetPasswordSchema";

// const useAddForgotPasswordForm = () => {
//   const [loading, setLoading] = useState(false);
//   const [showValues, setShowValues] = useState({
//     oldPassword: "",
//     password: "",
//     showPassword: false,
//   });
//   const { data: loggedInUser } = useGetLoggedInUser();
//   const id = loggedInUser?.id;
//   const { mutate } = useAddResetPassword({id});

//   const formik = useFormik({
//     initialValues: {
//       oldPassword: "",
//       password: "",
//     },
//     validationSchema: ResetPasswordSchema,
//     onSubmit: (values) => {
//       setLoading(true);
//       handleRequest(values);
//     },
//   });

//   const handleRequest = (values) => {
//     values = {
//       ...values,
//     };
//     mutate(
//       values,
//       formik,
//       { onSuccess: () => formik.handleReset() },
//       { onSettled: () => setLoading(false) }
//     );
//   };

//   const handleClickShowPassword = () => {
//     setShowValues({
//       ...showValues,
//       showPassword: !showValues.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return {
//     formik,
//     loading,
//     showValues,
//     handleClickShowPassword,
//     handleMouseDownPassword,
//   };
// };

// export default useAddForgotPasswordForm;
