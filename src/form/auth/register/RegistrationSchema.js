import * as Yup from "yup";

export const FirstStepSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
});
