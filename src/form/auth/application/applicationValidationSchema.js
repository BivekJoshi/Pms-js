import * as Yup from 'yup';

const applicationSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Email is required'),
  submissionNo: Yup.string().required('Submission number is required'),
});

export { applicationSchema };