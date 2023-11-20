import * as Yup from "yup";

export const filterDateValidationSchema = Yup.object().shape({
  // For each form field, specify its validation rules
  // Example: Validate that the 'name' field is required and must be a string
  dateFrom: Yup.string()
    .required("Date From is required")
    .test("dateFrom", "Date From must be before Date To", function (value) {
      const { dateTo } = this.parent;
      if (value && dateTo) {
        return new Date(value) <= new Date(dateTo);
      }
      return true;
    }),
  dateTo: Yup.string()
    .required("Date To is required")
    .test("dateTo", "Date To must be after Date From", function (value) {
      const { dateFrom } = this.parent;
      if (value && dateFrom) {
        return new Date(value) >= new Date(dateFrom);
      }
      return true;
    }),
});
