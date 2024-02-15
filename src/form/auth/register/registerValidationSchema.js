import * as yup from "yup";

const dematRegisterSchema = yup.object().shape({
  accountType: yup.string().required("Required"),
  name: yup.string().required("Required"),
  clientType: yup.string().required("Required"),
  branch: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Email is required"),
  mobileNumber: yup
    .string()
    .min(10, "Mobile number must have at least 10 digits")
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format")
    .matches(/^9\d{9}$/, "Mobile number must start from 9"),
});

const tmsRegisterSchema = yup.object().shape({
  accountType: yup.string().required("Required"),
  name: yup.string().required("Required"),
  branch: yup.string().required("Required"),
  dpId: yup.string().required("Required"),
  dematNumber: yup.string().required("Required"),

  clientType: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Email is required"),
  mobileNumber: yup
    .string()
    .min(10, "Mobile number must have at least 10 digits")
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format")
    .matches(/^9\d{9}$/, "Mobile number must start from 9"),
});

const pmsRegisterSchema = yup.object().shape({
  accountType: yup.string().required("Required"),
  name: yup.string().required("Required"),
  boidNumber: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Email is required"),
  mobileNumber: yup
    .string()
    .min(10, "Mobile number must have at least 10 digits")
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format")
    .matches(/^9\d{9}$/, "Mobile number must start from 9"),
});

export { dematRegisterSchema, tmsRegisterSchema, pmsRegisterSchema };
