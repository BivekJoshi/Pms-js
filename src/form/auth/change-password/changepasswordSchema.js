import * as Yup from 'yup';

const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./]).{8,}$/;

const changepasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Required'),
  newPassword: Yup.string()
    .required('Required')
    .matches(
      strongPasswordRegex,
      'Password must contain at least 8 characters, including uppercase, lowercase, special character and a number'
    )
    .notOneOf([Yup.ref('oldPassword')], 'New password cannot be the same as the old password')
    .oneOf([Yup.ref('rePassword')], 'Passwords must match'),
  rePassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

export { changepasswordSchema };
