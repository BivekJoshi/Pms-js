import * as Yup from 'yup';

const verificationSchema = Yup.object().shape({
  id: Yup.string().required('Required'),
  otp: Yup.string().required('Required'),
});

export { verificationSchema };
