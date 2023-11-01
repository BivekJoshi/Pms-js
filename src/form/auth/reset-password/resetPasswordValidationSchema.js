import * as Yup from 'yup';

const resetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Email is required'),
  brokerNo: Yup.string().required('Broker name is required'),
  nepseCode: Yup.string().required('Nepse code is required'),
});

const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

const changePasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Required')
    .matches(
      strongPasswordRegex,
      'Password must contain at least 8 characters, including uppercase, lowercase, and a number'
    ),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

export { resetPasswordSchema, changePasswordSchema };
