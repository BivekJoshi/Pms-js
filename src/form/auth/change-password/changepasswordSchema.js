import * as Yup from 'yup';

const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

const changepasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Required'),
  newPassword: Yup.string()
    .required('Required')
    .matches(
      strongPasswordRegex,
      'Password must contain at least 8 characters, including uppercase, lowercase, and a number'
    )
    .oneOf([Yup.ref('rePassword')], 'Passwords must match'),
  rePassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

export { changepasswordSchema };
