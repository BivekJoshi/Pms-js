import * as Yup from "yup";

const corporatBankDetailFormValidationSchema = Yup.object().shape({
  bankName: Yup.string().required("Please enter bank name"),
  accountNumber: Yup.string().required("Please enter account number"),
  accountType: Yup.string().required("Please enter account type"),
  branchAddress: Yup.string().required("Please enter branch address"),
});

export default corporatBankDetailFormValidationSchema;
