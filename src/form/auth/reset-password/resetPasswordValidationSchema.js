import * as Yup from 'yup';

const resetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Required'),
  brokerNo: Yup.string().required('Required'),
  nepseCode: Yup.string().required('Required'),
});

const changePasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required('Required'),
  confirmPassword: Yup.string().required('Required'),
});

export { resetPasswordSchema, changePasswordSchema };