import * as Yup from "yup";

const verificationSchema = Yup.object().shape({
  id: Yup.string().required("Required"),
  otp: Yup.string()
  .required("Required")
  .matches(/^[0-9]{6}$/, "OTP must be of length 6")
});

export { verificationSchema };
