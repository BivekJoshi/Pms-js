// import { useState } from 'react';
// import { useFormik } from 'formik';
// import { useVerification } from '../../../hooks/auth/useAuth';
// import { verificationSchema } from './verificationValidationSchema';

// export const useVerificationForm = (id,otp) => {
//   const newId = id;
//   const newOtp = otp;
//   const [loading, setLoading] = useState(false);
//   const { mutate } = useVerification({});

//   const formik = useFormik({

//     initialValues: {
//       id: newId || "",
//       otp: newOtp || "",
//     },
//     validationSchema: verificationSchema,
//     onSubmit: (values) => {
//       setLoading(true);
//       handleVerification(values);
//     },
//   });

//   const handleVerification = (values) => {
//     const { id, otp } = values;
//     mutate(
//       { id, otp },
//       { onSettled: () => setLoading(false) }
//     );
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return {
//     handleVerification,
//     formik,
//     loading,
//     handleMouseDownPassword,
//   };
// };

import { useState } from 'react';
import {
  useResendVerification,
  useVerification,
} from '../../../hooks/auth/useAuth';

export const useVerificationForm = () => {
  // Remove id and otp parameters
  const [loading, setLoading] = useState(false);
  const { mutate } = useVerification({});

  // const formik = useFormik({
  //   initialValues: {
  //     id: "",
  //     otp: "",
  //   },
  //   validationSchema: verificationSchema,
  //   onSubmit: (values) => {
  //     setLoading(true);
  //     handleVerification(values);
  //   },
  // });

  const handleVerification = (values) => {
    setLoading(true);
    const { id, otp } = values;

    mutate({ id, otp }, { onSettled: () => setLoading(false) });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleVerification,
    // formik,
    loading,
    handleMouseDownPassword,
  };
};

export const useResendVerificationForm = () => {
  // Remove id and otp parameters
  const [load, setLoad] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const { mutate } = useResendVerification({});

  // const formik = useFormik({
  //   initialValues: {
  //     id: '',
  //   },
  //   onSubmit: (values) => {
  //     setLoad(true);
  //     handleResendVerification(values);
  //   },
  // });

  const handleResendVerification = (values) => {
    const { id } = values;
    mutate(
      { id },
      {
        onSuccess: () => {
          setResetTimer(true);
          setTimeout(() => {
            setResetTimer(false);
          }, 5000);
        },
      },
      { onError: () => setResetTimer(false) },
      {
        onSettled: () => setLoad(false),
      }
    );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return {
    handleResendVerification,
    load,
    resetTimer,
    handleMouseDownPassword,
  };
};

