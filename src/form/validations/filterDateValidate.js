import * as Yup from 'yup';

export const filterDateValidationSchema = Yup.object().shape({
  // For each form field, specify its validation rules
  // Example: Validate that the 'name' field is required and must be a string
  dateFrom: Yup.string().required('Required'),
  dateTo: Yup.string().required('Required'),
  // Add more fields and validation rules as needed
});
