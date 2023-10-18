import * as Yup from "yup";

export const addAlertSchema = Yup.object().shape({
  companyId: Yup.string().required("Required"),
  triggerPrice: Yup.string().required("Required"),
  alertType:Yup.string().required("Required")
});
