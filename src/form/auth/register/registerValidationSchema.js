import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  nepseCode: Yup.string().required('Nepse code is required'),
  email: Yup.string().email('Enter valid email address').required('Email is required'), 
  brokerNo: Yup.string().required('Broker name is required'),
  mobileNo: Yup.string().required('Mobile number is required'),
});

export { registerSchema };