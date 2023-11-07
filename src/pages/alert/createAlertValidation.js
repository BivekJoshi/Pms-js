import * as Yup from "yup";

export const addAlertSchema = Yup.object().shape({
  companyInfoId: Yup.string().required("Required"),
  triggerPrice: Yup.string().required("Required"),
  alertType: Yup.string().required("Required"),
  transactionType: Yup.string().required("required"),
  alertMethod: Yup.array().of(
    Yup.string().oneOf(["SMS", "EMAIL"], "Invalid option")
  ),
});
