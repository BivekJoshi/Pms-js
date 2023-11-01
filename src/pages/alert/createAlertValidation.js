import * as Yup from "yup";

export const addAlertSchema = Yup.object().shape({
  companyInfoId: Yup.string().required("Please provide company name"),
  triggerPrice: Yup.string().required("Provide trigger price"),
  alertType: Yup.string().required("Provide alert type"),
  alertMethod: Yup.string().required("Provide alert method"),
});
