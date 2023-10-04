import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Required'),
  brokerNo: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export { loginSchema };
