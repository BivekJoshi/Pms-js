import * as Yup from "yup";

export const filterDateValidationSchema = (validateDateNumber = 30) => {
  return Yup.object().shape({
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
      .test("dateTo", "Date To must be less than Date From", function (value) {
        const { dateFrom } = this.parent;
        if (value && dateFrom) {
          return new Date(value) >= new Date(dateFrom);
        }
        return true;
      })
      .test(
        "dateTo",
        `Date Range must be within ${validateDateNumber} days`,
        function (value) {
          const { dateFrom } = this.parent;
          const lastDate = new Date(dateFrom);
          lastDate.setDate(
            lastDate.getDate() + parseInt(validateDateNumber, 10)
          );

          if (value) {
            const endDate = new Date(value);
            return endDate <= lastDate;
          }

          return true;
        }
      ),
  });
};

export const filterTransactionSchema = Yup.object().shape({
  transactionType: Yup.string().required("Required"),
});
