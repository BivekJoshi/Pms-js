import * as Yup from 'yup';

const applicationSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Required'),
  submissionNo: Yup.string().required('Required'),
});

export { applicationSchema };