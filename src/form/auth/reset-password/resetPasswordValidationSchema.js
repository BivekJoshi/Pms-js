import * as Yup from 'yup';

const resetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Email is required'),
  brokerNo: Yup.string().required('Broker name is required'),
  nepseCode: Yup.string().required('Nepse code is required'),
});

const changePasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required('Required'),
  confirmPassword: Yup.string().required('Required'),
});

export { resetPasswordSchema, changePasswordSchema };