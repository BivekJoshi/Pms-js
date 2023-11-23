import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  nepseCode: Yup.string()
    .min(4, "Nepse code must be at least 4 characters")
    .max(30, "Nepse code must not exceed 30 characters")
    .required("Nepse code is required"),
  email: Yup.string()
    .email("Enter valid email address")
    .required("Email is required"),
  brokerNo: Yup.string().required("Broker name is required"),
  mobileNo: Yup.string()
    .min(10, "Mobile number must have at least 10 digits")
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format")
    .matches(/^9\d{9}$/, "Mobile number must start from 9"),
});

export { registerSchema };
