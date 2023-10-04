import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Required'),
  brokerNo: Yup.string().required('Required'),
});

export { registerSchema };
